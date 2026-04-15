import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MIA OS — AI Operating System',
  description: 'My Intelligent Advisor OS — Centro de control empresarial con IA',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="dark">
      <body>{children}</body>
    </html>
  )
}
