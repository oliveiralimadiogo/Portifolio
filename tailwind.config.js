/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        androidGreen: '#3DDC84',
      },
    },
  },
  corePlugins: {
    preflight: true, // mantém o reset de estilo básico
  },
}
