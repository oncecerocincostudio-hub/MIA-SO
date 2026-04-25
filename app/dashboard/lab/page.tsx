'use client'

import { TopBar } from '@/components/layout/TopBar'
import { FlaskConical, Rocket, Clock, CheckCircle, AlertCircle, Plus } from 'lucide-react'

const EXPERIMENTS = [
  { id: '1', name: 'AI Pricing Optimizer — DUUAL', hypothesis: 'Aumentar precios 15% con IA no reduce conversiones', status: 'running', progress: 62, started: 'Hace 5d', result: null },
  { id: '2', name: 'WhatsApp Chatbot Sales Closer', hypothesis: 'Chatbot cierra 30% más ventas que formulario web', status: 'completed', progress: 100, started: 'Hace 3sem', result: '+28% conversiones' },
  { id: '3', name: 'NFT Drop — Colección 5x5', hypothesis: 'Drop limitado genera urgencia y +50% revenue', status: 'planned', progress: 0, started: '—', result: null },
  { id: '4', name: 'n8n Auto-content pipeline', hypothesis: 'Automatizar 80% del contenido reduce costo 60%', status: 'running', progress: 35, started: 'Hace 2d', result: null },
]

const IDEAS = [
  { title: 'IA para valuación de propiedades Ar K', votes: 8, tag: 'Inmobiliaria' },
  { title: 'Token de membresía KOZMO', votes: 6, tag: 'Web3' },
  { title: 'Auto-generador de reportes CEO Agent', votes: 12, tag: 'MIA OS' },
  { title: 'Marketplace de infoproductos 1105', votes: 5, tag: 'E-commerce' },
]

const STATUS_CONFIG = {
  running: { label: 'Corriendo', icon: Clock, color: 'text-blue', bg: 'bg-blue/10 border-blue/20' },
  completed: { label: 'Completado', icon: CheckCircle, color: 'text-green', bg: 'bg-green/10 border-green/20' },
  planned: { label: 'Planeado', icon: AlertCircle, color: 'text-muted', bg: 'bg-surface-3 border-border' },
}

export default function LabPage() {
  return (
    <>
      <TopBar pageTitle="LAB" />
      <main className="flex-1 overflow-y-auto p-6 animate-slide-in">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-text">LAB</h1>
          <p className="text-sm text-muted mt-1">Experimentos, hipótesis e innovación del grupo MMCVM</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          {[
            { label: 'Experimentos activos', value: '2', icon: FlaskConical, color: 'text-accent' },
            { label: 'Completados', value: '1', icon: CheckCircle, color: 'text-green' },
            { label: 'Ideas en backlog', value: '4', icon: Rocket, color: 'text-blue' },
            { label: 'Tasa de éxito', value: '100%', icon: CheckCircle, color: 'text-amber' },
          ].map(s => {
            const Icon = s.icon
            return (
              <div key={s.label} className="bg-surface-2 border border-border rounded-xl p-4 flex items-center gap-3">
                <Icon size={20} className={s.color} />
                <div>
                  <div className="text-xl font-semibold text-text">{s.value}</div>
                  <div className="text-xs text-muted">{s.label}</div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="grid grid-cols-3 gap-4">
          {/* Experiments */}
          <div className="col-span-2 bg-surface-2 border border-border rounded-xl p-5">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-medium text-text">Experimentos</h2>
              <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent text-white text-xs font-medium hover:bg-accent-2 transition-all">
                <Plus size={13} /> Nuevo experimento
              </button>
            </div>
            <div className="flex flex-col gap-3">
              {EXPERIMENTS.map(exp => {
                const cfg = STATUS_CONFIG[exp.status as keyof typeof STATUS_CONFIG]
                const Icon = cfg.icon
                return (
                  <div key={exp.id} className="p-4 bg-surface-3 border border-border rounded-xl hover:border-border-2 transition-all">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1 mr-3">
                        <div className="text-sm font-medium text-text mb-1">{exp.name}</div>
                        <div className="text-[12px] text-muted italic">H: {exp.hypothesis}</div>
                      </div>
                      <span className={`flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-full border whitespace-nowrap ${cfg.bg} ${cfg.color}`}>
                        <Icon size={10} /> {cfg.label}
                      </span>
                    </div>
                    {exp.status !== 'planned' && (
                      <div className="mt-3">
                        <div className="flex justify-between text-[11px] mb-1">
                          <span className="text-faint">{exp.started}</span>
                          {exp.result && <span className="text-green font-medium">{exp.result}</span>}
                          {!exp.result && <span className="text-muted font-mono">{exp.progress}%</span>}
                        </div>
                        <div className="h-1.5 bg-surface-2 rounded-full overflow-hidden">
                          <div className="h-full rounded-full bg-accent" style={{ width: `${exp.progress}%` }} />
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Ideas backlog */}
          <div className="bg-surface-2 border border-border rounded-xl p-5">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-medium text-text">Ideas — Backlog</h2>
              <button className="text-accent hover:text-accent-2 transition-colors">
                <Plus size={15} />
              </button>
            </div>
            <div className="flex flex-col gap-2">
              {IDEAS.map(idea => (
                <div key={idea.title} className="p-3 bg-surface-3 border border-border rounded-lg hover:border-border-2 transition-all cursor-pointer group">
                  <div className="flex items-start justify-between gap-2">
                    <div className="text-[12px] text-text leading-relaxed">{idea.title}</div>
                    <div className="flex flex-col items-center gap-0.5 flex-shrink-0">
                      <button className="text-faint hover:text-amber transition-colors text-xs">▲</button>
                      <span className="text-[11px] font-mono font-medium text-muted">{idea.votes}</span>
                    </div>
                  </div>
                  <div className="mt-2">
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-accent/10 border border-accent/20 text-accent">{idea.tag}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
