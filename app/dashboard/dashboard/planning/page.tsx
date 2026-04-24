import { TopBar } from '@/components/layout/TopBar'
import { KPICard, StatusPill, ProgressBar, Card } from '@/components/dashboard/UI'
import { PLANNING_KPIS, OKRS } from '@/lib/data'

const PROGRESS_COLOR: Record<string, string> = {
  'on-track':'#3b82f6','at-risk':'#f59e0b','off-track':'#ef4444','completed':'#22c55e'
}

export default function PlanningPage() {
  const quarters = ['Q1','Q2','Q3','Q4']
  return (
    <>
      <TopBar title="Strategy & Planning" />
      <main className="flex-1 overflow-y-auto p-6 animate-slide-in">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-text">Strategy & Planning</h1>
          <p className="text-sm text-muted mt-1">OKRs, roadmaps y ejecución estratégica</p>
        </div>

        <div className="grid grid-cols-4 gap-4 mb-6">
          {PLANNING_KPIS.map(k => <KPICard key={k.label} {...k} />)}
        </div>

        <Card>
          {/* Quarter tabs */}
          <div className="flex gap-2 mb-6">
            {quarters.map((q, i) => (
              <button key={q} className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${
                i === 0 ? 'bg-surface-3 text-text border border-border-2' : 'text-muted hover:text-text hover:bg-surface-3'
              }`}>{q} 2026</button>
            ))}
          </div>

          <h2 className="text-base font-medium text-text mb-4">Objetivos Q1 2026</h2>
          <div className="flex flex-col gap-3">
            {OKRS.filter(o => o.quarter === 'Q1').map(okr => (
              <div key={okr.id} className="bg-surface-3 border border-border rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-text">{okr.title}</span>
                  <StatusPill status={okr.status} />
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-1">
                    <ProgressBar value={okr.progress} color={PROGRESS_COLOR[okr.status]} />
                  </div>
                  <span className="text-sm font-mono text-muted w-10 text-right">{okr.progress}%</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </main>
    </>
  )
}
