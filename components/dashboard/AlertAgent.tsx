import { AlertCircle, AlertTriangle, Info } from 'lucide-react'

interface Alert {
  id: string
  type: 'critical' | 'warning' | 'info'
  title: string
  description: string
  time: string
}

interface Agent {
  id: string
  name: string
  status: 'active' | 'idle' | 'offline'
  task: string
  progress: number
  color: string
}

export function AlertCard({ alert }: { alert: Alert }) {
  const config = {
    critical: {
      icon: AlertCircle,
      border: 'border-red/30',
      bg: 'bg-red-dim',
      iconColor: 'text-red',
    },
    warning: {
      icon: AlertTriangle,
      border: 'border-amber/30',
      bg: 'bg-amber-dim',
      iconColor: 'text-amber',
    },
    info: {
      icon: Info,
      border: 'border-blue/30',
      bg: 'bg-blue-dim',
      iconColor: 'text-blue',
    },
  }[alert.type]

  const Icon = config.icon

  return (
    <div className={`${config.bg} ${config.border} border rounded-xl p-4 flex gap-3`}>
      <Icon size={16} className={`${config.iconColor} flex-shrink-0 mt-0.5`} />
      <div className="flex-1 min-w-0">
        <div className="text-sm font-medium text-text">{alert.title}</div>
        <div className="text-[12px] text-muted mt-0.5 leading-relaxed">{alert.description}</div>
        <div className="text-[11px] text-faint mt-1.5">{alert.time}</div>
      </div>
    </div>
  )
}

export function AgentCard({ agent }: { agent: Agent }) {
  return (
    <div className="bg-surface-2 border border-border rounded-xl p-4 hover:border-border-2 transition-all">
      <div className="flex items-start gap-3">
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: agent.color + '20', border: `1px solid ${agent.color}40` }}
        >
          <span className="text-sm font-bold" style={{ color: agent.color }}>
            {agent.name.charAt(0)}
          </span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-text">{agent.name}</span>
            {agent.status === 'active' && (
              <span className="w-1.5 h-1.5 rounded-full bg-green pulse-dot" />
            )}
          </div>
          <div className="text-[12px] text-muted mt-0.5">
            {agent.status === 'active' ? agent.task : 'Idle'}
          </div>
          {agent.status === 'active' && agent.progress > 0 && (
            <div className="mt-2.5 flex items-center gap-2">
              <div className="flex-1 h-1 bg-surface-3 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all"
                  style={{ width: `${agent.progress}%`, backgroundColor: agent.color }}
                />
              </div>
              <span className="text-[11px] text-muted font-mono">{agent.progress}%</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
