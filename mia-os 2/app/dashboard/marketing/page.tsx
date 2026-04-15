import { TopBar } from '@/components/layout/TopBar'
import { KPICard } from '@/components/dashboard/KPICard'
import { Chart, BarChartSimple } from '@/components/dashboard/Charts'
import { CMO_KPIS, MARKETING_FUNNEL, ROI_BY_CHANNEL, CAMPAIGNS, ACTIVE_AGENTS } from '@/lib/data'
import { AgentCard } from '@/components/dashboard/AlertAgent'

export default function MarketingPage() {
  const cmoAgent = ACTIVE_AGENTS.find(a => a.id === 'cmo')!

  return (
    <>
      <TopBar currentView="marketing" pageTitle="CMO Dashboard" />
      <main className="flex-1 overflow-y-auto p-6 animate-slide-in">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-text">CMO Dashboard</h1>
          <p className="text-sm text-muted mt-1">Marketing performance and campaign management</p>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          {CMO_KPIS.map((kpi) => (
            <KPICard key={kpi.label} {...kpi} />
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <BarChartSimple
            data={MARKETING_FUNNEL.map(d => ({ category: d.stage, value: d.value }))}
            title="Marketing Funnel"
            color="#a855f7"
          />
          <BarChartSimple
            data={ROI_BY_CHANNEL.map(d => ({ category: d.channel, value: d.roi }))}
            title="ROI by Channel"
            color="#22c55e"
          />
        </div>

        {/* Campaigns + Agent */}
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2 bg-surface-2 border border-border rounded-xl p-5">
            <h2 className="text-sm font-medium text-text mb-4">Active Campaigns</h2>
            <div className="flex flex-col gap-3">
              {CAMPAIGNS.map((campaign) => (
                <div key={campaign.id} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                  <div>
                    <div className="text-sm font-medium text-text">{campaign.name}</div>
                    <div className="text-[12px] text-muted mt-0.5">
                      <span
                        className="font-medium"
                        style={{ color: campaign.color }}
                      >
                        {campaign.status}
                      </span>
                      {campaign.daysLeft > 0 && ` · ${campaign.daysLeft} days left`}
                    </div>
                  </div>
                  <div className="text-sm font-semibold text-green">{campaign.spend} <span className="text-muted font-normal text-xs">Spend</span></div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-medium text-text mb-3">CMO Agent</h2>
            <AgentCard agent={cmoAgent} />
            <div className="bg-surface-2 border border-border rounded-xl p-4 mt-3">
              <div className="text-xs text-muted font-medium uppercase tracking-wider mb-3">Recommendation</div>
              <div className="text-sm text-text leading-relaxed">
                Increase paid social budget by 15% — ROI is 240% vs 165% on organic. Email channel showing highest returns.
              </div>
              <button className="mt-3 w-full py-2 rounded-lg bg-surface-3 border border-border text-xs text-accent hover:bg-accent hover:text-white hover:border-accent transition-all font-medium">
                Apply recommendation
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
