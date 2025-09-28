import { cn } from '@/lib/utils'

interface FooterProps {
  className?: string
}

export function Footer({ className }: FooterProps) {
  return (
    <footer className={cn('border-t border-slate-800 bg-slate-950/95 text-slate-400', className)}>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold text-slate-100 mb-4">ASCII Motion Studio</h3>
            <p className="text-sm leading-relaxed">
              以文本的方式体验视觉艺术。灵活的转换算法让任何图像与视频都能化身为细腻的 ASCII 动画。
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-100 mb-4">资源</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:text-indigo-300 transition-colors">
                  产品首页
                </a>
              </li>
              <li>
                <a href="https://ascii-motion.app/" target="_blank" rel="noreferrer" className="hover:text-indigo-300 transition-colors">
                  原项目
                </a>
              </li>
              <li>
                <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-indigo-300 transition-colors">
                  GitHub 仓库
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-100 mb-4">联系我们</h4>
            <ul className="space-y-2 text-sm">
              <li>邮箱：hello@ascii-motion.dev</li>
              <li>Twitter：@ascii_motion</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-800 pt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} ASCII Motion Studio. 保留所有权利。
        </div>
      </div>
    </footer>
  )
}
