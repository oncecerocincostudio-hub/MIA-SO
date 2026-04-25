'use client'

import { TopBar } from '@/components/layout/TopBar'
import { Chart, BarChartSimple } from '@/components/dashboard/Charts'
import { Play, Pause, Plus, Mail, Share2, Search, Globe } from 'lucide-react'

const CONTENT_CALENDAR = [
  { day: 'Lun', items: ['Post Instagram DUUAL', 'Email Newsletter'] },
  { day: 'Mar', items: ['Reel producto x10'] },
  { day: 'Mié', items: ['Blog SEO Throu', 'Story pricing'] },
  { day: 'Jue', items: [] },
  { day: 'Vie', items: ['Post LinkedIn CEO', 'Email follow-up'] },
  { day: 'Sáb', items: ['UGC repost'] },
  { day: 'Dom', items: [] },
]

const CHANNELS = [
  { name: 'Email', icon: Mail, leads: 420, conv: '8.4%', color: '#3b82f6', status: 'active' },
  { name: 'Social Ads', icon: Share2, leads: 890, conv: '3.2%', color: '#a855f7', status: 'active' },
  { name: 'SEO', icon: Search, leads: 310, conv: '5.1%', color: '#22c55e', status: 'active' },
  { name: 'Google Ads', icon: Globe, leads: 220, conv: '4.7%', color: '#f59e0b', status: 'paused' },
]

const TRAFFIC_DATA = [
  { month: 'Ene', value: 4200 },
  { month: 'Feb', value: 5800 },
  { month: 'Mar', value: 5100 },
  { month: 'Abr', value: 7200 },
  { month: 'May', value: 8900 },
  { month: 'Jun', value: 11200 },
]

const CONV_DATA = [
  { category: 'Landing', value: 420 },
  { category: 'Email', value: 310 },
  { category: 'Ads', value: 280 },
  { category: 'Org.', value: 190 },
]

export default function MarketingHubPage() {
  return (
    <>
      <TopBar pageTitle="Marketing Hub" />
      <main className="flex-1 overflow-y-auto p-6 animate-slide-in">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-text">Marketing Hub</h1>
          <p className="text-sm text-muted mt-1">Centro de control de canales, contenido y conversiones</p>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          {/* Channels */}
          <div className="col-span-1 bg-surface-2 border border-border rounded-xl p-5">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-medium text-text">Canales Activos</h2>
              <button className="text-accent hover:text-accent-2 transition-colors">
                <Plus size={16} />
              </button>
            </div>
            <div className="flex flex-col gap-3">
              {CHANNELS.map(ch => {
                const Icon = ch.icon
                return (
                  <div key={ch.name} className="flex items-center gap-3 p-3 bg-surface-3 rounded-lg border border-border">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: ch.color + '20' }}>
                      <Icon size={14} style={{ color: ch.color }} />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-text">{ch.name}</div>
                      <div className="text-[11px] text-muted">{ch.leads} leads · {ch.conv} conv.</div>
                    </div>
                    <button className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${ch.status === 'active' ? 'bg-green/20 text-green' : 'bg-surface-3 text-muted'}`}>
                      {ch.status === 'active' ? <Pause size={10} /> : <Play size={10} />}
                    </button>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Charts */}
          <div className="col-span-2 flex flex-col gap-4">
            <Chart data={TRAFFIC_DATA} dataKey="value" xKey="month" color="#7c6af5" title="Tráfico Web (6 meses)" type="area" height={160} />
            <BarChartSimple data={CONV_DATA} title="Conversiones por canal" color="#3b82f6" />
          </div>
        </div>

        {/* Content Calendar */}
        <div className="bg-surface-2 border border-border rounded-xl p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-medium text-text">Calendario de Contenido — Esta semana</h2>
            <button className="flex items-center gap-1.5 text-sm text-accent hover:text-accent-2 transition-colors">
              <Plus size={14} /> Agregar
            </button>
          </div>
          <div className="grid grid-cols-7 gap-2">
            {CONTENT_CALENDAR.map(day => (
              <div key={day.day} className="flex flex-col gap-1.5">
                <div className="text-[11px] font-medium text-faint uppercase text-center mb-1">{day.day}</div>
                {day.items.length === 0 ? (
                  <div className="h-12 border border-dashed border-border rounded-lg flex items-center justify-center">
                    <Plus size={12} className="text-faint" />
                  </div>
                ) : (
                  day.items.map(item => (
                    <div key={item} className="bg-accent/10 border border-accent/20 rounded-lg px-2 py-1.5 text-[11px] text-accent leading-tight cursor-pointer hover:bg-accent/20 transition-all">
                      {item}
                    </div>
                  ))
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
