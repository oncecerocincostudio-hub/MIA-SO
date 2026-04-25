import { TopBar } from '@/components/layout/TopBar'
import { KPICard, AlertCard, AgentCard, CardHeader } from '@/components/dashboard/UI'
import { AreaChartCard, BarChartCard } from '@/components/dashboard/Charts'
import { CEO_KPIS, REVENUE_TREND, CASHFLOW_WEEKS, ALERTS, AGENTS } from '@/lib/data'

export default function DashboardPage() {
  return (
    <>
      <TopBar title="CEO Dashboard" />
      <main className="flex-1 overflow-y-auto p-6 animate-slide-in">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-text">CEO Control Tower</h1>
          <p className="text-sm text-muted mt-1">Complete overview of all business operations</p>
        </div>

        <div className="grid grid-cols-4 gap-4 mb-6">
          {CEO_KPIS.map(k => <KPICard key={k.label} {...k} />)}
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <AreaChartCard data={REVENUE_TREND} dataKey="value" xKey="month" color="#3b82f6" title="Revenue Trend (6 Months)" />
          <BarChartCard  data={CASHFLOW_WEEKS} dataKey="value" xKey="week" color="#22c55e" title="Cashflow (Last 4 Weeks)" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-text">Critical Alerts</span>
              <button className="text-xs text-accent hover:text-accent-2">View all</button>
            </div>
            <div className="flex flex-col gap-3">
              {ALERTS.map(a => <AlertCard key={a.id} {...a} />)}
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-text">Active AI Agents</span>
              <button className="text-xs text-accent hover:text-accent-2">Manage</button>
            </div>
            <div className="flex flex-col gap-3">
              {AGENTS.filter(a => a.status === 'active').map(a => <AgentCard key={a.id} {...a} />)}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
