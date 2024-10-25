/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#3490dc",
        secondary: "#ffed4a",
        accent: "#ff3860",
        danger: "#e3342f",
        success: "#38c172",
        warning: "#f6993f",
        info: "#6cb2eb",
        neutral: "#3d4451",
      },
    },
  },
  plugins: [],
};
