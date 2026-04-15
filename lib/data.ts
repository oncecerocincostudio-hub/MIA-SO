// ─── Types ───────────────────────────────────────────────────

export interface KPICard {
  label: string
  value: string
  change: string
  changeType: 'positive' | 'negative' | 'neutral'
  icon: string
}

export interface NavItem {
  label: string
  href: string
  icon: string
  badge?: number
  dot?: 'green' | 'amber' | 'red'
}

export interface NavSection {
  title: string
  items: NavItem[]
}

export interface Alert {
  id: string
  type: 'critical' | 'warning' | 'info'
  title: string
  description: string
  time: string
}

export interface Agent {
  id: string
  name: string
  status: 'active' | 'idle' | 'offline'
  task: string
  progress: number
  color: string
}

export interface OKR {
  id: string
  title: string
  progress: number
  status: 'on-track' | 'at-risk' | 'off-track' | 'completed'
  quarter: string
}

export interface Campaign {
  id: string
  name: string
  status: string
  daysLeft: number
  spend: string
  color: string
}

// ─── Navigation ───────────────────────────────────────────────

export const NAV_SECTIONS: NavSection[] = [
  {
    title: 'COMMAND',
    items: [
      { label: 'CEO Dashboard', href: '/dashboard', icon: 'LayoutDashboard', badge: 3 },
      { label: 'AI Agents', href: '/dashboard/agents', icon: 'Bot', dot: 'green' },
    ],
  },
  {
    title: 'OPERATIONS',
    items: [
      { label: 'Strategy & Planning', href: '/dashboard/planning', icon: 'Target' },
      { label: 'Finance & Accounting', href: '/dashboard/finance', icon: 'DollarSign', dot: 'red' },
      { label: 'Corporate Structure', href: '/dashboard/corporate', icon: 'Building2' },
    ],
  },
  {
    title: 'GROWTH',
    items: [
      { label: 'CMO Dashboard', href: '/dashboard/marketing', icon: 'TrendingUp', dot: 'green' },
      { label: 'Account Management', href: '/dashboard/accounts', icon: 'Users' },
      { label: 'Marketing Hub', href: '/dashboard/marketing-hub', icon: 'Megaphone' },
      { label: 'Creative Studio', href: '/dashboard/creative', icon: 'Palette' },
    ],
  },
  {
    title: 'INNOVATION',
    items: [
      { label: 'LAB', href: '/dashboard/lab', icon: 'FlaskConical' },
      { label: 'Strategic Intelligence', href: '/dashboard/intelligence', icon: 'Lightbulb' },
    ],
  },
]

// ─── CEO Dashboard Data ───────────────────────────────────────

export const CEO_KPIS: KPICard[] = [
  { label: 'Total Revenue', value: '$412K', change: '+18.2% vs last period', changeType: 'positive', icon: 'DollarSign' },
  { label: 'Monthly Growth', value: '+24.5%', change: '+5.1% vs last period', changeType: 'positive', icon: 'TrendingUp' },
  { label: 'Active Customers', value: '1,284', change: '+12.3% vs last period', changeType: 'positive', icon: 'Users' },
  { label: 'OKR Progress', value: '78%', change: '-2.4% vs last period', changeType: 'negative', icon: 'Target' },
]

export const REVENUE_TREND = [
  { month: 'Jan', value: 45000 },
  { month: 'Feb', value: 52000 },
  { month: 'Mar', value: 49000 },
  { month: 'Apr', value: 61000 },
  { month: 'May', value: 72000 },
  { month: 'Jun', value: 81000 },
]

export const CASHFLOW_DATA = [
  { week: 'Week 1', value: 11000 },
  { week: 'Week 2', value: 17000 },
  { week: 'Week 3', value: 14000 },
  { week: 'Week 4', value: 21000 },
]

export const CRITICAL_ALERTS: Alert[] = [
  { id: '1', type: 'critical', title: 'Cashflow Warning', description: 'Projected deficit in 14 days. Review pending invoices.', time: 'Just now' },
  { id: '2', type: 'warning', title: 'Parque Xtremo — Firma pendiente', description: '2 contratos sin firmar bloquean la tokenización.', time: '2h ago' },
  { id: '3', type: 'info', title: 'DUUAL web: campaña lista', description: '10 productos listos para publicar. Aprobación requerida.', time: '4h ago' },
]

export const ACTIVE_AGENTS: Agent[] = [
  { id: 'cmo', name: 'CMO Agent', status: 'active', task: 'Optimizing ad spend', progress: 84, color: '#7c6af5' },
  { id: 'cfo', name: 'CFO Agent', status: 'active', task: 'Cash flow analysis', progress: 67, color: '#3b82f6' },
  { id: 'coo', name: 'COO Agent', status: 'idle', task: 'Awaiting tasks', progress: 0, color: '#22c55e' },
]

