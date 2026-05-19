import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Precision Command Center Aesthetic - Deep Navy + Electric Cyan
        primary: {
          DEFAULT: '#0F1729', // Command Center Navy
          light: '#1a2642',
          dark: '#08090f',
        },
        secondary: {
          DEFAULT: '#1e3a5f', // Tactical Blue
          light: '#2d5280',
          dark: '#0f1d3a',
        },
        accent: {
          DEFAULT: '#06b6d4', // Electric Cyan (Command)
          light: '#22d3ee',
          dark: '#0891b2',
          '400': '#22d3ee',
          '500': '#06b6d4',
          '600': '#0891b2',
          '700': '#0e7490',
        },
        background: {
          DEFAULT: '#0a0e1a', // Deep Command Black
          card: 'rgba(15, 23, 41, 0.8)', // Navy card bg
          elevated: 'rgba(30, 58, 95, 0.4)',
        },
        foreground: {
          DEFAULT: '#E2E8F0', // Tactical White
          muted: '#94a3b8',
          dim: '#64748b',
        },
        border: {
          DEFAULT: 'rgba(6, 182, 212, 0.2)', // Cyan borders
          light: 'rgba(34, 211, 238, 0.3)',
        },
        destructive: {
          DEFAULT: '#ef4444', // Alert Red
          light: '#f87171',
          dark: '#dc2626',
        },
        success: {
          DEFAULT: '#06b6d4', // Cyan success
          light: '#22d3ee',
          dark: '#0891b2',
        },
        warning: {
          DEFAULT: '#f59e0b', // Tactical Amber
          light: '#fbbf24',
          dark: '#d97706',
        },
      },
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Consolas', 'monospace'],
        display: ['Outfit', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'slide-down': 'slideDown 0.4s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 3s infinite',
        'float': 'float 6s ease-in-out infinite',
        'gradient-rotate': 'gradientRotate 8s linear infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gradientRotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        glowPulse: {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(5, 150, 105, 0.3), 0 0 40px rgba(5, 150, 105, 0.15)',
          },
          '50%': {
            boxShadow: '0 0 40px rgba(5, 150, 105, 0.5), 0 0 80px rgba(5, 150, 105, 0.25)',
          },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'glass-lg': '0 20px 60px 0 rgba(0, 0, 0, 0.5)',
        'glass-xl': '0 30px 80px 0 rgba(0, 0, 0, 0.6), 0 10px 30px 0 rgba(0, 0, 0, 0.4)',
        'inner-glow': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
        'inner-glow-strong': 'inset 0 2px 4px 0 rgba(255, 255, 255, 0.1), inset 0 -2px 4px 0 rgba(0, 0, 0, 0.1)',
        'accent': '0 0 20px rgba(5, 150, 105, 0.3)',
        'accent-strong': '0 0 30px rgba(5, 150, 105, 0.5), 0 0 60px rgba(5, 150, 105, 0.3)',
        'glow-intense': '0 0 40px rgba(5, 150, 105, 0.6), 0 0 80px rgba(5, 150, 105, 0.4), 0 0 120px rgba(5, 150, 105, 0.2)',
      },
    },
  },
  plugins: [],
} satisfies Config;
