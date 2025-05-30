/** @type {import('tailwindcss').Config} */

const Hero_bg = "url('/src/assets/images/Hero_bg.jpg')";
const Offer_bg = "url('/src/assets/images/offers_bg.jpg')";



export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jersey: ['"Jersey M54"', "sans-serif"],
      },
       colors: {
      'primary': "#042365",
      'secondary' : '#FD0000',
      'b1' : "#D1D1D1",
      'ternary':'#3D3D3D',
      'b2': '#ACAAAA',
      'red' :'#FD0000',
    },
     boxShadow: {
        'custom': '0px 4px 8px 0px #0000001A',
      },
      backgroundImage: {
        'hero-bg': Hero_bg,
        'offerings-bg': Offer_bg,
      
      },
      
    },
   
  },
  plugins: [
      
  ],
};
