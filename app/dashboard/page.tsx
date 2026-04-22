import { TopBar } from '@/components/layout/TopBar'
import { KPICard } from '@/components/dashboard/KPICard'
import { Chart } from '@/components/dashboard/Charts'
import { AlertCard, AgentCard } from '@/components/dashboard/AlertAgent'
import {
  CEO_KPIS, REVENUE_TREND, CASHFLOW_DATA,
  CRITICAL_ALERTS, ACTIVE_AGENTS
} from '@/lib/data'

export default function DashboardPage() {
  return (
    <>
      <TopBar pageTitle="CEO Dashboard" />
      <main className="flex-1 overflow-y-auto p-6 animate-slide-in">
        {/* Page header */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-text">CEO Control Tower</h1>
          <p className="text-sm text-muted mt-1">Complete overview of all business operations</p>
        </div>

        {/* KPI Row */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          {CEO_KPIS.map((kpi) => (
            <KPICard key={kpi.label} {...kpi} />
          ))}
        </div>

        {/* Charts row */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Chart
            data={REVENUE_TREND}
            dataKey="value"
            xKey="month"
            color="#3b82f6"
            title="Revenue Trend (6 Months)"
            type="area"
          />
          <Chart
            data={CASHFLOW_DATA}
            dataKey="value"
            xKey="week"
            color="#22c55e"
            title="Cashflow (Last 4 Weeks)"
            type="bar"
          />
        </div>

        {/* Alerts + Agents */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-medium text-text">Critical Alerts</h2>
              <button className="text-[12px] text-accent hover:text-accent-2 transition-colors">View all</button>
            </div>
            <div className="flex flex-col gap-3">
              {CRITICAL_ALERTS.map((alert) => (
                <AlertCard key={alert.id} alert={alert} />
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-medium text-text">Active AI Agents</h2>
              <button className="text-[12px] text-accent hover:text-accent-2 transition-colors">Manage</button>
            </div>
            <div className="flex flex-col gap-3">
              {ACTIVE_AGENTS.map((agent) => (
                <AgentCard key={agent.id} agent={agent} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
