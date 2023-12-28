/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#34C0EA',
      },
      backgroundImage: {
        banner: `url('../public/images/banner.avif')`,
      },
    },
  },
  plugins: [],
};
