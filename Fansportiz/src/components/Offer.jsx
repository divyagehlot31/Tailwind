import React from "react";
import { offers } from "../constant/const";

const Offer = () => {
  return (
    <section className="bg-offerings-bg py-16 px-4">
      <div className="max-w-7xl  mx-auto grid grid-cols-1 md:grid-cols-3 bg-white border border-b2 overflow-hidden">
        <div className="bg-[#F5F5F5] flex items-center  md:justify-center justify-start text-center  p-8 border-r border-b2">
          <div className="md:justify-center justify-start">
            <h2 className="font-jersey font-normal px-[20px] text-[50px] lg:text-[64px] md:text-[44px] leading-[70px] align-middle text-primary text-left">
              OUR OFFERINGS
            </h2>
            <div className="w-[120px] h-1 bg-red mt-2 ml-4 " />
          </div>
        </div>

        {offers.map((item, index) => (
          <div
            key={index}
            className={`p-8 ${index === 0 ? "border-r border-b2" : ""}`}
          >
            <img src={item.icon} alt="icon" className="w-20 h-20 mb-4" />
            <h3 className="text-primary text-[24px] font-bold mb-2">
              {item.title}
            </h3>
            <p className="text-ternary font-[500] text-[18px]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Offer;
