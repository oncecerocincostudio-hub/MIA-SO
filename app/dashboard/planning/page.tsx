import { TopBar } from '@/components/layout/TopBar'
import { KPICard } from '@/components/dashboard/KPICard'
import { PLANNING_KPIS, OKRS } from '@/lib/data'

const STATUS_CONFIG = {
  'on-track': { label: 'On Track', bg: 'bg-blue', text: 'text-white' },
  'at-risk': { label: 'At Risk', bg: 'bg-amber', text: 'text-white' },
  'off-track': { label: 'Off Track', bg: 'bg-red/20', text: 'text-red' },
  'completed': { label: 'Completed', bg: 'bg-green/20', text: 'text-green' },
}

const PROGRESS_COLOR = {
  'on-track': '#3b82f6',
  'at-risk': '#f59e0b',
  'off-track': '#ef4444',
  'completed': '#22c55e',
}

export default function PlanningPage() {
  const quarters = ['Q1 2026', 'Q2 2026', 'Q3 2026', 'Q4 2026']

  return (
    <>
      <TopBar pageTitle="Strategy & Planning" />
      <main className="flex-1 overflow-y-auto p-6 animate-slide-in">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-text">Strategy & Planning</h1>
          <p className="text-sm text-muted mt-1">OKRs, roadmaps, and strategic execution</p>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          {PLANNING_KPIS.map((kpi) => (
            <KPICard key={kpi.label} {...kpi} />
          ))}
        </div>

        {/* Quarter tabs + OKRs */}
        <div className="bg-surface-2 border border-border rounded-xl p-5">
          {/* Tabs */}
          <div className="flex gap-2 mb-5">
            {quarters.map((q, i) => (
              <button
                key={q}
                className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  i === 0
                    ? 'bg-surface-3 text-text border border-border-2'
                    : 'text-muted hover:text-text hover:bg-surface-3'
                }`}
              >
                {q}
              </button>
            ))}
          </div>

          <h2 className="text-base font-medium text-text mb-4">Q1 2026 Objectives</h2>

          <div className="flex flex-col gap-3">
            {OKRS.map((okr) => {
              const config = STATUS_CONFIG[okr.status]
              const color = PROGRESS_COLOR[okr.status]
              return (
                <div key={okr.id} className="bg-surface-3 border border-border rounded-xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-text">{okr.title}</span>
                    <span className={`px-3 py-1 rounded-lg text-xs font-semibold ${config.bg} ${config.text}`}>
                      {config.label}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-2 bg-surface-2 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-700"
                        style={{ width: `${okr.progress}%`, backgroundColor: color }}
                      />
                    </div>
                    <span className="text-sm font-medium text-muted w-10 text-right font-mono">
                      {okr.progress}%
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </main>
    </>
  )
}
