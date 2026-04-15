# MIA OS — My Intelligent Advisor OS

Sistema operativo empresarial con IA para el Grupo MMCVM.

## Stack
- **Frontend**: Next.js 14 + TypeScript + Tailwind CSS
- **Charts**: Recharts
- **Icons**: Lucide React
- **Deploy**: Vercel

## Deploy en Vercel (3 pasos)

### 1. Subir a GitHub
```bash
git init
git add .
git commit -m "feat: MIA OS initial deploy"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/mia-os.git
git push -u origin main
```

### 2. Conectar con Vercel
1. Ve a [vercel.com](https://vercel.com)
2. Click **"Add New Project"**
3. Importa el repo `mia-os` desde GitHub
4. Click **"Deploy"** — sin cambiar nada

### 3. Listo
En ~2 minutos tendrás una URL tipo `mia-os.vercel.app`

## Desarrollo local
```bash
npm install
npm run dev
# Abre http://localhost:3000
```

## Estructura
```
app/
  dashboard/         → CEO Dashboard (página principal)
  dashboard/planning → Strategy & Planning
  dashboard/finance  → Finance & Accounting
  dashboard/marketing→ CMO Dashboard
  dashboard/agents   → AI Agents
components/
  layout/            → Sidebar, TopBar
  dashboard/         → KPICard, Charts, AlertAgent
lib/
  data.ts            → Datos y tipos del sistema
```

## Módulos completados (Sprint 1 MVP)
- ✅ CEO Dashboard — KPIs, Revenue Trend, Cashflow, Alerts, Agents
- ✅ Strategy & Planning — OKRs con progress bars
- ✅ Finance & Accounting — Cash flow, Expense breakdown
- ✅ CMO Dashboard — Funnel, ROI por canal, Campañas
- ✅ AI Agents — Centro de control de agentes

## Próximos sprints
- Sprint 2: Conectar Supabase con datos reales
- Sprint 3: CEO Agent con Claude API (chat en tiempo real)
- Sprint 4: COO Agent + sistema de tareas
