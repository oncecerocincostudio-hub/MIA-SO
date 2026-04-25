'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Settings } from 'lucide-react'
import { ICONS } from '@/components/dashboard/UI'
import { NAV } from '@/lib/data'

export function Sidebar() {
  const pathname = usePathname()
  return (
    <aside className="w-[240px] flex-shrink-0 flex flex-col h-screen bg-surface border-r border-border overflow-y-auto">
      {/* Logo */}
      <div className="px-5 py-5 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
            <span className="text-white font-bold text-sm">M</span>
          </div>
          <div>
            <div className="font-semibold text-text text-sm leading-tight">MIA OS</div>
            <div className="text-[11px] text-muted">AI Operating System</div>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 py-3 overflow-y-auto">
        {NAV.map(({ section, items }) => (
          <div key={section} className="mb-4">
            <div className="px-5 py-1 text-[10px] font-medium text-faint tracking-widest uppercase">{section}</div>
            {items.map((item) => {
              const Icon = ICONS[item.icon]
              const active = pathname === item.href
              return (
                <Link key={item.href} href={item.href}
                  className={`flex items-center gap-3 mx-2 px-3 py-2 rounded-lg text-sm transition-all group ${
                    active ? 'bg-surface-3 text-text font-medium' : 'text-muted hover:bg-surface-2 hover:text-text'
                  }`}>
                  {Icon && <Icon size={15} className={active ? 'text-accent' : 'text-faint group-hover:text-muted'} />}
                  <span className="flex-1">{item.label}</span>
                  {'badge' in item && item.badge && (
                    <span className="w-5 h-5 rounded-full bg-blue text-white text-[10px] font-semibold flex items-center justify-center">{item.badge}</span>
                  )}
                  {'dot' in item && item.dot && (
                    <span className={`w-2 h-2 rounded-full pulse-dot ${item.dot === 'green' ? 'bg-green' : 'bg-red'}`} />
                  )}
                </Link>
              )
            })}
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="border-t border-border p-4">
        <Link href="/dashboard/settings" className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-muted hover:bg-surface-2 hover:text-text transition-all">
          <Settings size={15} /><span>Settings</span>
        </Link>
      </div>
    </aside>
  )
}
