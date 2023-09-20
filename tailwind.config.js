/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundColor: {
        'colorBg' : '#040C18',
        'colorFooter': '#031B34',
        'colorBlog': '#042c54',
        
      },
      colors: {
        'colorText' : '#81AFDD',
        'colorSubtext' : '#FF8A71'
      }
    },
  },
  plugins: [],
}

