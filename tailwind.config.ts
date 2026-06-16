import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0E1419',
          soft: '#1A2229',
          deep: '#070B0F',
          line: '#2A333C',
        },
        paper: {
          DEFAULT: '#F5F1E8',
          soft: '#EDE6D3',
          aged: '#D9CFA8',
          muted: '#8A7F6B',
        },
        vermilion: {
          DEFAULT: '#C0392B',
          soft: '#D94A3B',
          deep: '#9B2A1D',
        },
        jade: {
          DEFAULT: '#2D6A4F',
          soft: '#40916C',
        },
        gold: {
          DEFAULT: '#B8860B',
          soft: '#D4A02A',
        },
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        serif: ['"Noto Serif SC"', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-2': '0.4em',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1.2s ease-out forwards',
        'float-slow': 'floatSlow 8s ease-in-out infinite',
        'toss': 'toss 1.2s cubic-bezier(0.4, 0.2, 0.2, 1) forwards',
        'draw-line': 'drawLine 0.6s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(3deg)' },
        },
        toss: {
          '0%': { transform: 'rotateX(0) rotateY(0) translateY(0)' },
          '50%': { transform: 'rotateX(720deg) rotateY(360deg) translateY(-60px)' },
          '100%': { transform: 'rotateX(1440deg) rotateY(720deg) translateY(0)' },
        },
        drawLine: {
          '0%': { clipPath: 'inset(0 100% 0 0)' },
          '100%': { clipPath: 'inset(0 0 0 0)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