// ─── Strategy & Planning Data ─────────────────────────────────

export const PLANNING_KPIS: KPICard[] = [
  { label: 'Active OKRs', value: '24', change: '', changeType: 'neutral', icon: 'Target' },
  { label: 'On Track', value: '18', change: '+12% vs last period', changeType: 'positive', icon: 'CheckCircle' },
  { label: 'At Risk', value: '4', change: '+-25% vs last period', changeType: 'negative', icon: 'AlertCircle' },
  { label: 'Avg Progress', value: '78%', change: '+8% vs last period', changeType: 'positive', icon: 'Clock' },
]

export const OKRS: OKR[] = [
  { id: '1', title: 'Lanzar DUUAL e-commerce — 10 productos', progress: 55, status: 'on-track', quarter: 'Q1 2026' },
  { id: '2', title: 'Lanzar Parque Xtremo (tokenización)', progress: 30, status: 'at-risk', quarter: 'Q1 2026' },
  { id: '3', title: 'Throu Wallet — iniciar cotización', progress: 20, status: 'at-risk', quarter: 'Q1 2026' },
  { id: '4', title: 'Meta ingresos $1,000 USD', progress: 10, status: 'off-track', quarter: 'Q1 2026' },
  { id: '5', title: 'Constituir empresa corporativo legal', progress: 0, status: 'off-track', quarter: 'Q1 2026' },
  { id: '6', title: 'CI/CD Multichain Solana — DApp', progress: 40, status: 'on-track', quarter: 'Q1 2026' },
]

// ─── Finance Data ─────────────────────────────────────────────

export const FINANCE_KPIS: KPICard[] = [
  { label: 'Monthly Revenue', value: '$72K', change: '+24.1% vs last period', changeType: 'positive', icon: 'DollarSign' },
  { label: 'Operating Expenses', value: '$48K', change: '+-8.2% vs last period', changeType: 'neutral', icon: 'TrendingDown' },
  { label: 'Net Profit', value: '$24K', change: '+45.3% vs last period', changeType: 'positive', icon: 'TrendingUp' },
  { label: 'Burn Rate', value: '$16K/mo', change: '+-12% vs last period', changeType: 'neutral', icon: 'Clock' },
]

export const CASHFLOW_6M = [
  { month: 'Jan', value: 42000 },
  { month: 'Feb', value: 48000 },
  { month: 'Mar', value: 45000 },
  { month: 'Apr', value: 55000 },
  { month: 'May', value: 62000 },
  { month: 'Jun', value: 71000 },
]

export const EXPENSE_BREAKDOWN = [
  { category: 'Payroll', value: 36000 },
  { category: 'Marketing', value: 19000 },
  { category: 'Operations', value: 12000 },
  { category: 'R&D', value: 8000 },
]

// ─── CMO Dashboard Data ───────────────────────────────────────

export const CMO_KPIS: KPICard[] = [
  { label: 'Campaign ROI', value: '340%', change: '+22% vs last period', changeType: 'positive', icon: 'TrendingUp' },
  { label: 'Active Campaigns', value: '12', change: '+8% vs last period', changeType: 'positive', icon: 'Target' },
  { label: 'Conversions', value: '1,840', change: '+15.2% vs last period', changeType: 'positive', icon: 'ShoppingCart' },
  { label: 'CAC', value: '$42', change: '+-12% vs last period', changeType: 'neutral', icon: 'DollarSign' },
]

export const MARKETING_FUNNEL = [
  { stage: 'Awareness', value: 12000 },
  { stage: 'Interest', value: 7800 },
  { stage: 'Purchase', value: 4200 },
  { stage: 'Retention', value: 1840 },
]

export const ROI_BY_CHANNEL = [
  { channel: 'Email', roi: 320 },
  { channel: 'Social', roi: 165 },
  { channel: 'Paid', roi: 240 },
  { channel: 'Organic', roi: 290 },
]

export const CAMPAIGNS: Campaign[] = [
  { id: '1', name: 'Q2 Product Launch', status: 'Running', daysLeft: 29, spend: '$16.2K', color: '#22c55e' },
  { id: '2', name: 'Email Nurture Series', status: 'Running', daysLeft: 22, spend: '$32.8K', color: '#22c55e' },
  { id: '3', name: 'DUUAL Dropshipping Launch', status: 'Scheduled', daysLeft: 5, spend: '$4.5K', color: '#f59e0b' },
  { id: '4', name: 'Throu Token Awareness', status: 'Running', daysLeft: 14, spend: '$8.1K', color: '#22c55e' },
]
