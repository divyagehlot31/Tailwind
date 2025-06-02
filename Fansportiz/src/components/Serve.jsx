import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import arrowLeft from "../assets/images/left-arrow.svg";
import arrowRight from "../assets/images/right-arrow.svg";

import { serveData } from "../constant/const";

const Serve = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "60px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "20px",
        },
      },
    ],
  };

  return (
      <div className="bg-slider-bg bg-cover bg-center py-20 relative">

  <div className="max-w-7xl mx-auto px-6 relative"></div>
      <div className="max-w-7xl mx-auto px-6 relative">

        <div className="flex flex-col sm:flex-row justify-between items-center mb-10">
          <div className="text-center sm:text-left mt-5">
            <h2 className="text-5xl sm:text-[64px] leading-tight font-normal text-white font-jersey">
              SPORTS WE SERVE
            </h2>
            <div className="w-[120px] h-1 bg-red mt-4 mx-auto sm:mx-0" />
          </div>

          {/* Custom Arrows */}
          <div className="flex space-x-4 mt-6 sm:mt-0">
            <button
              className="cursor-pointer w-10 h-10 flex items-center justify-center"
              onClick={() => sliderRef.current.slickPrev()}
            >
              <img src={arrowLeft} alt="Prev" className="w-5 h-5" />
            </button>
            <button
              className="cursor-pointer w-10 h-10 flex items-center justify-center"
              onClick={() => sliderRef.current.slickNext()}
            >
              <img src={arrowRight} alt="Next" className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="mt-5">
          <Slider ref={sliderRef} {...settings}>
            {serveData.map((sport, index) => (
              <div key={index} className="px-3">
                <div className="relative pt-8">

                  <div className="absolute bg-white border border-gray-400 rounded-full flex items-center justify-center z-10 w-36 h-16 top-[35px] left-1/2 transform -translate-x-1/2">
                    <img src={sport.icon} alt={sport.title} className="w-10 h-10"/>
                  </div>

                  <div className="bg-white rounded-3xl border border-gray-400 pt-12 pb-6 px-6 mx-auto shadow-sm relative w-full max-w-md h-80 mt-8">
                    <div className="text-center">
                      <div className="inline-block mb-6">
                        <h3 className="text-[32px] leading-tight font-bold text-primary py-1 px-6 rounded-full">
                          {sport.title}
                        </h3>
                      </div>
                      <p className="text-ternary px-2 text-lg leading-7 font-medium">
                        {sport.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Serve;
