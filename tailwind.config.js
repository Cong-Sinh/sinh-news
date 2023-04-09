/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary0: "#F1F8FF",
        primary1: "#E4F1FF",
        primary2: "#BEDCFF  ",
        primary3: "#8EB4FF",
        primary4: "#4F86FF",
        primary5: "#366FEB",
        primary6: "#104FD9",

        secondary0: "#FFF2ED",
        secondary1: "#FF9F80",
        secondary2: "#FB803C",
        secondary3: "#E56833",

        grey0: "#ECECEC",
        grey1: "#DDDDDD",
        grey2: "#D1D1D1",
        grey3: "#B0B0B0",
        grey4: "#9A9A9A",
        grey5: "#878787",
        grey6: "#717171",
        grey7: "#646464",
        grey8: "#343434",

        green0: "#EFFEE9",
        green1: "#C9F2C3",
        green2: "#00D623",
        green3: "#08A822",

        yellow0: "#FFF7E1",
        yellow1: "#FAD49B",
        yellow2: "#FFB800",
        yellow3: "#F3960A",

        red0: "#FFF0ED",
        red1: "#FFD2CF",
        red2: "#FF6D64",
        red3: "#E35B47",

        purple0: "#F4F2FF",
        purple1: "#E2DEF7",
        purple2: "#104FD9",
        purple3: "#7163CB",

        background0: "#F7F7F7",
        background1: "#F2F3F5",
        background2: "#F6F8FB",
        background3: "#ECF0F6",
        background4: "#343434",
        background5: "#104FD9",
        background6: "#f6f6f6",

        fff: "#fff",
      },

      fontSize: {
        heading1: "48px",
        heading2: "36px",
        heading4: "28px",
        heading5: "24px",
        heading6: "20px",
        heading7: "18px",
        Base: "16px",
        M: "14px",
        SM: "13px",
        S: "12px",
      },
      fontFamily: {
        font: "'Inter', sans-serif",
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],

};
