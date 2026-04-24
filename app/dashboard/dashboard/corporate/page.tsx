import { TopBar } from '@/components/layout/TopBar'
import { COMPANIES } from '@/lib/data'

export default function CorporatePage() {
  return (
    <>
      <TopBar title="Corporate Structure" />
      <main className="flex-1 overflow-y-auto p-6 animate-slide-in">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-text">Corporate Structure</h1>
          <p className="text-sm text-muted mt-1">Estructura legal y corporativa del Grupo MMCVM</p>
        </div>

        {/* Summary cards */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-surface-2 border border-border rounded-xl p-5">
            <div className="text-sm text-muted mb-2">Empresas activas</div>
            <div className="text-3xl font-semibold text-text">6</div>
          </div>
          <div className="bg-surface-2 border border-border rounded-xl p-5">
            <div className="text-sm text-muted mb-2">Meta ingresos 2026</div>
            <div className="text-3xl font-semibold text-amber">$55,000</div>
          </div>
          <div className="bg-surface-2 border border-border rounded-xl p-5">
            <div className="text-sm text-muted mb-2">Equipo total</div>
            <div className="text-3xl font-semibold text-text">8</div>
          </div>
        </div>

        {/* Company grid */}
        <div className="grid grid-cols-2 gap-4">
          {COMPANIES.map(co => (
            <div key={co.id} className="bg-surface-2 border border-border rounded-xl p-5 hover:border-border-2 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold flex-shrink-0"
                  style={{backgroundColor:co.color+'20', color:co.color, border:`1px solid ${co.color}30`}}>
                  {co.name[0]}
                </div>
                <div className="flex-1">
                  <div className="text-base font-semibold text-text">{co.name}</div>
                  <div className="text-xs text-muted mt-0.5">{co.role}</div>
                  <div className="flex items-center gap-4 mt-3">
                    <div>
                      <div className="text-[10px] text-faint uppercase tracking-wider">Revenue</div>
                      <div className="text-sm text-text font-medium mt-0.5">{co.revenue}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-faint uppercase tracking-wider">Equipo</div>
                      <div className="text-sm text-text font-medium mt-0.5">{co.employees} persona{co.employees > 1 ? 's' : ''}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-faint uppercase tracking-wider">Estado</div>
                      <span className="text-xs text-green font-medium mt-0.5 block">● Activa</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  )
}
