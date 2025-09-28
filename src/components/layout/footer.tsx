import { cn } from '@/lib/utils'

interface FooterProps {
  className?: string
}

export function Footer({ className }: FooterProps) {
  return (
    <footer className={cn('border-t border-gray-200 bg-gray-50', className)}>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Git ASCII</h3>
            <p className="text-gray-600 text-sm">
              一个现代化的 Git 可视化工具，让代码历史变得生动有趣。
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">快速链接</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                  首页
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
                  关于我们
                </a>
              </li>
              <li>
                <a href="/docs" className="text-gray-600 hover:text-gray-900 transition-colors">
                  文档
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">联系我们</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <p>邮箱: contact@git-ascii.com</p>
              <p>GitHub: @git-ascii</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-600">
          <p>&copy; 2024 Git ASCII. 保留所有权利。</p>
        </div>
      </div>
    </footer>
  )
}
