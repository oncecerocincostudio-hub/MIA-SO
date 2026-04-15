import KPICard from "./KPICard"
import { KPI } from "./types"

export default function DashboardGrid({ data }: { data: KPI[] }) {
  return (
    <div style={grid}>
      {data.map((item, i) => (
        <KPICard key={i} {...item} />
      ))}
    </div>
  )
}

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: 16,
}
