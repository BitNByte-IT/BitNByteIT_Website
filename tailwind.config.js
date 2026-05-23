/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Brand palette derived from BitNByte IT logo
        brand: {
          blue: {
            50: '#eef4ff',
            100: '#dbe6ff',
            200: '#bdd1ff',
            300: '#8eb1ff',
            400: '#5887ff',
            500: '#2f63ff',
            600: '#1d49ec',
            700: '#1a3bd1',
            800: '#1a33a3',
            900: '#0f1f5c',
            950: '#070f33',
          },
          orange: {
            50: '#fff5ed',
            100: '#ffe7d4',
            200: '#ffcaa8',
            300: '#ffa470',
            400: '#ff7437',
            500: '#fb5510',
            600: '#ec3d06',
            700: '#c42d07',
            800: '#9c270e',
            900: '#7e230f',
          },
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      animation: {
        'gradient-x': 'gradient-x 8s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'blink': 'blink 1s step-end infinite',
        'fade-up': 'fade-up 0.8s ease-out forwards',
        'scroll-x': 'scroll-x 40s linear infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scroll-x': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      backgroundImage: {
        'grid-pattern': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cpath fill='none' stroke='%231d49ec' stroke-opacity='0.08' d='M0 .5H40M.5 0V40'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
