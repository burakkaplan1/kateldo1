module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      heigth: {
        "1/6": "16.666667%",
        "2/6": "33.333333%",
        "3/6": "50.000%",
        "4/6": "66.66666%",
        "5/6": "83.333333%",
      },
      gridTemplateColumns: {
        'responsive': 'repeat(auto-fit, minmax(240px, 1fr))',
      },
      animation: {
        slideL: "slideL 500ms linear",
        slideR: "slideR 500ms linear",
      },
      keyframes: {
        slideL: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideR: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),

    // require("tailwind-scrollbar"),
    // require("tailwind-scrollbar-hide"),
  ],
};
