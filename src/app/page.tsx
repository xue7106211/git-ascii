'use client'

import { MainLayout } from '@/components/layout/main-layout'
import { Button } from '@/components/ui/button'

export default function HomePage() {
  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <section className="text-center py-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
            欢迎使用 <span className="text-blue-600">Git ASCII</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-slide-up">
            一个现代化的 Git 可视化工具，通过精美的 ASCII 艺术让您的代码历史变得生动有趣。
            探索提交历史从未如此简单和美观。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Button size="lg" className="text-lg px-8">
              开始使用
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              查看演示
            </Button>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            主要功能
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">可视化历史</h3>
              <p className="text-gray-600">
                通过直观的图形化界面查看 Git 提交历史，让复杂的版本控制变得简单易懂。
              </p>
            </div>

            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">高性能</h3>
              <p className="text-gray-600">
                优化的渲染引擎确保即使是大项目也能流畅运行，提供最佳的用户体验。
              </p>
            </div>

            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">易于使用</h3>
              <p className="text-gray-600">
                简洁直观的界面设计，让新手也能快速上手，无需复杂的学习过程。
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-16 bg-gray-50 rounded-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            准备开始了吗？
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            立即体验 Git ASCII，让您的代码历史变得生动有趣。
          </p>
          <Button size="lg" className="text-lg px-8">
            立即开始
          </Button>
        </section>
      </div>
    </MainLayout>
  )
}
