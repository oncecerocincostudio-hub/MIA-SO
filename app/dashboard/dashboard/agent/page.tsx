'use client'

import { TopBar } from '@/components/layout/TopBar'
import { useState, useRef, useEffect } from 'react'
import { Send, Bot, User, CheckCircle, XCircle, Clock, Zap } from 'lucide-react'

const SESSIONS = [
  { id: '1', date: 'Hoy · 9:14am', preview: 'Análisis semanal Q1 2026...' },
  { id: '2', date: 'Ayer · 6:30pm', preview: 'Prioridades DUUAL esta semana...' },
  { id: '3', date: 'Abr 22 · 11am', preview: 'Throu Wallet — siguiente paso...' },
  { id: '4', date: 'Abr 21 · 3pm', preview: 'Parque Xtremo — firma contrato...' },
]

const QUICK_COMMANDS = ['/analiza', '/prioriza', '/reporta', '/okrs', '/cashflow']

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  actions?: Array<{ title: string; approved: boolean | null }>
  time: string
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: '1',
    role: 'assistant',
    content: 'Buenos días, CEO. Analicé el estado actual de tus 6 empresas. Hay 3 alertas críticas que requieren acción esta semana:\n\n• Parque Xtremo — 2 firmas de contrato pendientes\n• Throu Wallet — 8 semanas en planeación sin cotización\n• DUUAL — 10 productos listos para publicar',
    actions: [
      { title: 'Confirmar firma Parque Xtremo antes del viernes', approved: null },
      { title: 'Iniciar cotización Throu Wallet esta semana', approved: null },
    ],
    time: '9:14am',
  },
]

