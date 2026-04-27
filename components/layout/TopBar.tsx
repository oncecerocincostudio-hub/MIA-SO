'use client'

import { Command, Bell, ChevronDown, Zap, User } from 'lucide-react'

interface TopBarProps {
  pageTitle?: string
  title?: string
}

export function TopBar({ pageTitle, title }: TopBarProps) {
  const label = pageTitle ?? title ?? ''
  return (
    <header className="h-14 flex-shrink-0 flex items-center justify-between px-6 bg-surface border-b border-border">
      <div>
        <div className="text-[11px] text-muted">Current View</div>
        <div className="text-sm font-semibold text-text leading-tight">{label}</div>
      </div>

      <button className="flex items-center gap-2.5 px-4 py-2 rounded-xl border border-border-2 bg-surface-2 hover:border-accent hover:bg-surface-3 transition-all text-sm text-text">
        <Command size={14} className="text-accent" />
        <span>AI Command Center</span>
        <span className="flex items-center gap-1 text-[11px] text-faint border border-border px-1.5 py-0.5 rounded">
          <span>⌘</span><span>K</span>
        </span>
      </button>

      <div className="flex items-center gap-2">
        <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-accent hover:bg-accent-2 text-white text-sm font-medium transition-all">
          <Zap size={14} />
          <span>Quick Action</span>
        </button>

        <button className="relative w-9 h-9 rounded-xl border border-border-2 bg-surface-2 flex items-center justify-center text-muted hover:text-text hover:border-border transition-all">
          <Bell size={15} />
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red text-white text-[9px] font-bold flex items-center justify-center">3</span>
        </button>

        <button className="flex items-center gap-2 px-3 py-2 rounded-xl border border-border-2 bg-surface-2 hover:bg-surface-3 transition-all">
          <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center">
            <User size={12} className="text-white" />
          </div>
          <span className="text-sm font-medium text-text">CEO</span>
          <ChevronDown size={13} className="text-muted" />
        </button>
      </div>
    </header>
  )
}
