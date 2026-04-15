import { LucideProps } from "lucide-react"

export type IconType = React.ComponentType<LucideProps>

export interface KPI {
  title: string
  value: string | number
  change?: number
  icon: IconType
}
