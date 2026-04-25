import { TopBar } from '@/components/layout/TopBar'
import { KPICard, AlertCard, Card, CardHeader } from '@/components/dashboard/UI'
import { AreaChartCard, BarChartCard } from '@/components/dashboard/Charts'
import { FINANCE_KPIS, CASHFLOW_6M, EXPENSES, TRANSACTIONS } from '@/lib/data'

export default function FinancePage() {
  return (
    <>
      <TopBar title="Finance & Accounting" />
      <main className="flex-1 overflow-y-auto p-6 animate-slide-in">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-text">Finance & Accounting</h1>
          <p className="text-sm text-muted mt-1">Salud financiera y monitoreo de flujo de caja</p>
        </div>

        <div className="grid grid-cols-4 gap-4 mb-6">
          {FINANCE_KPIS.map(k => <KPICard key={k.label} {...k} />)}
        </div>

        <div className="mb-6">
          <AlertCard type="critical" title="Cash Flow Alert"
            desc="Projected cash deficit in 14 days. $28K in outstanding invoices need collection."
            time="Just now" />
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <AreaChartCard data={CASHFLOW_6M} dataKey="value" xKey="month" color="#22c55e" title="Cash Flow (6 Months)" />
          <BarChartCard  data={EXPENSES}   dataKey="value" xKey="category" color="#ef4444" title="Expense Breakdown" />
        </div>

        <Card>
          <CardHeader title="Transacciones Recientes" />
          <div className="flex flex-col divide-y divide-border">
            {TRANSACTIONS.map(t => (
              <div key={t.id} className="flex items-center justify-between py-3">
                <div>
                  <div className="text-sm text-text">{t.desc}</div>
                  <div className="text-xs text-muted mt-0.5">{t.date}</div>
                </div>
                <span className={`text-sm font-semibold font-mono ${t.type === 'income' ? 'text-green' : 'text-red'}`}>
                  {t.amount}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </main>
    </>
  )
}
