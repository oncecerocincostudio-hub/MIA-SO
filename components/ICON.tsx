import {
  DollarSign,
  TrendingUp,
  TrendingDown,
  Users,
  Target,
  Clock,
  CheckCircle,
  AlertCircle,
  ShoppingCart,
  LucideProps,
} from "lucide-react"

const ICON_MAP: Record<string, React.ComponentType<LucideProps>> = {
  DollarSign,
  TrendingUp,
  TrendingDown,
  Users,
  Target,
  Clock,
  CheckCircle,
  AlertCircle,
  ShoppingCart,
}

export function Icon({
  name,
  ...props
}: { name: keyof typeof ICON_MAP } & LucideProps) {
  const Component = ICON_MAP[name]

  if (!Component) return null

  return <Component {...props} />
}
