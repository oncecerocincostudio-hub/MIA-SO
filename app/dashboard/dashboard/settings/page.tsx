'use client'

import { TopBar } from '@/components/layout/TopBar'
import { User, Bell, Shield, Palette, Globe, Key, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const SECTIONS = [
  { id: 'profile', label: 'Perfil', icon: User },
  { id: 'notifications', label: 'Notificaciones', icon: Bell },
  { id: 'security', label: 'Seguridad', icon: Shield },
  { id: 'appearance', label: 'Apariencia', icon: Palette },
  { id: 'integrations', label: 'Integraciones', icon: Globe },
  { id: 'api', label: 'API & Tokens', icon: Key },
]

const INTEGRATIONS = [
  { name: 'Supabase', desc: 'Base de datos y autenticación', status: 'connected', color: '#22c55e' },
  { name: 'Claude API', desc: 'Inteligencia artificial (Anthropic)', status: 'connected', color: '#7c6af5' },
  { name: 'n8n', desc: 'Automatización de flujos', status: 'pending', color: '#f59e0b' },
  { name: 'Google Workspace', desc: 'Drive, Calendar, Gmail', status: 'disconnected', color: '#3b82f6' },
  { name: 'WhatsApp Business', desc: 'Chatbot y notificaciones', status: 'disconnected', color: '#22c55e' },
  { name: 'Stripe', desc: 'Pagos y facturación', status: 'disconnected', color: '#7c6af5' },
]

const STATUS_STYLE = {
  connected: 'text-green',
  pending: 'text-amber',
  disconnected: 'text-muted',
}
const STATUS_LABEL = { connected: '● Conectado', pending: '● Pendiente', disconnected: '○ Desconectado' }

export default function SettingsPage() {
  const [active, setActive] = useState('profile')
  const [notif, setNotif] = useState({ email: true, push: false, weekly: true, agents: true })

  return (
    <>
      <TopBar pageTitle="Settings" />
      <main className="flex-1 overflow-y-auto p-6 animate-slide-in">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-text">Settings</h1>
          <p className="text-sm text-muted mt-1">Configuración del sistema MIA OS</p>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {/* Sidebar nav */}
          <div className="col-span-1 bg-surface-2 border border-border rounded-xl p-2 h-fit">
            {SECTIONS.map(s => {
              const Icon = s.icon
              return (
                <button
                  key={s.id}
                  onClick={() => setActive(s.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all mb-0.5 ${active === s.id ? 'bg-surface-3 text-text font-medium' : 'text-muted hover:bg-surface-3 hover:text-text'}`}
                >
                  <Icon size={15} className={active === s.id ? 'text-accent' : 'text-faint'} />
                  {s.label}
                  {active === s.id && <ChevronRight size={13} className="ml-auto text-faint" />}
                </button>
              )
            })}
          </div>

          {/* Content */}
          <div className="col-span-3 bg-surface-2 border border-border rounded-xl p-6">

            {active === 'profile' && (
              <div>
                <h2 className="text-base font-semibold text-text mb-5">Perfil del CEO</h2>
                <div className="flex items-center gap-4 mb-6 p-4 bg-surface-3 rounded-xl border border-border">
                  <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center text-white text-2xl font-bold">M</div>
                  <div>
                    <div className="text-text font-semibold">CEO — MMCVM Group</div>
                    <div className="text-sm text-muted">Medellín, Colombia</div>
                    <button className="text-xs text-accent hover:text-accent-2 mt-1 transition-colors">Cambiar foto</button>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[['Nombre', 'CEO'], ['Email', 'ceo@mmcvm.com'], ['Empresa', 'MMCVM Group'], ['Rol', 'Chief Executive Officer']].map(([label, val]) => (
                    <div key={label}>
                      <label className="text-xs text-muted font-medium block mb-1.5">{label}</label>
                      <input defaultValue={val} className="w-full bg-surface-3 border border-border rounded-lg px-3 py-2 text-sm text-text outline-none focus:border-accent transition-colors" />
                    </div>
                  ))}
                </div>
                <button className="mt-5 px-4 py-2 rounded-lg bg-accent text-white text-sm font-medium hover:bg-accent-2 transition-all">Guardar cambios</button>
              </div>
            )}

            {active === 'notifications' && (
              <div>
                <h2 className="text-base font-semibold text-text mb-5">Notificaciones</h2>
                <div className="flex flex-col gap-3">
                  {[
                    { key: 'email', label: 'Notificaciones por email', desc: 'Recibe alertas críticas en tu correo' },
                    { key: 'push', label: 'Notificaciones push', desc: 'Alertas en tiempo real en el navegador' },
                    { key: 'weekly', label: 'Resumen semanal', desc: 'Report automático cada lunes 8am' },
                    { key: 'agents', label: 'Alertas de agentes IA', desc: 'Cuando un agente propone una acción' },
                  ].map(item => (
                    <div key={item.key} className="flex items-center justify-between p-4 bg-surface-3 border border-border rounded-xl">
                      <div>
                        <div className="text-sm font-medium text-text">{item.label}</div>
                        <div className="text-xs text-muted mt-0.5">{item.desc}</div>
                      </div>
                      <button
                        onClick={() => setNotif(prev => ({ ...prev, [item.key]: !prev[item.key as keyof typeof prev] }))}
                        className={`w-11 h-6 rounded-full transition-all relative ${notif[item.key as keyof typeof notif] ? 'bg-accent' : 'bg-surface-2 border border-border'}`}
                      >
                        <div className={`absolute top-0.5 w-5 h-5 rounded-full bg-white transition-all ${notif[item.key as keyof typeof notif] ? 'left-5.5' : 'left-0.5'}`} style={{ left: notif[item.key as keyof typeof notif] ? '22px' : '2px' }} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {active === 'integrations' && (
              <div>
                <h2 className="text-base font-semibold text-text mb-5">Integraciones</h2>
                <div className="flex flex-col gap-3">
                  {INTEGRATIONS.map(int => (
                    <div key={int.name} className="flex items-center justify-between p-4 bg-surface-3 border border-border rounded-xl hover:border-border-2 transition-all">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg flex items-center justify-center text-white text-sm font-bold" style={{ background: int.color + '20', border: `1px solid ${int.color}40` }}>
                          <span style={{ color: int.color }}>{int.name[0]}</span>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-text">{int.name}</div>
                          <div className="text-xs text-muted">{int.desc}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className={`text-xs font-medium ${STATUS_STYLE[int.status as keyof typeof STATUS_STYLE]}`}>
                          {STATUS_LABEL[int.status as keyof typeof STATUS_LABEL]}
                        </span>
                        <button className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${int.status === 'connected' ? 'bg-red/10 text-red border border-red/20 hover:bg-red/20' : 'bg-accent/10 text-accent border border-accent/20 hover:bg-accent hover:text-white'}`}>
                          {int.status === 'connected' ? 'Desconectar' : 'Conectar'}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {active === 'security' && (
              <div>
                <h2 className="text-base font-semibold text-text mb-5">Seguridad</h2>
                <div className="flex flex-col gap-4">
                  <div className="p-4 bg-green/10 border border-green/20 rounded-xl">
                    <div className="text-sm font-medium text-green mb-1">✓ Autenticación activa</div>
                    <div className="text-xs text-muted">Tu sesión está protegida con Supabase Auth</div>
                  </div>
                  <div>
                    <label className="text-xs text-muted font-medium block mb-1.5">Nueva contraseña</label>
                    <input type="password" placeholder="••••••••" className="w-full bg-surface-3 border border-border rounded-lg px-3 py-2 text-sm text-text outline-none focus:border-accent transition-colors" />
                  </div>
                  <div>
                    <label className="text-xs text-muted font-medium block mb-1.5">Confirmar contraseña</label>
                    <input type="password" placeholder="••••••••" className="w-full bg-surface-3 border border-border rounded-lg px-3 py-2 text-sm text-text outline-none focus:border-accent transition-colors" />
                  </div>
                  <button className="w-fit px-4 py-2 rounded-lg bg-accent text-white text-sm font-medium hover:bg-accent-2 transition-all">Actualizar contraseña</button>
                </div>
              </div>
            )}

            {(active === 'appearance' || active === 'api') && (
              <div className="flex flex-col items-center justify-center h-48 text-center">
                <div className="text-4xl mb-3">⚙️</div>
                <div className="text-text font-medium mb-1">Próximamente</div>
                <div className="text-sm text-muted">Esta sección estará disponible en el siguiente sprint</div>
              </div>
            )}

          </div>
        </div>
      </main>
    </>
  )
}
