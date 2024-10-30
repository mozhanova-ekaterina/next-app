import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [
    nextui({
      themes: {
        light: {
          // light theme layout tokens
          colors: {
            primary: {
              DEFAULT: "#C20E4D",
              foreground: "#fff",
            },
            foreground: "#27272a", //text
            secondary: {
              DEFAULT: "#f4f4f5",
              foreground: "#27272a",
            },
            background: "#ffffff",
            success: "#17c964",
            warning: "#f7b750",
          }, // light theme colors
        },
        dark: { // dark theme layout tokens
          colors: {
            primary: {
              DEFAULT: "pink",
              foreground: "gray",
            },
          }, // dark theme colors
        },
      },
    }),
  ],
};