export default function AgentPage() {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES)
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [activeSession, setActiveSession] = useState('1')
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  function approveAction(msgId: string, actionIndex: number, approved: boolean) {
    setMessages(prev => prev.map(m => {
      if (m.id !== msgId || !m.actions) return m
      const newActions = [...m.actions]
      newActions[actionIndex] = { ...newActions[actionIndex], approved }
      return { ...m, actions: newActions }
    }))
  }

  function sendMessage(text?: string) {
    const content = text || input.trim()
    if (!content || loading) return
    setInput('')

    const userMsg: Message = { id: Date.now().toString(), role: 'user', content, time: new Date().toLocaleTimeString('es', { hour: '2-digit', minute: '2-digit' }) }
    setMessages(prev => [...prev, userMsg])
    setLoading(true)

    // Simulate AI response
    setTimeout(() => {
      const responses: Record<string, string> = {
        '/analiza': 'Análisis completo del estado del negocio:\n\n**1. Cuello de botella crítico — Throu Wallet**\nLleva 8 semanas en fase de planeación. Sin cotización iniciada, el Q3 está en riesgo. Acción: agendar llamada con desarrolladores esta semana.\n\n**2. DUUAL sin tracción comercial**\n10 productos listos pero sin campaña activa. Cada semana sin vender es ingreso perdido. Acción: publicar y activar Meta Ads esta semana.\n\n**3. Parque Xtremo bloqueado**\n2 contratos sin firma bloquean la tokenización completa. Acción: reunión urgente con los firmantes.',
        '/prioriza': 'Las 5 prioridades de esta semana en orden de impacto en ingresos:\n\n1. 🔴 Publicar 10 productos DUUAL + activar campaña\n2. 🔴 Firmar contratos Parque Xtremo (2 pendientes)\n3. 🟡 Reunión equipo Throu — iniciar cotización Wallet\n4. 🟡 Review OKRs Q1 — actualizar progreso\n5. 🟢 Revisar propuesta KOZMO Co-living Q2',
        '/reporta': 'Resumen ejecutivo — Semana del 21 Abr 2026:\n\n**Logros:** DApp Solana CI avanzó al 40%. KOZMO cerró contrato co-living. 1105 LAB produjo 47 contenidos.\n\n**Ingresos:** $890 USD acumulados (1.6% de meta anual).\n\n**Próximos hitos:** Lanzamiento DUUAL (esta semana), firma Xtremo (viernes), cotización Wallet.',
        '/okrs': 'Estado OKRs Q1 2026:\n\n✅ DApp Solana CI — 40% (en track)\n🟡 DUUAL E-commerce — 55% (necesita campaña)\n🔴 Parque Xtremo — 30% (bloqueado, firma pendiente)\n🔴 Meta $1K USD — 10% (crítico)\n⬜ Corporativo legal — 0% (sin iniciar)',
        '/cashflow': 'Estado financiero actual:\n\nIngresos acumulados 2026: $890 USD\nMeta anual: $55,000 USD\nProgreso: 1.6%\n\nProyección conservadora al ritmo actual: $10,680 USD (19% de meta).\n\nPara alcanzar la meta necesitas acelerar a ~$5,500 USD/mes desde Junio. DUUAL y Parque Xtremo son los aceleradores clave.',
      }

      const defaultResponse = 'Procesando tu consulta con el contexto actual de las 6 empresas del grupo MMCVM...\n\nBasándome en los datos actuales, la acción más importante es enfocarte en DUUAL: tienes 10 productos listos y una campaña sin activar. Cada día sin lanzar es ingreso perdido.'

      const responseText = responses[content] || defaultResponse

      const assistantMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: responseText,
        actions: content === '/prioriza' ? [
          { title: 'Publicar 10 productos DUUAL + activar campaña Meta Ads', approved: null },
          { title: 'Firmar contratos Parque Xtremo esta semana', approved: null },
        ] : undefined,
        time: new Date().toLocaleTimeString('es', { hour: '2-digit', minute: '2-digit' }),
      }
      setMessages(prev => [...prev, assistantMsg])
      setLoading(false)
    }, 1200)
  }

  return (
    <>
      <TopBar pageTitle="CEO Agent" />
      <main className="flex-1 overflow-hidden flex">
        {/* Session history */}
        <div className="w-52 flex-shrink-0 border-r border-border bg-surface flex flex-col">
          <div className="p-3 border-b border-border">
            <button
              onClick={() => { setMessages(INITIAL_MESSAGES); setActiveSession('new') }}
              className="w-full flex items-center gap-2 px-3 py-2 rounded-lg bg-accent/10 border border-accent/20 text-accent text-xs font-medium hover:bg-accent hover:text-white transition-all"
            >
              <Zap size={12} /> Nueva sesión
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-2">
            <div className="text-[10px] font-medium text-faint uppercase tracking-wider px-2 py-1 mb-1">Sesiones</div>
            {SESSIONS.map(s => (
              <button
                key={s.id}
                onClick={() => setActiveSession(s.id)}
                className={`w-full text-left px-3 py-2.5 rounded-lg mb-1 transition-all ${activeSession === s.id ? 'bg-surface-3 border border-border-2' : 'hover:bg-surface-2'}`}
              >
                <div className="text-[11px] text-faint mb-0.5">{s.date}</div>
                <div className="text-[12px] text-muted truncate">{s.preview}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Chat area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-4">
            {messages.map(msg => (
              <div key={msg.id} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-accent' : 'bg-surface-3 border border-border'}`}>
                  {msg.role === 'user' ? <User size={14} className="text-white" /> : <Bot size={14} className="text-accent" />}
                </div>
                <div className={`max-w-[75%] flex flex-col gap-2 ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] text-faint">{msg.role === 'user' ? 'CEO' : 'CEO Agent'}</span>
                    <span className="text-[11px] text-faint">{msg.time}</span>
                  </div>
                  <div className={`px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${msg.role === 'user' ? 'bg-accent text-white rounded-tr-sm' : 'bg-surface-2 border border-border text-text rounded-tl-sm'}`}>
                    {msg.content}
                  </div>

                  {/* Action cards */}
                  {msg.actions && msg.actions.map((action, i) => (
                    <div key={i} className={`w-full border rounded-xl p-3 transition-all ${action.approved === true ? 'bg-green/10 border-green/30' : action.approved === false ? 'bg-surface-3 border-border opacity-50' : 'bg-surface-2 border-border'}`}>
                      <div className="text-[11px] font-medium text-faint uppercase tracking-wider mb-1.5 flex items-center gap-1">
                        <Clock size={10} /> Acción propuesta
                      </div>
                      <div className="text-sm text-text mb-2.5">{action.title}</div>
                      {action.approved === null && (
                        <div className="flex gap-2">
                          <button onClick={() => approveAction(msg.id, i, true)} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-green/10 border border-green/30 text-green text-xs font-medium hover:bg-green hover:text-white transition-all">
                            <CheckCircle size={11} /> Aprobar
                          </button>
                          <button onClick={() => approveAction(msg.id, i, false)} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-3 border border-border text-muted text-xs hover:border-red hover:text-red transition-all">
                            <XCircle size={11} /> Descartar
                          </button>
                        </div>
                      )}
                      {action.approved === true && <div className="text-xs text-green font-medium flex items-center gap-1"><CheckCircle size={11} /> Aprobado</div>}
                      {action.approved === false && <div className="text-xs text-muted flex items-center gap-1"><XCircle size={11} /> Descartado</div>}
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-xl bg-surface-3 border border-border flex items-center justify-center">
                  <Bot size={14} className="text-accent" />
                </div>
                <div className="px-4 py-3 bg-surface-2 border border-border rounded-2xl rounded-tl-sm">
                  <div className="flex gap-1 items-center h-5">
                    {[0, 1, 2].map(i => (
                      <div key={i} className="w-1.5 h-1.5 rounded-full bg-accent animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
                    ))}
                  </div>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input area */}
          <div className="border-t border-border p-4 bg-surface">
            <div className="flex gap-2 mb-3 flex-wrap">
              {QUICK_COMMANDS.map(cmd => (
                <button key={cmd} onClick={() => sendMessage(cmd)} className="px-3 py-1 rounded-lg border border-border bg-surface-2 text-xs text-muted font-mono hover:border-accent hover:text-accent transition-all">
                  {cmd}
                </button>
              ))}
            </div>
            <div className="flex gap-3">
              <input
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && !e.shiftKey && sendMessage()}
                placeholder="Pregunta al CEO Agent..."
                className="flex-1 bg-surface-2 border border-border rounded-xl px-4 py-2.5 text-sm text-text placeholder:text-faint outline-none focus:border-accent transition-colors"
              />
              <button
                onClick={() => sendMessage()}
                disabled={!input.trim() || loading}
                className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center text-white hover:bg-accent-2 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Actions panel */}
        <div className="w-52 flex-shrink-0 border-l border-border bg-surface flex flex-col">
          <div className="p-3 border-b border-border">
            <div className="text-[10px] font-medium text-faint uppercase tracking-wider">Acciones pendientes</div>
          </div>
          <div className="flex-1 overflow-y-auto p-3 flex flex-col gap-2">
            {messages.flatMap(m => m.actions?.filter(a => a.approved === null).map((a, i) => ({ ...a, msgId: m.id, idx: i })) || []).map((action, i) => (
              <div key={i} className="p-2.5 bg-surface-2 border border-border rounded-lg">
                <div className="text-[11px] text-text leading-relaxed mb-2">{action.title}</div>
                <div className="flex gap-1.5">
                  <button onClick={() => approveAction(action.msgId, action.idx, true)} className="flex-1 py-1 rounded-md bg-green/10 border border-green/20 text-green text-[10px] font-medium hover:bg-green hover:text-white transition-all">✓</button>
                  <button onClick={() => approveAction(action.msgId, action.idx, false)} className="flex-1 py-1 rounded-md bg-surface-3 border border-border text-muted text-[10px] hover:border-red hover:text-red transition-all">✕</button>
                </div>
              </div>
            ))}
            {messages.flatMap(m => m.actions?.filter(a => a.approved === null) || []).length === 0 && (
              <div className="text-center py-8">
                <CheckCircle size={24} className="text-green mx-auto mb-2 opacity-50" />
                <div className="text-xs text-faint">Sin acciones pendientes</div>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  )
}
