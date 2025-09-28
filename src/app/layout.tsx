import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Git ASCII - 现代化的 Git 可视化工具',
  description: '让代码历史变得生动有趣，通过 ASCII 艺术展示 Git 提交历史',
  keywords: ['git', 'visualization', 'ascii', 'developer', 'tools'],
  authors: [{ name: 'Git ASCII Team' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
