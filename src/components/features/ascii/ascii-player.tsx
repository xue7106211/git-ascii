'use client'

import { useMemo } from 'react'
import { cn } from '@/lib/utils'

interface AsciiPlayerProps {
  frame: string
  isPlaying: boolean
  onTogglePlay: () => void
  frameRate: number
  onFrameRateChange: (value: number) => void
  maxWidth: number
  onWidthChange: (value: number) => void
  characterRamp: string
  onCharacterRampChange: (value: string) => void
}

const CHARACTER_PRESETS = [
  { label: '经典', value: " .:-=+*#%@" },
  { label: '块状', value: " ░▒▓█" },
  { label: '细腻', value: " .'`^\",:;Il!i><~+_-?][}{1)(|\\/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$" },
  { label: '数字', value: ' 1234567890' },
]

export function AsciiPlayer({
  frame,
  isPlaying,
  onTogglePlay,
  frameRate,
  onFrameRateChange,
  maxWidth,
  onWidthChange,
  characterRamp,
  onCharacterRampChange,
}: AsciiPlayerProps) {
  const isFrameEmpty = useMemo(() => frame.trim().length === 0, [frame])

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-3 flex-wrap bg-slate-900/60 border border-slate-800 rounded-xl px-4 py-3">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onTogglePlay}
            className="inline-flex items-center justify-center rounded-full bg-indigo-500 hover:bg-indigo-400 text-white px-4 py-2 text-sm font-medium transition"
          >
            {isPlaying ? '暂停' : '播放'}
          </button>
          <div className="flex items-center gap-2 text-xs text-slate-300">
            <label className="font-medium">帧率</label>
            <input
              type="range"
              min={5}
              max={30}
              value={frameRate}
              onChange={(event) => onFrameRateChange(Number(event.target.value))}
              className="h-2 w-32 cursor-pointer"
            />
            <span className="font-mono text-slate-400">{frameRate} fps</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-300">
            <label className="font-medium">宽度</label>
            <input
              type="range"
              min={40}
              max={180}
              value={maxWidth}
              onChange={(event) => onWidthChange(Number(event.target.value))}
              className="h-2 w-32 cursor-pointer"
            />
            <span className="font-mono text-slate-400">{maxWidth} 列</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-300">
          <label className="font-medium" htmlFor="charset-selector">
            字符集
          </label>
          <select
            id="charset-selector"
            value={characterRamp}
            onChange={(event) => onCharacterRampChange(event.target.value)}
            className="bg-slate-800 border border-slate-700 text-slate-200 text-xs rounded-md px-2 py-1"
          >
            {CHARACTER_PRESETS.map((preset) => (
              <option key={preset.label} value={preset.value}>
                {preset.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div
        className={cn(
          'relative min-h-[320px] rounded-xl border border-slate-800 bg-black/80 p-4 text-[12px] sm:text-[13px] md:text-sm lg:text-base font-mono text-slate-200 overflow-auto shadow-inner',
          isFrameEmpty && 'flex items-center justify-center text-slate-500'
        )}
      >
        {isFrameEmpty ? (
          <p>上传素材或打开摄像头以开始 ASCII 渲染。</p>
        ) : (
          <pre className="whitespace-pre leading-[0.9] tracking-tight select-text">
            {frame}
          </pre>
        )}
      </div>
    </div>
  )
}
