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
        // SAF-inspired operational colors
        primary: {
          DEFAULT: '#1A365D', // Deep Navy (SAF Authority)
          light: '#2C5282',
          dark: '#0F2744',
        },
        secondary: {
          DEFAULT: '#3B82F6', // Bright Blue (Action)
          light: '#60A5FA',
          dark: '#2563EB',
        },
        accent: {
          DEFAULT: '#059669', // SAF Green (Readiness)
          light: '#10B981',
          dark: '#047857',
          '400': '#34D399', // Richer saturated variants
          '500': '#10B981',
          '600': '#059669',
          '700': '#047857',
        },
        background: {
          DEFAULT: '#0A0E17', // Deep space
          card: 'rgba(15, 23, 42, 0.75)', // Richer card bg
          elevated: 'rgba(30, 41, 59, 0.65)',
        },
        foreground: {
          DEFAULT: '#F8FAFC', // Crisp white
          muted: '#94A3B8', // Slate gray
          dim: '#64748B',
        },
        border: {
          DEFAULT: 'rgba(71, 85, 105, 0.3)',
          light: 'rgba(100, 116, 139, 0.4)',
        },
        destructive: {
          DEFAULT: '#DC2626', // RED ZONE
          light: '#EF4444',
          dark: '#B91C1C',
        },
        success: {
          DEFAULT: '#059669', // Match accent
          light: '#10B981',
          dark: '#047857',
        },
        warning: {
          DEFAULT: '#F59E0B', // Amber alert
          light: '#FBBF24',
          dark: '#D97706',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
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
