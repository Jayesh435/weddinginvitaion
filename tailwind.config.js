/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: '#FFD700',
        'gold-deep': '#B8860B',
        'gold-bright': '#FBBF24',
        cream: '#FFF8F0',
        blush: '#FFB6C1',
        peach: '#FFCBA4',
        royal: '#3B0764',
        'royal-dark': '#1A0533',
        'royal-mid': '#5B21B6',
        crimson: '#7F1D1D',
        'crimson-light': '#DC143C',
        jewel: '#064E3B',
        navy: '#1E1B4B',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'royal-gradient': 'linear-gradient(135deg, #1A0533 0%, #3B0764 30%, #7C1D2E 70%, #1A0533 100%)',
        'gold-gradient': 'linear-gradient(135deg, #B8860B, #FFD700, #B8860B)',
      },
    },
  },
  plugins: [],
}

