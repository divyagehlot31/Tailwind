import React from "react";
import arrow from "../assets/images/arrow.png";
import Button1 from "../assets/ui/Button1";

const Contact1 = () => {
  return (
    <section className="bg-contact1-bg bg-cover bg-center py-20 px-4 text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-6">
        <div className="max-w-[645px]">
          <h2 className="font-jersey text-white font-[400] text-[64px] leading-[70px] text-center md:text-left uppercase">
            Be a Part of the Action!
          </h2>

          <div className="w-[120px] h-[4px] bg-red mt-[24px] mx-auto md:mx-0" />

          <p className="font-inter text-white font-[400] text-[24px] mt-[20px] text-center md:text-left">
            Let’s Create Something Awesome
          </p>
        </div>

        <div className="flex flex-row items-center gap-4 md:mt-[48px] w-full md:w-auto">
          <img src={arrow} alt="arrow" className="w-[104px] h-[52px]" />
          {/* <button className="bg-white text-blue-900 font-inter font-[600] text-[20px] uppercase rounded-[4px] px-[40px] py-[24px] hover:bg-gray-100">
            TALK WITH US
          </button> */}
          {<Button1/>}
        </div>
      </div>
    </section>
  );
};

export default Contact1;
