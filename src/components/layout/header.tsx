'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'

interface HeaderProps {
  className?: string
}

export function Header({ className }: HeaderProps) {
  return (
    <header className={cn('border-b border-slate-800 bg-slate-950/95 backdrop-blur supports-[backdrop-filter]:bg-slate-950/80', className)}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-semibold text-slate-100 hover:text-indigo-300 transition-colors"
          >
            ASCII Motion Studio
          </Link>

          <nav className="hidden md:flex items-center space-x-6 text-sm text-slate-300">
            <Link href="/" className="hover:text-indigo-300 transition-colors">
              工作台
            </Link>
            <a
              href="https://ascii-motion.app/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-indigo-300 transition-colors"
            >
              原站体验
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-indigo-300 transition-colors"
            >
              GitHub
            </a>
          </nav>

          <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700/60 text-slate-200 hover:bg-slate-900">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
