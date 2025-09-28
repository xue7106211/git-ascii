'use client'

import { useRef } from 'react'

interface AsciiUploaderProps {
  onFileSelected: (file: File) => void
  onClear: () => void
  onRequestCamera: () => void
  isCameraActive: boolean
}

export function AsciiUploader({
  onFileSelected,
  onClear,
  onRequestCamera,
  isCameraActive,
}: AsciiUploaderProps) {
  const inputRef = useRef<HTMLInputElement | null>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      onFileSelected(file)
    }
  }

  return (
    <div className="space-y-4">
      <div className="border border-slate-700/80 bg-slate-900/60 rounded-xl p-6">
        <h2 className="text-lg font-semibold text-slate-100 mb-2">上传素材</h2>
        <p className="text-sm text-slate-400 mb-4">
          支持图片、GIF 与视频，系统会自动转换为 ASCII 艺术。推荐使用较小尺寸以获得最佳体验。
        </p>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            className="inline-flex items-center justify-center rounded-lg border border-slate-700 bg-slate-800/80 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-indigo-500/80 hover:bg-slate-800"
          >
            选择文件
          </button>
          <button
            type="button"
            onClick={onRequestCamera}
            className="inline-flex items-center justify-center rounded-lg border border-slate-700 bg-slate-800/80 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-indigo-500/80 hover:bg-slate-800"
          >
            {isCameraActive ? '关闭摄像头' : '启用实时摄像头'}
          </button>
          <button
            type="button"
            onClick={onClear}
            className="inline-flex items-center justify-center rounded-lg border border-transparent bg-transparent px-4 py-2 text-sm font-medium text-slate-400 transition hover:text-slate-200"
          >
            清空画布
          </button>
        </div>
        <input
          ref={inputRef}
          type="file"
          accept="image/*,video/*"
          className="hidden"
          onChange={handleFileChange}
        />
      </div>
      <div className="border border-slate-800 rounded-lg p-4 bg-slate-900/40 text-xs text-slate-400 leading-relaxed">
        <p className="font-semibold text-slate-200 mb-2">技巧提示</p>
        <ul className="list-disc list-inside space-y-1">
          <li>字符艺术会根据亮度匹配字符，保持素材对比度可以获得更好的效果。</li>
          <li>对于较长视频，可调低帧率与分辨率以优化性能。</li>
          <li>尝试不同的字符集可以获得风格迥异的 ASCII 动画。</li>
        </ul>
      </div>
    </div>
  )
}
