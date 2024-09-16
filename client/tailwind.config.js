import daisyui from "daisyui";

export default {
    daisyui:{
        themes:['light'],
    },
  content:["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme : {
      extend :{
          colors:{
              primary: "#ffc727",
              dark: "#000000"
          },
          container: {
              center:true,
              padding:{
                  DEFAULT: "1rem",
                  sm: "3rem",
              },
          },
      }
  },
    plugins: [
        daisyui,
    ],

}
