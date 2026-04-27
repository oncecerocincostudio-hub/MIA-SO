'use client'

import {
  AreaChart, Area, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts'

const Tip = ({ active, payload, label }: { active?: boolean; payload?: { value: number }[]; label?: string }) => {
  if (!active || !payload?.length) return null
  return (
    <div className="bg-surface-3 border border-border rounded-lg px-3 py-2 text-xs">
      <div className="text-muted mb-1">{label}</div>
      <div className="font-semibold text-text">
        {payload[0].value >= 1000 ? `$${(payload[0].value / 1000).toFixed(0)}K` : payload[0].value}
      </div>
    </div>
  )
}

interface ChartProps {
  data: Record<string, string | number>[]
  dataKey: string
  xKey: string
  color?: string
  title: string
  height?: number
  type?: 'area' | 'bar'
}

function AreaChartInner({ data, dataKey, xKey, color = '#7c6af5', title, height = 220 }: ChartProps) {
  return (
    <div className="bg-surface-2 border border-border rounded-xl p-5">
      <div className="flex justify-between items-center mb-5">
        <span className="text-sm font-medium text-text">{title}</span>
        <span className="text-green text-xs">↗</span>
      </div>
      <ResponsiveContainer width="100%" height={height}>
        <AreaChart data={data} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id={`g${dataKey}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity={0.25} />
              <stop offset="100%" stopColor={color} stopOpacity={0.02} />
            </linearGradient>
          </defs>
          <CartesianGrid vertical={false} stroke="#2a2a35" />
          <XAxis dataKey={xKey} tick={{ fontSize: 11, fill: '#8888a0' }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 11, fill: '#8888a0' }} axisLine={false} tickLine={false}
            tickFormatter={v => Number(v) >= 1000 ? `${Number(v) / 1000}k` : String(v)} />
          <Tooltip content={<Tip />} />
          <Area type="monotone" dataKey={dataKey} stroke={color} strokeWidth={2}
            fill={`url(#g${dataKey})`} dot={false} activeDot={{ r: 4, fill: color, stroke: 'none' }} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

function BarChartInner({ data, dataKey, xKey, color = '#22c55e', title, height = 220 }: ChartProps) {
  return (
    <div className="bg-surface-2 border border-border rounded-xl p-5">
      <div className="flex justify-between items-center mb-5">
        <span className="text-sm font-medium text-text">{title}</span>
        <span className="text-green text-xs">↗</span>
      </div>
      <ResponsiveContainer width="100%" height={height}>
        <BarChart data={data} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
          <CartesianGrid vertical={false} stroke="#2a2a35" />
          <XAxis dataKey={xKey} tick={{ fontSize: 11, fill: '#8888a0' }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 11, fill: '#8888a0' }} axisLine={false} tickLine={false}
            tickFormatter={v => Number(v) >= 1000 ? `${Number(v) / 1000}k` : String(v)} />
          <Tooltip content={<Tip />} cursor={{ fill: 'rgba(255,255,255,0.03)' }} />
          <Bar dataKey={dataKey} fill={color} radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export function Chart({ type = 'area', ...props }: ChartProps) {
  if (type === 'bar') return <BarChartInner {...props} />
  return <AreaChartInner {...props} />
}

interface SimpleBarProps {
  data: { category: string; value: number }[]
  title: string
  color?: string
  height?: number
}

export function BarChartSimple({ data, title, color = '#22c55e', height = 220 }: SimpleBarProps) {
  return (
    <div className="bg-surface-2 border border-border rounded-xl p-5">
      <div className="flex justify-between items-center mb-5">
        <span className="text-sm font-medium text-text">{title}</span>
        <span className="text-green text-xs">↗</span>
      </div>
      <ResponsiveContainer width="100%" height={height}>
        <BarChart data={data} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
          <CartesianGrid vertical={false} stroke="#2a2a35" />
          <XAxis dataKey="category" tick={{ fontSize: 11, fill: '#8888a0' }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 11, fill: '#8888a0' }} axisLine={false} tickLine={false}
            tickFormatter={v => Number(v) >= 1000 ? `${Number(v) / 1000}k` : String(v)} />
          <Tooltip content={<Tip />} cursor={{ fill: 'rgba(255,255,255,0.03)' }} />
          <Bar dataKey="value" fill={color} radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export const AreaChartCard = (props: ChartProps) => <AreaChartInner {...props} />
export const BarChartCard = (props: ChartProps) => <BarChartInner {...props} />
