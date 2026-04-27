// ─── Nav ─────────────────────────────────────────────────────
export const NAV = [
  { section: 'COMMAND', items: [
    { label: 'CEO Dashboard',       href: '/dashboard',             icon: 'LayoutDashboard', badge: 3 },
    { label: 'AI Agents',           href: '/dashboard/agents',      icon: 'Bot',             dot: 'green' },
  ]},
  { section: 'OPERATIONS', items: [
    { label: 'Strategy & Planning', href: '/dashboard/planning',    icon: 'Target' },
    { label: 'Finance & Accounting',href: '/dashboard/finance',     icon: 'DollarSign',      dot: 'red' },
    { label: 'Corporate Structure', href: '/dashboard/corporate',   icon: 'Building2' },
    { label: 'Tasks & Projects',    href: '/dashboard/tasks',       icon: 'CheckSquare' },
  ]},
  { section: 'GROWTH', items: [
    { label: 'CMO Dashboard',       href: '/dashboard/marketing',   icon: 'TrendingUp',      dot: 'green' },
    { label: 'Account Management',  href: '/dashboard/accounts',    icon: 'Users' },
    { label: 'Marketing Hub',       href: '/dashboard/hub',         icon: 'Megaphone' },
    { label: 'Creative Studio',     href: '/dashboard/creative',    icon: 'Palette' },
    { label: 'CRM',                 href: '/dashboard/crm',         icon: 'UserCheck' },
  ]},
  { section: 'INNOVATION', items: [
    { label: 'LAB',                 href: '/dashboard/lab',         icon: 'FlaskConical' },
    { label: 'Strategic Intel',     href: '/dashboard/intel',       icon: 'Lightbulb' },
    { label: 'Automation',          href: '/dashboard/automation',  icon: 'Zap' },
  ]},
]

// ─── CEO Dashboard ────────────────────────────────────────────
export const CEO_KPIS = [
  { label: 'Total Revenue',    value: '$412K',  change: '+18.2% vs last period', up: true,  icon: 'DollarSign' },
  { label: 'Monthly Growth',   value: '+24.5%', change: '+5.1% vs last period',  up: true,  icon: 'TrendingUp' },
  { label: 'Active Customers', value: '1,284',  change: '+12.3% vs last period', up: true,  icon: 'Users' },
  { label: 'OKR Progress',     value: '78%',    change: '-2.4% vs last period',  up: false, icon: 'Target' },
]
export const REVENUE_TREND = [
  { month: 'Jan', value: 45000 }, { month: 'Feb', value: 52000 },
  { month: 'Mar', value: 49000 }, { month: 'Apr', value: 61000 },
  { month: 'May', value: 72000 }, { month: 'Jun', value: 81000 },
]
export const CASHFLOW_WEEKS = [
  { week: 'Week 1', value: 11000 }, { week: 'Week 2', value: 17000 },
  { week: 'Week 3', value: 14000 }, { week: 'Week 4', value: 21000 },
]
export const ALERTS = [
  { id: '1', type: 'critical' as const, title: 'Cashflow Warning',         desc: 'Projected deficit in 14 days. Review pending invoices.', time: 'Just now' },
  { id: '2', type: 'warning'  as const, title: 'Parque Xtremo — firma pendiente', desc: '2 contratos sin firmar bloquean la tokenización.',          time: '2h ago' },
  { id: '3', type: 'info'     as const, title: 'DUUAL — campaña lista',    desc: '10 productos listos para publicar. Aprobación requerida.',  time: '4h ago' },
]
export const AGENTS = [
  { id: 'ceo',    name: 'CEO Agent',   status: 'active' as const, task: 'Daily briefing generado',   progress: 100, color: '#7c6af5' },
  { id: 'cmo',    name: 'CMO Agent',   status: 'active' as const, task: 'Optimizing ad spend',       progress: 84,  color: '#a855f7' },
  { id: 'cfo',    name: 'CFO Agent',   status: 'active' as const, task: 'Cash flow analysis',        progress: 67,  color: '#3b82f6' },
  { id: 'cto',    name: 'CTO Agent',   status: 'active' as const, task: 'Code review Sprint 1',      progress: 72,  color: '#22c55e' },
  { id: 'coo',    name: 'COO Agent',   status: 'soon'   as const, task: 'Disponible en Sprint 3',    progress: 0,   color: '#06b6d4' },
  { id: 'artist', name: 'Artist Agent',status: 'phase2' as const, task: 'Disponible en Fase 2',      progress: 0,   color: '#f59e0b' },
]

