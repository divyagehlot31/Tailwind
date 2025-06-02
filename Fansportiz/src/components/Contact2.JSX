import React from "react";
import dotes from "../assets/images/contact-dots.png";
import Baller from "../assets/images/Baller.png";
import Button1 from "../assets/ui/Button1";

const Contact2 = () => {
  return (
    <section className="bg-contact2-bg bg-cover bg-center py-20 px-4 text-white relative overflow-hidden">
      <img
        src={dotes}
        alt="Dots-bg"
        className="absolute w-[430px] h-[430px] top-[-45px] left-[1450px] hidden xl:block"
      />

      <img
        src={Baller}
        alt="Baller"
        className="absolute w-[132px] h-[240px] top-[110px] left-[1620px] hidden xl:block"
      />

      <div className="max-w-[1207px] mx-auto flex sm:flex-col justify-between lg:flex-row items-start relative z-10">
        <div className="max-w-[690px]">
          <h2 className="font-jersey text-white font-[400] text-[64px] leading-[70px] text-center md:text-left uppercase">
            Start a conversation
          </h2>

          <div className="w-[120px] h-[4px] bg-red mt-[24px] mx-auto md:mx-0" />

          <p className="font-inter text-white font-[400] text-[24px] mt-[20px] text-center md:text-left">
            Play our new interactive adventure game and experience the thrill of
            the chase.
          </p>
        </div>

        {/* <div className="md:mt-[50px] lg:ms-60px"> */}
        <div className="flex md:mt-[50px] ">
          {<Button1 />}
          {/* <button className=" bg-white text-blue-900 font-inter mt-4 font-[600] text-[20px] uppercase rounded-[4px] px-[40px] py-[24px] hover:bg-gray-100">
            TALK WITH US
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default Contact2;
