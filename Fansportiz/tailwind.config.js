/** @type {import('tailwindcss').Config} */

const Hero_bg = "url('/src/assets/images/Hero_bg.png')";
const Offer_bg = "url('/src/assets/images/offers_bg.jpg')";
const cont_bg = "url('/src/assets/images/Contact1_bg.png')";
const cont2_bg = "url('/src/assets/images/Contact2_bg.png')";
const Service_bg = "url('/src/assets/images/Serve_bg.jpg')";


const faqs_bg = "url('/src/assets/images/Faq_bg.png')";
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
      'b3':'#B8B8B8',
      'gray':" #707070",
      'b4':"#C7C7C7",
      'b5':"#E2E2E2",
    },
     boxShadow: {
        'custom': '0px 4px 8px 0px #0000001A',
      },
      backgroundImage: {
        'hero-bg': Hero_bg,
        'offerings-bg': Offer_bg,
       'contact1-bg': cont_bg,
              'contact2-bg': cont2_bg,

       'faq-bg' : faqs_bg,
       'slider-bg' :Service_bg,
      },
      
    },
   
  },
  plugins: [
      
  ],
};
