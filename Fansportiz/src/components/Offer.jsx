import React from "react";
import { offers } from "../constant/const";

const Offer = () => {
  return (
    <section className="bg-offerings-bg py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 bg-white shadow-md rounded overflow-hidden">
        <div className=" flex items-center justify-center text-center p-8 border-r border-b2">
          <div>
            <h2 className="font-jersey font-normal text-[64px] leading-[70px] tracking-[0px] align-middle text-primary text-center">
              OUR <br /> OFFERINGS
            </h2>
            <div className="w-12 h-1 bg-red mt-2 mx-auto" />
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
            <p className="text-ternary text-[500] text-[18px]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Offer;
