import { TopBar } from '@/components/layout/TopBar'

export default function CorporatePage() {
  return (
    <>
      <TopBar pageTitle="Corporate Structure" />
      <main className="flex-1 overflow-y-auto p-6 animate-slide-in">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-text">Corporate Structure</h1>
          <p className="text-sm text-muted mt-1">Estructura legal y corporativa del grupo MMCVM</p>
        </div>
        <div className="bg-surface-2 border border-border rounded-xl p-8 text-center">
          <div className="text-4xl mb-4">🏢</div>
          <div className="text-text font-medium mb-2">Módulo en desarrollo</div>
          <div className="text-muted text-sm">Disponible en Sprint 2</div>
        </div>
      </main>
    </>
  )
}
