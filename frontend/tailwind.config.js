module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        blob: {
          '0%': {
            transform: 'scale(1) translate(0px, 0px)',
          },
          '33%': {
            transform: 'scale(1.3) translate(30px, -50px)',
          },
          '66%': {
            transform: 'scale(0.9) translate(-20px, 20px)',
          },
          '100%': {
            transform: 'scale(1) translate(0px, 0px)',
          },
        },
      },
      animation: {
        'blob': 'blob 7s infinite',
      },
    },
  },
  plugins: [],
}