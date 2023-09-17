/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    colors: {
      primary: {
        100: "var(--primary-100)",
        90: "var(--primary-90)",
        50: "var(--primary-50)",
      },
      bg: {
        10: "var(--bg-10)",
        50: "var(--bg-50)",
        100: "var(--bg-100)",
        200: "var(--bg-200)",
      },
      text: {
        100: "var(--text-100)",
        200: "var(--text-200)",
        300: "var(--text-300)",
      },
      green: {
        100: "var(--green-100)",
        200: "var(--green-200)",
      },
      red: {
        100: "var(--red-100)",
        200: "var(--red-200)",
      },
      yellow: {
        100: "var(--yellow-100)",
        200: "var(--yellow-200)",
      },
      purple: {
        100: "var(--purple-100)",
        200: "var(--purple-200)",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
