import { TopBar } from '@/components/layout/TopBar'

export default function Page() {
  return (
    <>
      <TopBar currentView="page" pageTitle="Coming Soon" />
      <main className="flex-1 overflow-y-auto p-6 animate-slide-in">
        <div className="bg-surface-2 border border-border rounded-xl p-8 text-center mt-20">
          <div className="text-faint text-5xl mb-4">⚙</div>
          <div className="text-text font-medium mb-2">Módulo en desarrollo</div>
          <div className="text-muted text-sm">Disponible próximamente</div>
        </div>
      </main>
    </>
  )
}
