import React from 'react';
import { platformex } from '../constant/const';

import img1 from '../assets/images/Ball.png'
import img2 from '../assets/images/Dot1.png';
import img3 from '../assets/images/Dot2.png';
import img4 from '../assets/images/Batsman.png';

const Platform = () => {
  return (
    <section className="bg-[#F5F5F5] py-20 px-4 relative overflow-hidden">

      <img
        src={img1}
        alt="bg1"
        className="absolute w-[284px] h-[322px] top-[0px] left-[0px]"
      />

      <img
        src={img2}
        alt="bg2"
        className="absolute w-[426px] h-[414px] top-[0px] right-[0px]"
      />

      <img
        src={img3}
        alt="bg3"
        className="absolute w-[426px] h-[414px] bottom-[0px] left-[0px]"
      />

      <img
        src={img4}
        alt="bg4"
        className="absolute z-40 w-[270px] h-[284px] bottom-[0px] right-[0px]"
      />

      <div className="max-w-[1300] mx-auto text-center">
        <h2 className="md:text-[64px] text-5xl font-[400] text-primary font-jersey uppercase">
          PLATFORM EXCLUSIVITY
        </h2>
        <div className="w-[120px] h-1 bg-red mt-4 mx-auto" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 text-left relative z-10">
          {platformex.map((feature, index) => (
            <div
              key={index}
              className="border border-b3 p-6 bg-white flex items-start gap-4"
            >
              <img src={feature.icon} alt="icon" className="w-14 h-14 object-contain" />
              <div>
                <h3 className="text-[32px] font-bold text-primary">{feature.title}</h3>
                <p className="mt-2 text-[18px] font-[500] text-ternary">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Platform;
