import tailwindForms from '@tailwindcss/forms'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brighte: {
          primary: '#00A87B',
          secondary: '#00C28C',
          white: '#FFFFFF',
        },
      },
      boxShadow: {
        custom: '0 4px 6px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      },
    },
  },
  plugins: [
    tailwindForms
  ],
};