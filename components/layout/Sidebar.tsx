'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard, Bot, Target, DollarSign, Building2,
  TrendingUp, Users, Megaphone, Palette, FlaskConical,
  Lightbulb, Settings,
} from 'lucide-react'
import { NAV_SECTIONS } from '@/lib/data'

const ICON_MAP = {
  LayoutDashboard, Bot, Target, DollarSign, Building2,
  TrendingUp, Users, Megaphone, Palette, FlaskConical,
  Lightbulb, Settings,
} as const

type IconName = keyof typeof ICON_MAP

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-[240px] flex-shrink-0 flex flex-col h-screen bg-surface border-r border-border overflow-y-auto">
      <div className="px-5 py-5 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-sm">M</span>
          </div>
          <div>
            <div className="font-semibold text-text text-sm leading-tight">Company OS</div>
            <div className="text-[11px] text-muted leading-tight">AI Operating System</div>
          </div>
        </div>
      </div>

      <nav className="flex-1 py-3">
        {NAV_SECTIONS.map((section) => (
          <div key={section.title} className="mb-4">
            <div className="px-5 py-1 text-[10px] font-medium text-faint tracking-widest uppercase">
              {section.title}
            </div>
            {section.items.map((item) => {
              const Icon = ICON_MAP[item.icon as IconName]
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 mx-2 px-3 py-2 rounded-lg text-sm transition-all duration-150 group relative ${
                    isActive
                      ? 'bg-surface-3 text-text font-medium'
                      : 'text-muted hover:bg-surface-2 hover:text-text'
                  }`}
                >
                  {Icon && <Icon size={15} className={isActive ? 'text-accent' : 'text-faint group-hover:text-muted'} />}
                  <span className="flex-1">{item.label}</span>
                  {item.badge !== undefined && (
                    <span className="w-5 h-5 rounded-full bg-blue text-white text-[10px] font-semibold flex items-center justify-center">
                      {item.badge}
                    </span>
                  )}
                  {item.dot && (
                    <span
                      className={`w-2 h-2 rounded-full pulse-dot ${
                        item.dot === 'green' ? 'bg-green' :
                        item.dot === 'red' ? 'bg-red' : 'bg-amber'
                      }`}
                    />
                  )}
                </Link>
              )
            })}
          </div>
        ))}
      </nav>

      <div className="border-t border-border p-4">
        <Link
          href="/dashboard/settings"
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-muted hover:bg-surface-2 hover:text-text transition-all"
        >
          <Settings size={15} />
          <span>Settings</span>
        </Link>
      </div>
    </aside>
  )
}
