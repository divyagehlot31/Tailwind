import React from "react";
import Hero_img from "../assets/images/Hero_img.png";
import Scroll from "../assets/images/Scroll.svg";

const Hero = () => {
  return (
    <section className="w-full bg-cover bg-center bg-no-repeat text-center px-4 py-22 bg-gradient-to-b from-transparent via-transparent to-[#E6E6E7]">
      <h1 className=" text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[80px] font-jersey font-[400] text-primary leading-tight">
        <span className="text-secondary">CAPTIVATE</span> YOUR AUDIENCE
        <br />
        WITH OUR WHITELABEL SOLUTION
      </h1>

      <button className="mt-8 border-2 text-[16px] sm:text-[20px] border-primary text-primary font-semibold px-6 py-3 rounded-md shadow-custom hover:bg-primary hover:text-white transition">
        REQUEST A DEMO
      </button>

      <div className="mt-12 flex justify-center">
        <img src={Hero_img} alt="Hero img" className="max-w-full h-auto" />
      </div>
      <div className="mt-8 flex flex-col items-center ">
        <p className="text-[20px] tracking-widest font-semibold text-primary">
          SCROLL
        </p>
        <img src={Scroll} alt="Scroll-icon" className="my-4 w-8 h-8 transition" />
      </div>


    </section>
  );
};

export default Hero;

