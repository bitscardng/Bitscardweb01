/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-white": "var(--color-white)",
        "bg-dark": "var(--color-dark)",
        "bg-green": "var(--color-green)",
        "bg-black": "var(--color-black)",
      },
    },
  },
  plugins: [require("daisyui")],
};
