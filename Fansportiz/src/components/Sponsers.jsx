import React from "react";
import { logos } from "../constant/const";

const Sponsers = () => {

  return (
    <section className="py-12 bg-white text-center">
      <h2 className="text-[24] md:text-xl font-semibold text-primary mb-8">
        Trusted By
      </h2>
      <div className="flex flex-wrap justify-center gap-6 px-4">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="border border-b1 p-4 w-[246px] h-[118px] flex items-center justify-center shadow-sm hover:shadow-md transition"
          >
            <img src={logo} alt={`Logo ${index + 1}`} className="max-h-full max-w-full object-contain" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sponsers;
