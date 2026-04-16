import {
  DollarSign, TrendingUp, TrendingDown, Users, Target,
  Clock, CheckCircle, AlertCircle, ShoppingCart,
} from 'lucide-react'

const ICON_MAP: Record<string, React.ElementType<any>> = {
  DollarSign, TrendingUp, TrendingDown, Users, Target,
  Clock, CheckCircle, AlertCircle, ShoppingCart,
}

interface KPICardProps {
  label: string
  value: string
  change?: string
  changeType?: 'positive' | 'negative' | 'neutral'
  icon: string
}

export function KPICard({ label, value, change, changeType = 'neutral', icon }: KPICardProps) {
  const Icon = ICON_MAP[icon]

  return (
    <div className="bg-surface-2 border border-border rounded-xl p-5 flex flex-col gap-3 hover:border-border-2 transition-all">
      <div className="flex items-center justify-between">
        <span className="text-sm text-muted">{label}</span>
        {Icon && (
          <div className="w-8 h-8 rounded-lg bg-surface-3 border border-border flex items-center justify-center">
            <Icon size={15} className="text-muted" />
          </div>
        )}
      </div>
      <div className="text-2xl font-semibold text-text tracking-tight">{value}</div>
      {change && (
        <div className={`text-[12px] font-medium ${
          changeType === 'positive' ? 'text-green' :
          changeType === 'negative' ? 'text-red' : 'text-muted'
        }`}>
          {changeType === 'positive' && '+'}
          {change}
        </div>
      )}
    </div>
  )
}
