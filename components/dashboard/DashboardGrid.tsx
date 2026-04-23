import { KPICard } from './KPICard'

interface KPI {
  label: string
  value: string
  change?: string
  changeType?: 'positive' | 'negative' | 'neutral'
  icon: string
}

export default function DashboardGrid({ data }: { data: KPI[] }) {
  return (
    <div className="grid grid-cols-4 gap-4">
      {data.map((kpi) => (
        <KPICard key={kpi.label} {...kpi} />
      ))}
    </div>
  )
}