// ─── Planning ─────────────────────────────────────────────────
export const PLANNING_KPIS = [
  { label: 'Active OKRs', value: '24', change: '',                       up: true,  icon: 'Target' },
  { label: 'On Track',    value: '18', change: '+12% vs last period',    up: true,  icon: 'CheckCircle' },
  { label: 'At Risk',     value: '4',  change: '+-25% vs last period',   up: false, icon: 'AlertCircle' },
  { label: 'Avg Progress',value: '78%',change: '+8% vs last period',     up: true,  icon: 'Clock' },
]
export const OKRS = [
  { id:'1', title: 'Lanzar DUUAL e-commerce — 10 productos', progress: 55, status: 'on-track'  as const, quarter: 'Q1' },
  { id:'2', title: 'Lanzar Parque Xtremo (tokenización)',     progress: 30, status: 'at-risk'   as const, quarter: 'Q1' },
  { id:'3', title: 'Throu Wallet — iniciar cotización',       progress: 20, status: 'at-risk'   as const, quarter: 'Q1' },
  { id:'4', title: 'Meta ingresos $1,000 USD',                progress: 10, status: 'off-track' as const, quarter: 'Q1' },
  { id:'5', title: 'Constituir empresa corporativo legal',     progress: 0,  status: 'off-track' as const, quarter: 'Q1' },
  { id:'6', title: 'CI/CD Multichain Solana — DApp',          progress: 40, status: 'on-track'  as const, quarter: 'Q1' },
  { id:'7', title: 'Lanzar Miel Riviera',                     progress: 0,  status: 'off-track' as const, quarter: 'Q2' },
  { id:'8', title: 'Ag. Inmobiliaria operativa',               progress: 0,  status: 'off-track' as const, quarter: 'Q3' },
  { id:'9', title: 'Meta $55K USD',                           progress: 2,  status: 'at-risk'   as const, quarter: 'Q4' },
]

// ─── Finance ──────────────────────────────────────────────────
export const FINANCE_KPIS = [
  { label: 'Monthly Revenue',     value: '$72K',    change: '+24.1% vs last period', up: true,  icon: 'DollarSign' },
  { label: 'Operating Expenses',  value: '$48K',    change: '+-8.2% vs last period', up: false, icon: 'TrendingDown' },
  { label: 'Net Profit',          value: '$24K',    change: '+45.3% vs last period', up: true,  icon: 'TrendingUp' },
  { label: 'Burn Rate',           value: '$16K/mo', change: '+-12% vs last period',  up: false, icon: 'Clock' },
]
export const CASHFLOW_6M = [
  { month: 'Jan', value: 42000 }, { month: 'Feb', value: 48000 },
  { month: 'Mar', value: 45000 }, { month: 'Apr', value: 55000 },
  { month: 'May', value: 62000 }, { month: 'Jun', value: 71000 },
]
export const EXPENSES = [
  { category: 'Payroll', value: 36000 }, { category: 'Marketing', value: 19000 },
  { category: 'Operations', value: 12000 }, { category: 'R&D', value: 8000 },
]
export const TRANSACTIONS = [
  { id:'1', desc: 'DUUAL — Shopify revenue',    amount: '+$1,240', date: 'Hoy',      type: 'income'  as const },
  { id:'2', desc: 'Claude API — uso mensual',   amount: '-$14',    date: 'Hoy',      type: 'expense' as const },
  { id:'3', desc: 'Throu — inversión tokenizada',amount: '+$5,000', date: 'Ayer',     type: 'income'  as const },
  { id:'4', desc: 'Vercel hosting',             amount: '-$20',    date: 'Ayer',     type: 'expense' as const },
  { id:'5', desc: 'Parque Xtremo — anticipo',   amount: '+$8,500', date: 'Abr 10',   type: 'income'  as const },
  { id:'6', desc: 'Nómina equipo',              amount: '-$6,200', date: 'Abr 10',   type: 'expense' as const },
]

