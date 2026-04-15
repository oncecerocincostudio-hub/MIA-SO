'use client'

import {
  LineChart, Line, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Area, AreaChart
} from 'recharts'

interface ChartProps {
  data: Array<Record<string, string | number>>
  dataKey: string
  xKey: string
  color?: string
  title: string
  height?: number
  type?: 'line' | 'bar' | 'area'
}

const CustomTooltip = ({ active, payload, label }: {
  active?: boolean
  payload?: Array<{ value: number }>
  label?: string
}) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-surface-3 border border-border rounded-lg px-3 py-2 text-xs">
        <div className="text-muted mb-1">{label}</div>
        <div className="font-semibold text-text">
          {typeof payload[0].value === 'number' && payload[0].value > 1000
            ? `$${(payload[0].value / 1000).toFixed(0)}K`
            : payload[0].value}
        </div>
      </div>
    )
  }
  return null
}

export function Chart({ data, dataKey, xKey, color = '#7c6af5', title, height = 220, type = 'area' }: ChartProps) {
  return (
    <div className="bg-surface-2 border border-border rounded-xl p-5">
      <div className="flex items-center justify-between mb-5">
        <span className="text-sm font-medium text-text">{title}</span>
        <div className="w-5 h-5 text-green">
          <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="4,14 9,9 13,12 18,6" />
            <polyline points="14,6 18,6 18,10" />
          </svg>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={height}>
        {type === 'bar' ? (
          <BarChart data={data} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
            <CartesianGrid vertical={false} strokeDasharray="0" stroke="#2a2a35" />
            <XAxis dataKey={xKey} tick={{ fontSize: 11, fill: '#8888a0' }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 11, fill: '#8888a0' }} axisLine={false} tickLine={false}
              tickFormatter={v => v >= 1000 ? `${v/1000}k` : String(v)} />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.03)' }} />
            <Bar dataKey={dataKey} fill={color} radius={[4, 4, 0, 0]} />
          </BarChart>
        ) : (
          <AreaChart data={data} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id={`grad-${dataKey}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={color} stopOpacity={0.25} />
                <stop offset="100%" stopColor={color} stopOpacity={0.02} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} strokeDasharray="0" stroke="#2a2a35" />
            <XAxis dataKey={xKey} tick={{ fontSize: 11, fill: '#8888a0' }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 11, fill: '#8888a0' }} axisLine={false} tickLine={false}
              tickFormatter={v => v >= 1000 ? `${v/1000}k` : String(v)} />
            <Tooltip content={<CustomTooltip />} />
            <Area type="monotone" dataKey={dataKey} stroke={color} strokeWidth={2}
              fill={`url(#grad-${dataKey})`} dot={false} activeDot={{ r: 4, fill: color, stroke: 'none' }} />
          </AreaChart>
        )}
      </ResponsiveContainer>
    </div>
  )
}

// Multi-bar chart for expense breakdown
interface MultiBarProps {
  data: Array<{ category: string; value: number }>
  title: string
  color?: string
}

export function BarChartSimple({ data, title, color = '#ef4444' }: MultiBarProps) {
  return (
    <div className="bg-surface-2 border border-border rounded-xl p-5">
      <div className="flex items-center justify-between mb-5">
        <span className="text-sm font-medium text-text">{title}</span>
        <div className="w-5 h-5 text-green">
          <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="4,14 9,9 13,12 18,6" />
            <polyline points="14,6 18,6 18,10" />
          </svg>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={data} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
          <CartesianGrid vertical={false} strokeDasharray="0" stroke="#2a2a35" />
          <XAxis dataKey="category" tick={{ fontSize: 11, fill: '#8888a0' }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 11, fill: '#8888a0' }} axisLine={false} tickLine={false}
            tickFormatter={v => v >= 1000 ? `${v/1000}k` : String(v)} />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.03)' }} />
          <Bar dataKey="value" fill={color} radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
