'use client'

import { MainLayout } from '@/components/layout/main-layout'
import { AsciiWorkspace } from '@/components/features/ascii/ascii-workspace'

export default function HomePage() {
  return (
    <MainLayout className="bg-slate-950 text-slate-100">
      <div className="space-y-12">
        <section className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-950 p-10 text-center shadow-2xl">
          <p className="mb-4 inline-flex items-center rounded-full border border-indigo-500/40 bg-indigo-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-indigo-200">
            实时 ASCII 动画工作台
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            将图像、GIF、视频与摄像头画面即时转换为 ASCII 艺术
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base text-slate-300">
            上传素材或连接摄像头，调整帧率、分辨率以及字符集，即可获得独特的文本化动画体验。强大的像素采样与亮度映射算法让 ASCII 艺术兼具细腻与性能。
          </p>
        </section>

        <AsciiWorkspace />
      </div>
    </MainLayout>
  )
}
