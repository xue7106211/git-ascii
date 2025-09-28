'use client'

import { Header } from './header'
import { Footer } from './footer'
import { cn } from '@/lib/utils'
import { BaseComponentProps } from '@/types'

interface MainLayoutProps extends BaseComponentProps {
  className?: string
  mainClassName?: string
}

export function MainLayout({ children, className, mainClassName }: MainLayoutProps) {
  return (
    <div className={cn('min-h-screen flex flex-col bg-slate-950 text-slate-100', className)}>
      <Header />

      <main className={cn('flex-1 container mx-auto px-4 py-10', mainClassName)}>{children}</main>

      <Footer />
    </div>
  )
}
