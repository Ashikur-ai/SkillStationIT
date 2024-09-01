/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary_red: '#ff0000', // Example: Blue color
        primary_green: '#1cab55',
        accent: 'rgb(255, 199, 0)',
        success: 'green',
        error: 'red',
        warning: 'yellow',
        info: 'blue',
      },
    },
  },
  plugins: [require('daisyui'),],
}

