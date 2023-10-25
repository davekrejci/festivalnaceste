module.exports = {
  //...
  plugins: [
    require('@tailwindcss/line-clamp'),
    require("daisyui"),
    require('flowbite/plugin')
  ],
  content: [
    "./node_modules/flowbite/**/*.{js,ts}"
  ],
  theme: {
    extend: {
      backdropBrightness: {
        25: '.25'
      },
    },
  },
  daisyui: {
    themes: [{
      mytheme: {
        primary: "#F97316",
        secondary: "#f6d860",
        accent: "#37cdbe",
        neutral: "#3d4451",
        "base-100": "#2A1314",
      },
    }, ],
  },
}