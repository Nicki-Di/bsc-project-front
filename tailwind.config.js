/** @type {import("tailwindcss").Config} */
module.exports = {
  safelist: [
    {
      pattern:
        /lg:flex-row-reverse|(bg|text)-(primary|secondary|neutral|success|error|caution)-(0|25|50|100|200|300|400|500|600|700|800|900|text|object|bg|white)/,
    },
  ],
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          25: "#F0F5FF",
          50: "#E0EBFF",
          200: "#BFD5FF",
          400: "#5992FF",
          500: "#1E6DFA",
          600: "#0051E8",
          700: "#0045C8",
          800: "#0045C8",
          900: "#001743",
        },
        secondary: {
          50: "#FFF8E1",
          700: "#FFD438",
          800: "#FDC50D",
          900: "#F5BC00",
        },
        neutral: {
          white: "#FFF",
          heading: "#030D1F",
          highEmphasis: "#030D1F",
          lowEmphasis: "#81868F",
          whiteLiac: "#E0E0E2",
          lightGrey: "#F7F8FA",
        },
        success: {
          text: "#05AB4A",
          object: "#04C855",
          background: "#E4FDEE",
        },
        error: {
          text: "#D60637",
          object: "#EC0B40",
          background: "#FEEAEE",
        },
        caution: {
          text: "#F29D03",
          object: "#FDAE1E",
          background: "#FEF5E5",
        },
      },
    },
  },
  plugins: [],
};
