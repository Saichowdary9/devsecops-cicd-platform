/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: '#0A0E14',
          raised: '#0D1220',
        },
        surface: {
          DEFAULT: '#121826',
          hover: '#161E2E',
        },
        line: {
          DEFAULT: '#1E2836',
          hover: '#2A3648',
        },
        ink: {
          DEFAULT: '#E6EAF0',
          soft: '#8B96A8',
          faint: '#5B6678',
        },
        signal: {
          DEFAULT: '#F5A623',
          soft: '#FBC873',
          dim: '#8A5E1F',
        },
        pulse: {
          DEFAULT: '#2DD4BF',
          soft: '#7FE7DA',
          dim: '#1B7F73',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      maxWidth: {
        content: '72rem',
        prose: '42rem',
      },
      keyframes: {
        nodeOn: {
          '0%': { opacity: '0.25', transform: 'scale(0.85)' },
          '60%': { opacity: '1', transform: 'scale(1.08)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        dashFlow: {
          to: { strokeDashoffset: '-24' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        rise: {
          from: { opacity: '0', transform: 'translateY(10px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        nodeOn: 'nodeOn 0.5s ease-out forwards',
        dashFlow: 'dashFlow 1.2s linear infinite',
        blink: 'blink 1.1s step-end infinite',
        rise: 'rise 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
};
