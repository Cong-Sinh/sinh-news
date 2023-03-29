/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Primary0: "#F1F8FF",
        Primary1: "#E4F1FF",
        Primary2: "#BEDCFF  ",
        Primary3: "#8EB4FF",
        Primary4: "#4F86FF",
        Primary5: "#366FEB",
        Primary6: "#104FD9",

        Secondary0: "#FFF2ED",
        Secondary1: "#FF9F80",
        Secondary2: "#FB803C",
        Secondary3: "#E56833",

        Grey0: "#ECECEC",
        Grey1: "#DDDDDD",
        Grey2: "#D1D1D1",
        Grey3: "#B0B0B0",
        Grey4: "#9A9A9A",
        Grey5: "#878787",
        Grey6: "#717171",
        Grey7: "#646464",
        Grey8: "#343434",

        Green0: "#EFFEE9",
        Green1: "#C9F2C3",
        Green2: "#00D623",
        Green3: "#08A822",

        Yellow0: "#FFF7E1",
        Yellow1: "#FAD49B",
        Yellow2: "#FFB800",
        Yellow3: "#F3960A",

        Red0: "#FFF0ED",
        Red1: "#FFD2CF",
        Red2: "#FF6D64",
        Red3: "#E35B47",

        Purple0: "#F4F2FF",
        Purple1: "#E2DEF7",
        Purple2: "#104FD9",
        Purple3: "#7163CB",

        Background0: "#F7F7F7",
        Background1: "#F2F3F5",
        Background2: "#F6F8FB",
        Background3: "#ECF0F6",
        Background4: "#343434",
        Background5: "#104FD9",

        fff: "#fff",
      },

      fontSize: {
        heading1: "48px",
        heading2: "36px",
        heading4: "28px",
        heading5: "24px",
        heading6: "20px",
        heading7: "18px",
        text1: "16px",
        text2: "14px",
        text3: "13px",
        text4: "12px",
      },
      fontFamily: {
        font: "'Inter', sans-serif",
      },
    },
  },
  plugins: [],
};
