/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#1a1a1a', // Fundo escuro
          800: '#2d2d2d', // Fundo secundário
          700: '#3f3f3f', // Cinza escuro
        },
        beige: {
          200: '#f5e8d3', // Bege claro (destaque)
          300: '#e6d2a5', // Bege dourado
        },
        gold: {
          500: '#d4a017', // Dourado para botões
        },
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        greatVibes: ['Great Vibes', 'cursive'],
        lora: ['Lora', 'serif'],
      },
      backgroundImage: {
        'navbar-gradient': 'linear-gradient(to right, #2d2d2d, #3f3f3f)', // Gradiente para Navbar
      },
    },
  },
  plugins: [],
};