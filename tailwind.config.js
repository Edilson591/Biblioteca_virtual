/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".scrollbar-thin": {
          scrollbarWidth: "thin",
          scrollbarColor: "rgb(120 113 108) transparent",
        },
        ".scrollbar-webkit": {
          "&::-webkit-scrollbar": {
            width: "6px",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "transparent !important",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgb(31 41 55)",
            borderRadius: "20px",
            border: "1px solid white",
          },
          "&::-webkit-scrollbar-button": {
            display: "none", 
          },
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    }
  ],
};
