'use client'

import { useEffect, useRef } from 'react'
import { AsciiOptions, convertElementToAscii } from '@/lib/ascii'

export type AsciiSource =
  | {
      kind: 'file'
      type: 'image' | 'video'
      url: string
      name: string
      mimeType: string
    }
  | {
      kind: 'camera'
      stream: MediaStream
    }

interface AsciiRendererProps {
  source: AsciiSource | null
  onFrame: (frame: string) => void
  options: AsciiOptions & { frameRate: number }
  isPlaying: boolean
}

export function AsciiRenderer({ source, onFrame, options, isPlaying }: AsciiRendererProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const optionsRef = useRef(options)
  const isPlayingRef = useRef(isPlaying)

  useEffect(() => {
    optionsRef.current = options
  }, [options])

  useEffect(() => {
    isPlayingRef.current = isPlaying
  }, [isPlaying])

  useEffect(() => {
    if (!source) {
      onFrame('')
      return
    }

    const canvas = canvasRef.current ?? document.createElement('canvas')
    canvasRef.current = canvas

    let animationFrame: number | null = null
    let destroyed = false
    let lastFrameTime = 0

    const renderFrame = (element: HTMLVideoElement | HTMLImageElement | HTMLCanvasElement) => {
      if (destroyed) {
        return
      }

      const { frameRate, ...asciiOptions } = optionsRef.current
      const ascii = convertElementToAscii(element, canvas, asciiOptions)
      onFrame(ascii)
      const now = performance.now()
      lastFrameTime = now
    }

    const loop = (
      element: HTMLVideoElement | HTMLImageElement | HTMLCanvasElement
    ) => {
      const step = (timestamp: number) => {
        if (destroyed) {
          return
        }

        const { frameRate } = optionsRef.current
        const interval = 1000 / frameRate
        if (!isPlayingRef.current) {
          animationFrame = requestAnimationFrame(step)
          return
        }

        if (timestamp - lastFrameTime >= interval) {
          renderFrame(element)
        }

        animationFrame = requestAnimationFrame(step)
      }

      animationFrame = requestAnimationFrame(step)
    }

    const cleanup = () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }

    if (source.kind === 'camera') {
      const video = document.createElement('video')
      video.playsInline = true
      video.muted = true
      video.autoplay = true
      video.srcObject = source.stream

      const start = async () => {
        try {
          await video.play()
          renderFrame(video)
          loop(video)
        } catch (error) {
          console.error('无法播放摄像头流', error)
        }
      }

      start()

      return () => {
        destroyed = true
        cleanup()
        video.srcObject = null
      }
    }

    if (source.type === 'video') {
      const video = document.createElement('video')
      video.src = source.url
      video.crossOrigin = 'anonymous'
      video.loop = true
      video.muted = true
      video.playsInline = true

      const onLoaded = async () => {
        try {
          await video.play()
          renderFrame(video)
          loop(video)
        } catch (error) {
          console.error('无法播放视频', error)
        }
      }

      video.addEventListener('loadeddata', onLoaded)

      return () => {
        destroyed = true
        cleanup()
        video.pause()
        video.removeEventListener('loadeddata', onLoaded)
      }
    }

    const image = new Image()
    image.src = source.url
    image.crossOrigin = 'anonymous'

    const startImageLoop = () => {
      renderFrame(image)
      if (source.mimeType === 'image/gif') {
        loop(image)
      }
    }

    if (image.decode) {
      image
        .decode()
        .then(startImageLoop)
        .catch(() => {
          image.onload = startImageLoop
        })
    } else {
      image.onload = startImageLoop
    }

    return () => {
      destroyed = true
      cleanup()
    }
  }, [source, onFrame])

  return null
}
