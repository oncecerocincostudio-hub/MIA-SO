import { TopBar } from '@/components/layout/TopBar'
import { KPICard, AgentCard, Card, CardHeader } from '@/components/dashboard/UI'
import { BarChartCard } from '@/components/dashboard/Charts'
import { CMO_KPIS, FUNNEL, ROI_CHANNELS, CAMPAIGNS, AGENTS } from '@/lib/data'

export default function MarketingPage() {
  const cmo = AGENTS.find(a => a.id === 'cmo')!
  return (
    <>
      <TopBar title="CMO Dashboard" />
      <main className="flex-1 overflow-y-auto p-6 animate-slide-in">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-text">CMO Dashboard</h1>
          <p className="text-sm text-muted mt-1">Performance de marketing y gestión de campañas</p>
        </div>

        <div className="grid grid-cols-4 gap-4 mb-6">
          {CMO_KPIS.map(k => <KPICard key={k.label} {...k} />)}
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <BarChartCard data={FUNNEL.map(d=>({category:d.stage,value:d.value}))}   dataKey="value" xKey="category" color="#a855f7" title="Marketing Funnel" />
          <BarChartCard data={ROI_CHANNELS.map(d=>({channel:d.channel,value:d.roi}))} dataKey="value" xKey="channel"  color="#22c55e" title="ROI by Channel" />
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <Card>
              <CardHeader title="Active Campaigns" />
              <div className="flex flex-col divide-y divide-border">
                {CAMPAIGNS.map(c => (
                  <div key={c.id} className="flex items-center justify-between py-3">
                    <div>
                      <div className="text-sm font-medium text-text">{c.name}</div>
                      <div className="text-xs mt-0.5">
                        <span style={{color:c.color}}>{c.status}</span>
                        <span className="text-muted"> · {c.days} days left</span>
                      </div>
                    </div>
                    <div className="text-sm font-semibold text-green">{c.spend} <span className="text-muted font-normal text-xs">Spend</span></div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <div className="text-sm font-medium text-text mb-3">CMO Agent</div>
              <AgentCard {...cmo} />
            </div>
            <Card>
              <div className="text-xs text-muted uppercase tracking-wider mb-3">Recommendation</div>
              <p className="text-sm text-text leading-relaxed">
                Increase paid social budget 15% — ROI 240% vs 165% organic. Email channel showing highest returns.
              </p>
              <button className="mt-3 w-full py-2 rounded-lg bg-surface-3 border border-border text-xs text-accent hover:bg-accent hover:text-white hover:border-accent transition-all font-medium">
                Apply recommendation
              </button>
            </Card>
          </div>
        </div>
      </main>
    </>
  )
}
