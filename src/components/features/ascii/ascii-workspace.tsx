'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import { AsciiRenderer, AsciiSource } from './ascii-renderer'
import { AsciiUploader } from './ascii-uploader'
import { AsciiPlayer } from './ascii-player'

interface SourceState {
  source: AsciiSource | null
  url?: string
}

export function AsciiWorkspace() {
  const [sourceState, setSourceState] = useState<SourceState>({ source: null })
  const [frame, setFrame] = useState('')
  const [isPlaying, setIsPlaying] = useState(true)
  const [frameRate, setFrameRate] = useState(15)
  const [maxWidth, setMaxWidth] = useState(100)
  const [characterRamp, setCharacterRamp] = useState(" .:-=+*#%@")

  const isCameraActive = useMemo(() => sourceState.source?.kind === 'camera', [sourceState.source])

  const updateFrame = useCallback((value: string) => {
    setFrame(value)
  }, [])

  const handleFileSelected = useCallback((file: File) => {
    const url = URL.createObjectURL(file)
    const type = file.type.startsWith('video') ? 'video' : 'image'

    setSourceState((prev) => {
      if (prev.url) {
        URL.revokeObjectURL(prev.url)
      }
      return {
        source: {
          kind: 'file',
          type,
          url,
          name: file.name,
          mimeType: file.type,
        },
        url,
      }
    })
    setIsPlaying(true)
  }, [])

  const handleToggleCamera = useCallback(async () => {
    if (isCameraActive) {
      setSourceState((prev) => {
        if (prev.source?.kind === 'camera') {
          prev.source.stream.getTracks().forEach((track) => track.stop())
        }
        return { source: null }
      })
      return
    }

    if (typeof navigator === 'undefined' || !navigator.mediaDevices?.getUserMedia) {
      alert('当前浏览器不支持摄像头访问')
      return
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { width: 640 }, audio: false })
      setSourceState((prev) => {
        if (prev.url) {
          URL.revokeObjectURL(prev.url)
        }
        return {
          source: {
            kind: 'camera',
            stream,
          },
        }
      })
      setIsPlaying(true)
    } catch (error) {
      console.error('无法获取摄像头', error)
      alert('启动摄像头失败，请检查权限设置。')
    }
  }, [isCameraActive])

  const handleClear = useCallback(() => {
    setSourceState((prev) => {
      if (prev.source?.kind === 'camera') {
        prev.source.stream.getTracks().forEach((track) => track.stop())
      }
      if (prev.url) {
        URL.revokeObjectURL(prev.url)
      }
      return { source: null }
    })
    setFrame('')
    setIsPlaying(false)
  }, [])

  useEffect(() => {
    return () => {
      setSourceState((prev) => {
        if (prev.source?.kind === 'camera') {
          prev.source.stream.getTracks().forEach((track) => track.stop())
        }
        if (prev.url) {
          URL.revokeObjectURL(prev.url)
        }
        return prev
      })
    }
  }, [])

  return (
    <div className="grid gap-6 lg:grid-cols-[360px_1fr]">
      <AsciiUploader
        onFileSelected={handleFileSelected}
        onClear={handleClear}
        onRequestCamera={handleToggleCamera}
        isCameraActive={isCameraActive}
      />

      <div className="space-y-6">
        <AsciiPlayer
          frame={frame}
          isPlaying={isPlaying}
          onTogglePlay={() => setIsPlaying((prev) => !prev)}
          frameRate={frameRate}
          onFrameRateChange={setFrameRate}
          maxWidth={maxWidth}
          onWidthChange={setMaxWidth}
          characterRamp={characterRamp}
          onCharacterRampChange={setCharacterRamp}
        />
      </div>

      <AsciiRenderer
        source={sourceState.source}
        onFrame={updateFrame}
        options={{ frameRate, maxWidth, characterRamp }}
        isPlaying={isPlaying}
      />
    </div>
  )
}
