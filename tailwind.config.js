module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'purple': 'var(--purple)',
        'blue':'var(--blue)',
        'light-blue': 'var(--light-blue)',
        'orange': 'var(--orange)',
        'green': 'var(--green)',
      },
      fontFamily: {
        sans: ['var(--font-primary)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
