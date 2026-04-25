'use client'

import { TopBar } from '@/components/layout/TopBar'
import { Search, Filter, MoreHorizontal, TrendingUp, TrendingDown } from 'lucide-react'

const ACCOUNTS = [
  { id: '1', name: 'Parque Xtremo', type: 'Inversión', status: 'active', mrr: '$4,200', growth: '+12%', trend: 'up', contact: 'Carlos M.', lastActivity: 'Hace 2h' },
  { id: '2', name: 'DUUAL E-commerce', type: 'E-commerce', status: 'active', mrr: '$1,800', growth: '+34%', trend: 'up', contact: 'Ana L.', lastActivity: 'Hace 1h' },
  { id: '3', name: 'Throu Wallet', type: 'Fintech', status: 'pending', mrr: '$0', growth: '—', trend: 'neutral', contact: 'Miguel V.', lastActivity: 'Hace 3d' },
  { id: '4', name: 'Miel Riviera', type: 'Inmobiliaria', status: 'active', mrr: '$6,500', growth: '+8%', trend: 'up', contact: 'Sofia R.', lastActivity: 'Hace 5h' },
  { id: '5', name: 'Colección 5x5', type: 'Arte', status: 'inactive', mrr: '$320', growth: '-5%', trend: 'down', contact: 'Diego A.', lastActivity: 'Hace 1sem' },
  { id: '6', name: 'KOZMO Co-living', type: 'Hospitalidad', status: 'active', mrr: '$3,100', growth: '+21%', trend: 'up', contact: 'Laura P.', lastActivity: 'Hace 30m' },
  { id: '7', name: 'NFT Marketplace', type: 'Web3', status: 'pending', mrr: '$0', growth: '—', trend: 'neutral', contact: 'Juan E.', lastActivity: 'Hace 2d' },
  { id: '8', name: 'DApp Solana', type: 'Web3', status: 'active', mrr: '$890', growth: '+67%', trend: 'up', contact: 'Andrés T.', lastActivity: 'Hace 4h' },
]

const STATUS = {
  active: 'bg-green/10 text-green border-green/20',
  pending: 'bg-amber/10 text-amber border-amber/20',
  inactive: 'bg-surface-3 text-muted border-border',
}
const STATUS_LABEL = { active: 'Activo', pending: 'Pendiente', inactive: 'Inactivo' }

const STATS = [
  { label: 'Total Cuentas', value: '8', sub: '+2 este mes' },
  { label: 'MRR Total', value: '$16.8K', sub: '+18% vs anterior' },
  { label: 'Cuentas Activas', value: '5', sub: '62% del total' },
  { label: 'Churn Rate', value: '2.1%', sub: '-0.4% vs anterior' },
]

export default function AccountsPage() {
  return (
    <>
      <TopBar pageTitle="Account Management" />
      <main className="flex-1 overflow-y-auto p-6 animate-slide-in">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-text">Account Management</h1>
          <p className="text-sm text-muted mt-1">Gestión de cuentas y clientes del grupo MMCVM</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          {STATS.map(s => (
            <div key={s.label} className="bg-surface-2 border border-border rounded-xl p-4">
              <div className="text-sm text-muted mb-2">{s.label}</div>
              <div className="text-2xl font-semibold text-text">{s.value}</div>
              <div className="text-xs text-green mt-1">{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Table */}
        <div className="bg-surface-2 border border-border rounded-xl overflow-hidden">
          {/* Toolbar */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <div className="flex items-center gap-2 bg-surface-3 border border-border rounded-lg px-3 py-2 w-64">
              <Search size={14} className="text-muted" />
              <input
                placeholder="Buscar cuenta..."
                className="bg-transparent text-sm text-text placeholder:text-faint outline-none flex-1"
              />
            </div>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border text-sm text-muted hover:text-text hover:bg-surface-3 transition-all">
                <Filter size={13} />
                Filtrar
              </button>
              <button className="px-3 py-2 rounded-lg bg-accent text-white text-sm font-medium hover:bg-accent-2 transition-all">
                + Nueva cuenta
              </button>
            </div>
          </div>

          {/* Headers */}
          <div className="grid grid-cols-7 px-4 py-2 border-b border-border">
            {['Cuenta', 'Tipo', 'Estado', 'MRR', 'Crecimiento', 'Contacto', ''].map(h => (
              <div key={h} className="text-[11px] font-medium text-faint uppercase tracking-wider">{h}</div>
            ))}
          </div>

          {/* Rows */}
          {ACCOUNTS.map((acc, i) => (
            <div
              key={acc.id}
              className={`grid grid-cols-7 px-4 py-3 items-center border-b border-border last:border-0 hover:bg-surface-3 transition-all ${i % 2 === 0 ? '' : 'bg-surface-3/30'}`}
            >
              <div>
                <div className="text-sm font-medium text-text">{acc.name}</div>
                <div className="text-[11px] text-faint">{acc.lastActivity}</div>
              </div>
              <div className="text-sm text-muted">{acc.type}</div>
              <div>
                <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full border ${STATUS[acc.status as keyof typeof STATUS]}`}>
                  {STATUS_LABEL[acc.status as keyof typeof STATUS_LABEL]}
                </span>
              </div>
              <div className="text-sm font-medium text-text">{acc.mrr}</div>
              <div className="flex items-center gap-1">
                {acc.trend === 'up' && <TrendingUp size={13} className="text-green" />}
                {acc.trend === 'down' && <TrendingDown size={13} className="text-red" />}
                <span className={`text-sm font-medium ${acc.trend === 'up' ? 'text-green' : acc.trend === 'down' ? 'text-red' : 'text-muted'}`}>
                  {acc.growth}
                </span>
              </div>
              <div className="text-sm text-muted">{acc.contact}</div>
              <div className="flex justify-end">
                <button className="p-1.5 rounded-lg text-muted hover:text-text hover:bg-surface-3 transition-all">
                  <MoreHorizontal size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  )
}
