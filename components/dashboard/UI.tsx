'use client'
import {
  LayoutDashboard, Bot, Target, DollarSign, Building2, TrendingUp, TrendingDown,
  Users, Megaphone, Palette, FlaskConical, Lightbulb, Zap, CheckSquare,
  UserCheck, Clock, CheckCircle, AlertCircle, ShoppingCart, Settings,
  AlertTriangle, Info, TrendingDown as TD,
} from 'lucide-react'

export const ICONS: Record<string, React.ElementType> = {
  LayoutDashboard, Bot, Target, DollarSign, Building2, TrendingUp, TrendingDown,
  Users, Megaphone, Palette, FlaskConical, Lightbulb, Zap, CheckSquare,
  UserCheck, Clock, CheckCircle, AlertCircle, ShoppingCart, Settings,
  AlertTriangle, Info, TD,
}

// KPI Card
interface KPIProps {
  label: string; value: string; change?: string; up?: boolean; icon: string
}
export function KPICard({ label, value, change, up, icon }: KPIProps) {
  const Icon = ICONS[icon]
  return (
    <div className="bg-surface-2 border border-border rounded-xl p-5 flex flex-col gap-3 hover:border-border-2 transition-all">
      <div className="flex items-center justify-between">
        <span className="text-sm text-muted">{label}</span>
        {Icon && <div className="w-8 h-8 rounded-lg bg-surface-3 border border-border flex items-center justify-center"><Icon size={15} className="text-muted" /></div>}
      </div>
      <div className="text-2xl font-semibold text-text tracking-tight">{value}</div>
      {change && <div className={`text-xs font-medium ${up ? 'text-green' : change.startsWith('+-') ? 'text-muted' : 'text-red'}`}>{change}</div>}
    </div>
  )
}

// Section header
export function PageHeader({ title, sub }: { title: string; sub: string }) {
  return (
    <div className="mb-6">
      <h1 className="text-2xl font-semibold text-text">{title}</h1>
      <p className="text-sm text-muted mt-1">{sub}</p>
    </div>
  )
}

// Card wrapper
export function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`bg-surface-2 border border-border rounded-xl p-5 ${className}`}>{children}</div>
}

// Card header row
export function CardHeader({ title, action }: { title: string; action?: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between mb-4">
      <span className="text-sm font-medium text-text">{title}</span>
      {action}
    </div>
  )
}

// Status pill
const STATUS_STYLES: Record<string, string> = {
  'on-track':   'bg-blue/10 text-blue border-blue/20',
  'at-risk':    'bg-amber/10 text-amber border-amber/20',
  'off-track':  'bg-red/10 text-red border-red/20',
  'completed':  'bg-green/10 text-green border-green/20',
  'todo':       'bg-surface-3 text-muted border-border',
  'in-progress':'bg-blue/10 text-blue border-blue/20',
  'done':       'bg-green/10 text-green border-green/20',
  'active':     'bg-green/10 text-green border-green/20',
  'soon':       'bg-blue/10 text-blue border-blue/20',
  'phase2':     'bg-surface-3 text-muted border-border',
  'Lead':       'bg-surface-3 text-muted border-border',
  'Meeting':    'bg-blue/10 text-blue border-blue/20',
  'Proposal':   'bg-amber/10 text-amber border-amber/20',
  'Negotiation':'bg-purple/10 text-purple border-purple/20',
  'Closed Won': 'bg-green/10 text-green border-green/20',
}
const STATUS_LABELS: Record<string, string> = {
  'on-track':'On Track','at-risk':'At Risk','off-track':'Off Track','completed':'Done',
  'todo':'To Do','in-progress':'In Progress','done':'Done',
  'active':'● Active','soon':'Coming Soon','phase2':'Phase 2',
}
export function StatusPill({ status }: { status: string }) {
  return (
    <span className={`px-2.5 py-1 rounded-lg border text-[11px] font-medium ${STATUS_STYLES[status] ?? 'bg-surface-3 text-muted border-border'}`}>
      {STATUS_LABELS[status] ?? status}
    </span>
  )
}

// Progress bar
export function ProgressBar({ value, color = '#3b82f6' }: { value: number; color?: string }) {
  return (
    <div className="h-1.5 bg-surface-3 rounded-full overflow-hidden">
      <div className="h-full rounded-full transition-all duration-700" style={{ width: `${value}%`, backgroundColor: color }} />
    </div>
  )
}

// Alert card
export function AlertCard({ type, title, desc, time }: { type: 'critical'|'warning'|'info'; title: string; desc: string; time: string }) {
  const cfg = {
    critical: { Icon: AlertCircle, border: 'border-red/30',  bg: 'bg-red-dim',  color: 'text-red'  },
    warning:  { Icon: AlertTriangle,border: 'border-amber/30',bg: 'bg-amber-dim',color: 'text-amber'},
    info:     { Icon: Info,         border: 'border-blue/30', bg: 'bg-blue-dim', color: 'text-blue' },
  }[type]
  return (
    <div className={`${cfg.bg} ${cfg.border} border rounded-xl p-4 flex gap-3`}>
      <cfg.Icon size={16} className={`${cfg.color} flex-shrink-0 mt-0.5`} />
      <div>
        <div className="text-sm font-medium text-text">{title}</div>
        <div className="text-xs text-muted mt-0.5 leading-relaxed">{desc}</div>
        <div className="text-[11px] text-faint mt-1.5">{time}</div>
      </div>
    </div>
  )
}

// Agent card
export function AgentCard({ name, status, task, progress, color }: {
  name: string; status: 'active'|'soon'|'phase2'; task: string; progress: number; color: string
}) {
  return (
    <div className="bg-surface-2 border border-border rounded-xl p-4 hover:border-border-2 transition-all">
      <div className="flex items-start gap-3">
        <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: color+'20', border:`1px solid ${color}40` }}>
          <span className="text-sm font-bold" style={{ color }}>{name[0]}</span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-text">{name}</span>
            {status === 'active' && <span className="w-1.5 h-1.5 rounded-full bg-green pulse-dot" />}
          </div>
          <div className="text-xs text-muted mt-0.5">{task}</div>
          {status === 'active' && progress > 0 && (
            <div className="mt-2 flex items-center gap-2">
              <div className="flex-1 h-1 bg-surface-3 rounded-full overflow-hidden">
                <div className="h-full rounded-full" style={{ width:`${progress}%`, backgroundColor:color }} />
              </div>
              <span className="text-[11px] text-muted font-mono">{progress}%</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// Empty state
export function EmptyState({ icon, title, sub }: { icon: string; title: string; sub: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="text-5xl mb-4">{icon}</div>
      <div className="text-text font-medium mb-1">{title}</div>
      <div className="text-muted text-sm">{sub}</div>
    </div>
  )
}
