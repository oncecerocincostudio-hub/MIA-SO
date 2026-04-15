import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0a0a0f',
        surface: '#111118',
        'surface-2': '#18181f',
        'surface-3': '#1e1e28',
        border: '#2a2a35',
        'border-2': '#353542',
        text: '#e8e8f0',
        muted: '#8888a0',
        faint: '#44445a',
        accent: '#7c6af5',
        'accent-2': '#9d8ff7',
        green: '#22c55e',
        'green-dim': '#0f2918',
        blue: '#3b82f6',
        'blue-dim': '#0d1f3c',
        amber: '#f59e0b',
        'amber-dim': '#291d05',
        red: '#ef4444',
        'red-dim': '#2a0f0f',
        purple: '#a855f7',
        'purple-dim': '#1e0f35',
        cyan: '#06b6d4',
        'cyan-dim': '#051e28',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      borderRadius: {
        DEFAULT: '10px',
        lg: '14px',
        xl: '18px',
      },
    },
  },
  plugins: [],
}
export default config
