import { TopBar } from '@/components/layout/TopBar'
import { StatusPill, ProgressBar } from '@/components/dashboard/UI'
import { AGENTS } from '@/lib/data'

const ALL_AGENTS = [
  ...AGENTS,
]

const SUBAGENTS: Record<string, string[]> = {
  cto: ['UI/UX','Frontend','Backend','Ciberseguridad','Infraestructura'],
}

export default function AgentsPage() {
  return (
    <>
      <TopBar title="AI Agents" />
      <main className="flex-1 overflow-y-auto p-6 animate-slide-in">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-text">AI Agents</h1>
          <p className="text-sm text-muted mt-1">Centro de control de todos los agentes del sistema</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {ALL_AGENTS.map(agent => (
            <div key={agent.id}
              className={`bg-surface-2 rounded-xl p-5 border transition-all ${
                agent.status === 'active' ? 'border-border-2 hover:opacity-90' : 'border-border opacity-60'
              }`}
              style={agent.status === 'active' ? {borderColor: agent.color+'40'} : {}}>
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg font-bold"
                    style={{backgroundColor: agent.color+'20', color: agent.color, border:`1px solid ${agent.color}40`}}>
                    {agent.name[0]}
                  </div>
                  <div>
                    <div className="text-base font-semibold text-text">{agent.name}</div>
                    <div className="text-xs text-muted">{agent.task}</div>
                  </div>
                </div>
                <StatusPill status={agent.status} />
              </div>

              {agent.status === 'active' && agent.progress > 0 && (
                <div className="mb-4">
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-faint">Progress</span>
                    <span className="text-muted font-mono">{agent.progress}%</span>
                  </div>
                  <ProgressBar value={agent.progress} color={agent.color} />
                </div>
              )}

              {SUBAGENTS[agent.id] && (
                <div className="border-t border-border pt-3 mt-3">
                  <div className="text-[10px] text-faint uppercase tracking-wider mb-2">Sub-agentes técnicos</div>
                  <div className="flex gap-2 flex-wrap">
                    {SUBAGENTS[agent.id].map(sub => (
                      <span key={sub} className="px-2.5 py-1 rounded-lg text-[11px] font-medium"
                        style={{backgroundColor:agent.color+'15', color:agent.color, border:`1px solid ${agent.color}30`}}>
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {agent.status === 'active' && (
                <button className="mt-4 w-full py-2 rounded-lg border text-xs font-medium transition-all hover:opacity-80"
                  style={{borderColor:agent.color+'40', color:agent.color, background:agent.color+'10'}}>
                  Chatear con {agent.name}
                </button>
              )}
            </div>
          ))}
        </div>
      </main>
    </>
  )
}
