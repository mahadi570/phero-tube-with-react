/** @type {import('tailwindcss').Config} */
export default {
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#a3f7c0",
        
"secondary": "#70bc1e",
        
"accent": "#d36156",
        
"neutral": "#242d33",
        
"base-100": "#f5f4f6",
        
"info": "#489cef",
        
"success": "#13aa4a",
        
"warning": "#8e760b",
        
"error": "#eb6062",
        },
      },
    ],
  },
  content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
