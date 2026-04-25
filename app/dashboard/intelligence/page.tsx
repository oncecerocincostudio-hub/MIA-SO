'use client'

import { TopBar } from '@/components/layout/TopBar'
import { Chart } from '@/components/dashboard/Charts'
import { TrendingUp, TrendingDown, Minus, Globe, AlertTriangle } from 'lucide-react'

const COMPETITORS = [
  { name: 'Binance (Throu)', metric: 'Market Share', value: '34.2%', change: '-1.2%', trend: 'down' },
  { name: 'Shopify (DUUAL)', metric: 'GMV Growth', value: '+18%', change: '+3%', trend: 'up' },
  { name: 'Airbnb (KOZMO)', metric: 'Occupancy', value: '71%', change: '-2%', trend: 'down' },
  { name: 'OpenSea (NFT)', metric: 'Volume', value: '$82M', change: '+45%', trend: 'up' },
]

const MARKET_SIGNALS = [
  { id: '1', signal: 'Regulación crypto Colombia 2026 — Decreto pendiente', impact: 'high', category: 'Regulación', date: 'Hace 1d' },
  { id: '2', signal: 'Meta Ads CPM bajó 12% en Latam — oportunidad paid', impact: 'medium', category: 'Marketing', date: 'Hace 3h' },
  { id: '3', signal: 'Shopify lanzó mercado LatAm — competencia DUUAL', impact: 'high', category: 'Competencia', date: 'Hace 2d' },
  { id: '4', signal: 'Tasas de interés Colombia bajan 0.5% — mejor crédito', impact: 'low', category: 'Economía', date: 'Hace 5d' },
  { id: '5', signal: 'NFT market rebote +67% Q1 2026', impact: 'medium', category: 'Web3', date: 'Hace 1sem' },
]

const MARKET_SHARE = [
  { month: 'Ene', value: 2.1 },
  { month: 'Feb', value: 2.4 },
  { month: 'Mar', value: 2.2 },
  { month: 'Abr', value: 3.1 },
  { month: 'May', value: 3.8 },
  { month: 'Jun', value: 4.5 },
]

const IMPACT = {
  high: 'text-red bg-red/10 border-red/20',
  medium: 'text-amber bg-amber/10 border-amber/20',
  low: 'text-green bg-green/10 border-green/20',
}
const IMPACT_LABEL = { high: 'Alto', medium: 'Medio', low: 'Bajo' }

export default function IntelligencePage() {
  return (
    <>
      <TopBar pageTitle="Strategic Intelligence" />
      <main className="flex-1 overflow-y-auto p-6 animate-slide-in">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-text">Strategic Intelligence</h1>
          <p className="text-sm text-muted mt-1">Señales de mercado, competencia y tendencias del sector</p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <Chart data={MARKET_SHARE} dataKey="value" xKey="month" color="#7c6af5" title="Market Share MMCVM %" type="area" height={180} />

          {/* Competitors */}
          <div className="bg-surface-2 border border-border rounded-xl p-5">
            <div className="flex items-center gap-2 mb-4">
              <Globe size={15} className="text-muted" />
              <h2 className="text-sm font-medium text-text">Benchmarks Competitivos</h2>
            </div>
            <div className="flex flex-col gap-2">
              {COMPETITORS.map(c => (
                <div key={c.name} className="flex items-center justify-between p-2.5 bg-surface-3 rounded-lg">
                  <div>
                    <div className="text-[12px] font-medium text-text">{c.name}</div>
                    <div className="text-[11px] text-faint">{c.metric}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-text">{c.value}</div>
                    <div className={`text-[11px] flex items-center gap-0.5 justify-end ${c.trend === 'up' ? 'text-green' : c.trend === 'down' ? 'text-red' : 'text-muted'}`}>
                      {c.trend === 'up' ? <TrendingUp size={10} /> : c.trend === 'down' ? <TrendingDown size={10} /> : <Minus size={10} />}
                      {c.change}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Market Signals */}
        <div className="bg-surface-2 border border-border rounded-xl p-5">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle size={15} className="text-amber" />
            <h2 className="text-sm font-medium text-text">Señales de Mercado</h2>
          </div>
          <div className="flex flex-col gap-2">
            {MARKET_SIGNALS.map(s => (
              <div key={s.id} className="flex items-center gap-4 p-3 bg-surface-3 border border-border rounded-lg hover:border-border-2 transition-all">
                <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full border whitespace-nowrap ${IMPACT[s.impact as keyof typeof IMPACT]}`}>
                  {IMPACT_LABEL[s.impact as keyof typeof IMPACT_LABEL]}
                </span>
                <div className="flex-1 text-sm text-text">{s.signal}</div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-surface-2 border border-border text-muted">{s.category}</span>
                  <span className="text-[11px] text-faint">{s.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
