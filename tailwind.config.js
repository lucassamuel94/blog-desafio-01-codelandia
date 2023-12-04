/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        md: '2rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      }
    },
    colors: {
      brand: '#E07B67',
      dark: {
        10: '#121214',
        20: '#17171A',
        30: '#202024',
        40: '#252529',
        50: '#AFABB6',
        60: '#FFFFFF',
      }
    },
    fontFamily: {
      sans: "'Inter', sans-serif",
      heading: "'Space Grotesk', serif",
    },
    extend: {}
  },
  plugins: [],
}

