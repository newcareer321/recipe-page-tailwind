module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      screens: {
        'sm': '200px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        // Add custom breakpoints
        'xxl': '1800px',
      },
      colors: {
        'light-peach': '#F3E5D7',
        'dark-brown': '#312E2C',
        'muted-brown': '#5F564D',
        'soft-pink': '#FFF7FB',
        'dark-pink': '#7A284E',
        'warm-brown': '#854632',
        'soft-beige': '#E3DDD7',
      },
       borderWidth: {
        '8': '8px', // Example: adding a 12px border width
      },
      fontFamily: {
        'be-vietnam': ['Be Vietnam', 'sans-serif'],
        'young-serif': ['"Young Serif"', 'serif'],
        'outfit': ['Outfit', 'sans-serif'],


      },
    },
  },
  plugins: [],
}
