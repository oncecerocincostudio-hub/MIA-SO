import { TopBar } from '@/components/layout/TopBar'

const ALL_AGENTS = [
  {
    id: 'ceo', name: 'CEO Agent', level: 'Nivel 1 — Ejecutivo',
    desc: 'Estrategia, análisis de negocio y propuestas de acción. Conoce el contexto completo de las 6 empresas.',
    status: 'active', task: 'Daily briefing completado', progress: 100, color: '#7c6af5',
    subagents: [],
  },
  {
    id: 'cto', name: 'CTO Agent', level: 'Nivel 1 — Técnico',
    desc: 'Arquitectura, code review y coordinación de sub-agentes técnicos. Aprueba cada PR.',
    status: 'active', task: 'Revisando Sprint 1', progress: 72, color: '#3b82f6',
    subagents: ['UI/UX', 'Frontend', 'Backend', 'Cyber', 'Infra'],
  },
  {
    id: 'cmo', name: 'CMO Agent', level: 'Nivel 1 — Marketing',
    desc: 'Ventas, contenido, ads, CRM y e-commerce DUUAL. Motor de generación de ingresos.',
    status: 'active', task: 'Optimizing ad spend', progress: 84, color: '#a855f7',
    subagents: [],
  },
  {
    id: 'cfo', name: 'CFO Agent', level: 'Nivel 1 — Finanzas',
    desc: 'Ingresos, gastos, portafolio Throu, métricas financieras y proyecciones.',
    status: 'active', task: 'Cash flow analysis', progress: 67, color: '#22c55e',
    subagents: [],
  },
  {
    id: 'coo', name: 'COO Agent', level: 'Nivel 1 — Operaciones',
    desc: 'Ejecución, tareas, proyectos y cronogramas. Convierte objetivos en tareas concretas.',
    status: 'soon', task: 'Disponible en Sprint 3', progress: 0, color: '#06b6d4',
    subagents: [],
  },
  {
    id: 'artist', name: 'Artista Agent', level: 'Nivel 1 — Arte',
    desc: 'Producción artística 2105 Studio, galería digital, colección 5x5 y eventos Club 5D.',
    status: 'phase2', task: 'Disponible en Fase 2', progress: 0, color: '#f59e0b',
    subagents: [],
  },
]

const STATUS_BADGE = {
  active: { label: '● Activo', bg: 'bg-green/10 border-green/30 text-green' },
  soon: { label: 'Próximo', bg: 'bg-blue/10 border-blue/30 text-blue' },
  phase2: { label: 'Fase 2', bg: 'bg-surface-3 border-border text-muted' },
}

export default function AgentsPage() {
  return (
    <>
      <TopBar currentView="agents" pageTitle="AI Agents" />
      <main className="flex-1 overflow-y-auto p-6 animate-slide-in">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-text">AI Agents</h1>
          <p className="text-sm text-muted mt-1">Centro de control de todos los agentes del sistema</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {ALL_AGENTS.map((agent) => {
            const badge = STATUS_BADGE[agent.status as keyof typeof STATUS_BADGE]
            const isActive = agent.status === 'active'
            return (
              <div
                key={agent.id}
                className={`bg-surface-2 rounded-xl p-5 border transition-all ${
                  isActive ? 'border-border-2 hover:border-opacity-80' : 'border-border opacity-60'
                }`}
                style={isActive ? { borderColor: agent.color + '40' } : {}}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="text-[11px] text-faint font-medium uppercase tracking-wider mb-1">{agent.level}</div>
                    <div className="text-lg font-semibold text-text">{agent.name}</div>
                  </div>
                  <span className={`px-2.5 py-1 rounded-lg border text-[11px] font-medium ${badge.bg}`}>
                    {badge.label}
                  </span>
                </div>

                <p className="text-[12px] text-muted leading-relaxed mb-4">{agent.desc}</p>

                {isActive && agent.progress > 0 && (
                  <div className="mb-4">
                    <div className="flex justify-between text-[11px] mb-1.5">
                      <span className="text-faint font-mono">{agent.task}</span>
                      <span className="text-muted font-mono">{agent.progress}%</span>
                    </div>
                    <div className="h-1 bg-surface-3 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{ width: `${agent.progress}%`, backgroundColor: agent.color }}
                      />
                    </div>
                  </div>
                )}

                {agent.subagents.length > 0 && (
                  <div className="border-t border-border pt-3">
                    <div className="text-[10px] text-faint uppercase tracking-wider mb-2">Sub-agentes</div>
                    <div className="flex gap-2 flex-wrap">
                      {agent.subagents.map((sub) => (
                        <span
                          key={sub}
                          className="px-2.5 py-1 rounded-lg bg-surface-3 border text-[11px] font-medium text-muted"
                          style={{ borderColor: agent.color + '40', color: agent.color }}
                        >
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {isActive && (
                  <button
                    className="mt-3 w-full py-2 rounded-lg border text-[12px] font-medium transition-all hover:opacity-90"
                    style={{ borderColor: agent.color + '40', color: agent.color, background: agent.color + '10' }}
                  >
                    Chatear con {agent.name}
                  </button>
                )}
              </div>
            )
          })}
        </div>
      </main>
    </>
  )
}
