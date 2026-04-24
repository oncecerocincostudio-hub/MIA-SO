'use client'

import { TopBar } from '@/components/layout/TopBar'
import { Upload, Download, Image, FileVideo, FileText, Layers, Plus, Star } from 'lucide-react'

const PROJECTS = [
  { id: '1', name: 'DUUAL Brand Kit', type: 'Branding', status: 'En proceso', progress: 70, color: '#7c6af5', files: 12, updated: 'Hace 2h' },
  { id: '2', name: 'Colección 5x5 — Renders', type: 'Arte', status: 'Revisión', progress: 90, color: '#f59e0b', files: 5, updated: 'Hace 1d' },
  { id: '3', name: 'Throu — Assets Web', type: 'UI/UX', status: 'Completado', progress: 100, color: '#22c55e', files: 28, updated: 'Hace 3d' },
  { id: '4', name: 'MMCVM — Pitch Deck', type: 'Presentación', status: 'En proceso', progress: 45, color: '#3b82f6', files: 8, updated: 'Hace 4h' },
  { id: '5', name: 'KOZMO — Social Pack', type: 'Social Media', status: 'Borrador', progress: 20, color: '#06b6d4', files: 3, updated: 'Hace 2d' },
]

const ASSETS = [
  { name: 'hero-duual.png', type: 'image', size: '2.4MB', star: true },
  { name: 'logo-mmcvm.svg', type: 'image', size: '48KB', star: true },
  { name: 'pitch-v3.mp4', type: 'video', size: '142MB', star: false },
  { name: 'brief-kozmo.pdf', type: 'doc', size: '1.1MB', star: false },
  { name: 'coleccion5x5.png', type: 'image', size: '8.2MB', star: true },
  { name: 'throu-ui-kit.fig', type: 'doc', size: '24MB', star: false },
]

const FILE_ICON = { image: Image, video: FileVideo, doc: FileText }
const STATUS_COLOR: Record<string, string> = {
  'En proceso': 'text-blue bg-blue/10 border-blue/20',
  'Revisión': 'text-amber bg-amber/10 border-amber/20',
  'Completado': 'text-green bg-green/10 border-green/20',
  'Borrador': 'text-muted bg-surface-3 border-border',
}

export default function CreativePage() {
  return (
    <>
      <TopBar pageTitle="Creative Studio" />
      <main className="flex-1 overflow-y-auto p-6 animate-slide-in">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-text">Creative Studio</h1>
          <p className="text-sm text-muted mt-1">Proyectos creativos, assets y producción visual</p>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-4">
          {[
            { label: 'Proyectos activos', value: '5', color: 'text-accent' },
            { label: 'Assets totales', value: '84', color: 'text-blue' },
            { label: 'Entregados este mes', value: '12', color: 'text-green' },
          ].map(s => (
            <div key={s.label} className="bg-surface-2 border border-border rounded-xl p-4 flex items-center gap-4">
              <Layers size={22} className={s.color} />
              <div>
                <div className="text-xl font-semibold text-text">{s.value}</div>
                <div className="text-xs text-muted">{s.label}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-5 gap-4">
          {/* Projects list */}
          <div className="col-span-3 bg-surface-2 border border-border rounded-xl p-5">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-medium text-text">Proyectos</h2>
              <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent text-white text-xs font-medium hover:bg-accent-2 transition-all">
                <Plus size={13} /> Nuevo
              </button>
            </div>
            <div className="flex flex-col gap-3">
              {PROJECTS.map(p => (
                <div key={p.id} className="p-3 bg-surface-3 border border-border rounded-lg hover:border-border-2 transition-all cursor-pointer">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="text-sm font-medium text-text">{p.name}</div>
                      <div className="text-[11px] text-muted mt-0.5">{p.type} · {p.files} archivos · {p.updated}</div>
                    </div>
                    <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${STATUS_COLOR[p.status]}`}>
                      {p.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-1.5 bg-surface-2 rounded-full overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: `${p.progress}%`, backgroundColor: p.color }} />
                    </div>
                    <span className="text-[11px] text-muted font-mono w-8 text-right">{p.progress}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Assets */}
          <div className="col-span-2 bg-surface-2 border border-border rounded-xl p-5">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-medium text-text">Assets recientes</h2>
              <button className="flex items-center gap-1 text-xs text-muted hover:text-text transition-colors">
                <Upload size={13} /> Subir
              </button>
            </div>
            <div className="flex flex-col gap-2">
              {ASSETS.map(a => {
                const Icon = FILE_ICON[a.type as keyof typeof FILE_ICON]
                return (
                  <div key={a.name} className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-surface-3 transition-all group cursor-pointer">
                    <div className="w-8 h-8 rounded-lg bg-surface-3 border border-border flex items-center justify-center flex-shrink-0">
                      <Icon size={14} className="text-muted" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-medium text-text truncate">{a.name}</div>
                      <div className="text-[11px] text-faint">{a.size}</div>
                    </div>
                    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all">
                      <Star size={12} className={a.star ? 'text-amber fill-amber' : 'text-faint'} />
                      <Download size={12} className="text-muted" />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
