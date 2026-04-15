import { TopBar } from '@/components/layout/TopBar'
import { KPICard } from '@/components/dashboard/KPICard'
import { Chart, BarChartSimple } from '@/components/dashboard/Charts'
import { FINANCE_KPIS, CASHFLOW_6M, EXPENSE_BREAKDOWN } from '@/lib/data'
import { AlertCircle } from 'lucide-react'

export default function FinancePage() {
  return (
    <>
      <TopBar currentView="finance" pageTitle="Finance & Accounting" />
      <main className="flex-1 overflow-y-auto p-6 animate-slide-in">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-text">Finance & Accounting</h1>
          <p className="text-sm text-muted mt-1">Financial health and cash flow monitoring</p>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          {FINANCE_KPIS.map((kpi) => (
            <KPICard key={kpi.label} {...kpi} />
          ))}
        </div>

        {/* Cash Flow Alert */}
        <div className="bg-red-dim border border-red/30 rounded-xl p-4 mb-6 flex items-start gap-3">
          <AlertCircle size={16} className="text-red flex-shrink-0 mt-0.5" />
          <div>
            <div className="text-sm font-semibold text-text">Cash Flow Alert</div>
            <div className="text-[12px] text-muted mt-0.5">
              Projected cash deficit in 14 days. $28K in outstanding invoices need collection.
            </div>
            <div className="text-[11px] text-faint mt-1">Just now</div>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-2 gap-4">
          <Chart
            data={CASHFLOW_6M}
            dataKey="value"
            xKey="month"
            color="#22c55e"
            title="Cash Flow (6 Months)"
            type="area"
          />
          <BarChartSimple
            data={EXPENSE_BREAKDOWN}
            title="Expense Breakdown"
            color="#ef4444"
          />
        </div>
      </main>
    </>
  )
}
