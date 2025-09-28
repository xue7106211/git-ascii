'use client'

import { Header } from './header'
import { Footer } from './footer'
import { cn } from '@/lib/utils'
import { BaseComponentProps } from '@/types'

interface MainLayoutProps extends BaseComponentProps {
  className?: string
}

export function MainLayout({ children, className }: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className={cn('flex-1 container mx-auto px-4 py-8', className)}>
        {children}
      </main>
      
      <Footer />
    </div>
  )
}
