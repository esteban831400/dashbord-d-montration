/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif']
      },
      colors: {
        accent: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b'
        }
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: 0, transform: 'translateY(6px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        },
        'fade-in-scale': {
          '0%': { opacity: 0, transform: 'scale(0.98)' },
          '100%': { opacity: 1, transform: 'scale(1)' }
        }
      },
      animation: {
        'fade-in': 'fade-in 0.4s ease-out both',
        'fade-in-scale': 'fade-in-scale 0.2s ease-out both'
      }
    }
  },
  plugins: []
}
