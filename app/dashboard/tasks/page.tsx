import { TopBar } from '@/components/layout/TopBar'
import { StatusPill, Card, CardHeader } from '@/components/dashboard/UI'
import { TASKS } from '@/lib/data'

const PRIORITY_COLOR: Record<string,string> = {
  critical:'text-red', high:'text-amber', medium:'text-blue', low:'text-muted'
}
const PRIORITY_DOT: Record<string,string> = {
  critical:'bg-red', high:'bg-amber', medium:'bg-blue', low:'bg-faint'
}

const TODO    = TASKS.filter(t => t.status === 'todo')
const INPROG  = TASKS.filter(t => t.status === 'in-progress')
const DONE    = TASKS.filter(t => t.status === 'done')

function TaskCard({ t }: { t: typeof TASKS[0] }) {
  return (
    <div className="bg-surface-3 border border-border rounded-xl p-3.5 flex items-start gap-3">
      <span className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${PRIORITY_DOT[t.priority]}`} />
      <div className="flex-1 min-w-0">
        <div className="text-sm text-text font-medium leading-snug">{t.title}</div>
        <div className="flex items-center gap-2 mt-1.5 flex-wrap">
          <span className="text-xs text-faint">{t.company}</span>
          <span className="text-faint">·</span>
          <span className={`text-xs font-medium ${PRIORITY_COLOR[t.priority]}`}>{t.priority}</span>
          <span className="text-faint">·</span>
          <span className="text-xs text-muted">{t.agent} Agent</span>
          <span className="text-faint">·</span>
          <span className="text-xs text-muted">{t.due}</span>
        </div>
      </div>
    </div>
  )
}

export default function TasksPage() {
  return (
    <>
      <TopBar title="Tasks & Projects" />
      <main className="flex-1 overflow-y-auto p-6 animate-slide-in">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-semibold text-text">Tasks & Projects</h1>
            <p className="text-sm text-muted mt-1">Tablero Kanban — gestión operativa de tareas</p>
          </div>
          <button className="px-4 py-2 rounded-xl bg-accent text-white text-sm font-medium hover:bg-accent-2 transition-all">
            + Nueva tarea
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {/* TODO */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-muted" />
              <span className="text-sm font-medium text-text">To Do</span>
              <span className="ml-auto text-xs text-muted font-mono">{TODO.length}</span>
            </div>
            <div className="flex flex-col gap-2">
              {TODO.map(t => <TaskCard key={t.id} t={t} />)}
            </div>
          </div>

          {/* IN PROGRESS */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-blue" />
              <span className="text-sm font-medium text-text">In Progress</span>
              <span className="ml-auto text-xs text-muted font-mono">{INPROG.length}</span>
            </div>
            <div className="flex flex-col gap-2">
              {INPROG.map(t => <TaskCard key={t.id} t={t} />)}
            </div>
          </div>

          {/* DONE */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-green" />
              <span className="text-sm font-medium text-text">Done</span>
              <span className="ml-auto text-xs text-muted font-mono">{DONE.length}</span>
            </div>
            <div className="flex flex-col gap-2">
              {DONE.map(t => <TaskCard key={t.id} t={t} />)}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
