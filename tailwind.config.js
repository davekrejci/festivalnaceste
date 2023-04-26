module.exports = {
    //...
    plugins: [
      require('@tailwindcss/line-clamp'),
      require("daisyui")
    ],
    daisyui: {
      themes: [
        {
          mytheme: {
            primary: "#F97316",
            secondary: "#f6d860",
            accent: "#37cdbe",
            neutral: "#3d4451",
            "base-100": "#2A1314",
          },
        },
      ],
    },
  }