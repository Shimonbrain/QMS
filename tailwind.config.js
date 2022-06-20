module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {     
           "accent": "green",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}