// ─── CMO ──────────────────────────────────────────────────────
export const CMO_KPIS = [
  { label: 'Campaign ROI',    value: '340%',  change: '+22% vs last period',  up: true,  icon: 'TrendingUp' },
  { label: 'Active Campaigns',value: '12',    change: '+8% vs last period',   up: true,  icon: 'Target' },
  { label: 'Conversions',     value: '1,840', change: '+15.2% vs last period',up: true,  icon: 'ShoppingCart' },
  { label: 'CAC',             value: '$42',   change: '+-12% vs last period', up: false, icon: 'DollarSign' },
]
export const FUNNEL = [
  { stage: 'Awareness', value: 12000 }, { stage: 'Interest', value: 7800 },
  { stage: 'Purchase',  value: 4200  }, { stage: 'Retention', value: 1840 },
]
export const ROI_CHANNELS = [
  { channel: 'Email', roi: 320 }, { channel: 'Social', roi: 165 },
  { channel: 'Paid',  roi: 240 }, { channel: 'Organic', roi: 290 },
]
export const CAMPAIGNS = [
  { id:'1', name: 'Q2 Product Launch',        status: 'Running',   days: 29, spend: '$16.2K', color: '#22c55e' },
  { id:'2', name: 'Email Nurture Series',     status: 'Running',   days: 22, spend: '$32.8K', color: '#22c55e' },
  { id:'3', name: 'DUUAL Dropshipping Launch',status: 'Scheduled', days: 5,  spend: '$4.5K',  color: '#f59e0b' },
  { id:'4', name: 'Throu Token Awareness',    status: 'Running',   days: 14, spend: '$8.1K',  color: '#22c55e' },
]

// ─── Tasks ────────────────────────────────────────────────────
export const TASKS = [
  { id:'1', title: 'Firmar contrato Parque Xtremo',   company: 'MMCVM',   status: 'todo'       as const, priority: 'critical' as const, agent: 'CEO', due: 'Hoy' },
  { id:'2', title: 'Publicar 10 productos DUUAL',     company: '1105 LAB',status: 'in-progress'as const, priority: 'high'     as const, agent: 'CMO', due: 'Hoy' },
  { id:'3', title: 'Cotización Throu Wallet',         company: 'Throu',   status: 'todo'       as const, priority: 'high'     as const, agent: 'CTO', due: 'Mañana' },
  { id:'4', title: 'Setup CI/CD Solana DApp',         company: 'Throu',   status: 'in-progress'as const, priority: 'medium'   as const, agent: 'CTO', due: 'Vie' },
  { id:'5', title: 'Crear campaña Meta Ads DUUAL',    company: '1105 LAB',status: 'todo'       as const, priority: 'high'     as const, agent: 'CMO', due: 'Vie' },
  { id:'6', title: 'Editar imagen artística 2105',    company: '2105',    status: 'in-progress'as const, priority: 'low'      as const, agent: 'ART', due: 'Sem 2' },
  { id:'7', title: 'Configurar KOZMO operaciones',    company: 'KOZMO',   status: 'todo'       as const, priority: 'medium'   as const, agent: 'COO', due: 'Sem 2' },
  { id:'8', title: 'Dashboard CEO en producción',     company: 'MMCVM',   status: 'done'       as const, priority: 'critical' as const, agent: 'CTO', due: 'Done' },
]

// ─── CRM ──────────────────────────────────────────────────────
export const LEADS = [
  { id:'1', name: 'Carlos Mendoza',  company: 'Inversiones CM', value: '$12K', stage: 'Proposal'  as const, last: 'Hoy' },
  { id:'2', name: 'Ana Restrepo',    company: 'Arco Inmob.',    value: '$8K',  stage: 'Meeting'   as const, last: 'Ayer' },
  { id:'3', name: 'Felipe Torres',   company: 'TechStart SAS',  value: '$25K', stage: 'Closed Won'as const, last: 'Abr 10' },
  { id:'4', name: 'María López',     company: 'Digital Hub',    value: '$5K',  stage: 'Lead'      as const, last: 'Abr 9' },
  { id:'5', name: 'Jorge Castillo',  company: 'Fintech Co.',    value: '$40K', stage: 'Negotiation'as const,last: 'Abr 8' },
]

// ─── Corporate ────────────────────────────────────────────────
export const COMPANIES = [
  { id:'1', name: 'MMCVM Group',         role: 'CEO · Holding',        color: '#1F6FEB', status: 'active', revenue: '$55K meta',   employees: 1 },
  { id:'2', name: 'Throu Finance Group', role: 'COO · Fintech',        color: '#1D9E75', status: 'active', revenue: 'Pre-revenue',  employees: 2 },
  { id:'3', name: 'Oncecerocinco LAB',   role: 'CMO · Marketing',      color: '#F0883E', status: 'active', revenue: 'En montaje',   employees: 1 },
  { id:'4', name: 'Ar K / DUUAL',        role: 'Inmob · E-commerce',   color: '#BC8CFF', status: 'active', revenue: '$1.2K MRR',    employees: 1 },
  { id:'5', name: '2105 Studio',         role: 'Artista · Colección',  color: '#FF7B72', status: 'active', revenue: 'Pre-revenue',  employees: 1 },
  { id:'6', name: 'KOZMO Healthy',       role: 'Operaciones · Hoteles', color: '#E3B341', status: 'active', revenue: 'En desarrollo',employees: 2 },
]
