/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          deep: "#080810",
          charcoal: "#11111B",
          card: "#161626",
          cardBorder: "#27253D",
          purple: "#8B35FF",
          purpleLight: "#B77AFF",
          purpleDark: "#6117C7",
          purpleGlow: "rgba(139, 53, 255, 0.35)",
          white: "#FFFFFF",
          grey: "#B8B8C5",
          greyDark: "#6B6A7D",
          lavenderHero: "#F6F4FF",
          lavenderCard: "#EFEBFF",
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-reverse': 'floatReverse 7s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 18s linear infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(12px)' },
        },
        glowPulse: {
          '0%': { opacity: '0.4', transform: 'scale(0.98)' },
          '100%': { opacity: '0.85', transform: 'scale(1.02)' },
        }
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(ellipse at 50% 20%, rgba(183, 122, 255, 0.22) 0%, rgba(246, 244, 255, 0.8) 60%, #FAF8FF 100%)',
        'purple-radial': 'radial-gradient(circle at center, rgba(139, 53, 255, 0.18) 0%, rgba(8, 8, 16, 0) 70%)',
        'dark-mesh': 'radial-gradient(circle at 10% 20%, rgba(139, 53, 255, 0.08) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(183, 122, 255, 0.06) 0%, transparent 40%)',
      }
    },
  },
  plugins: [],
}
