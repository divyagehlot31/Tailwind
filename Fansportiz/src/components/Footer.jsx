import React from "react";
import Logo from "../assets/images/logo.svg"; // Local logo
import FacebookIcon from "../assets/images/fb.svg";
import LinkedInIcon from "../assets/images/in.svg";
import YouTubeIcon from "../assets/images/yt.svg";
import TwitterIcon from "../assets/images/tw.svg";
import pdf from "../assets/images/pdf.svg";
import Ylogo from "../assets/images/Ylogo.svg";

const Footer = () => {
  return (
    <footer className="bg-white w-full pt-20">

      <div className="max-w-[1319px] mx-auto px-4 flex flex-col md:flex-row justify-between items-start gap-10">

        <div className="flex items-start gap-4">
          <img src={Logo} alt="FanSportiz" className="w-[110px] h-[132px]" />
          <div className="max-w-[400px] pt-5">
            <p className="text-[20px] text-gray font-semibold">
              FanSportiz{" "}
              <span className="text-gray font-medium">
                is a fantasy sports platform delivering fun and thrilling
                experiences to your customers.
              </span>
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-4">
          <a className="font-bold text-[24px]  text-primary mb-2 cursor-pointer hover:text-red">
            Quick links
          </a>
            <a href="#" className="font-bold text-[24px] text-primary mb-2 cursor-pointer hover:text-red">Home</a>
            <a href="#" className="font-bold text-[24px]  text-primary mb-2 cursor-pointer hover:text-red">Plans</a>
            <a href="#" className="font-bold text-[24px]  text-primary mb-2 cursor-pointer hover:text-red">Contact</a>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-[24px] leading-[36px] text-primary mb-2">
            Connect with Us
          </h4>
          <div className="flex gap-6 mb-6">
            <a href="#">
              <img src={FacebookIcon} alt="Facebook" className="w-8 h-8" />
            </a>
            <a href="#">
              <img src={LinkedInIcon} alt="LinkedIn" className="w-8 h-8" />
            </a>
            <a href="#">
              <img src={YouTubeIcon} alt="YouTube" className="w-8 h-8" />
            </a>
            <a href="#">
              <img src={TwitterIcon} alt="Twitter" className="w-8 h-8" />
            </a>
          </div>
         <button className="flex items-center gap-4 border-[2px] border-b5 px-6 py-3 rounded-2xl hover:bg-gray-100">
  <img src={pdf} alt="PDF" className="w-[64px] h-[64px]" />
  <div className="text-left">
    <p className="font-medium text-[20px] leading-[30px] text-primary">
      Download Complete
    </p>
    <p className="font-bold text-[20px] leading-[30px] text-primary">
      Presentation
    </p>
  </div>
</button>

        </div>
      </div>

      <div className="mt-20 w-full h-[2px] bg-gradient-to-r from-transparent via-[#E6E6E7] to-transparent"></div>

      <div className="w-full py-4 mt-2">
        <div className="max-w-[1315px] mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-[16px] text-primary">
          <p className="flex items-center gap-1 font-semibold text-[18px]">
            © Fansportiz, 2021 Powered By
            <img src={Ylogo} alt="Yudiz Logo" className="w-[80px] h-auto" />
          </p>

          <div className="flex items-center flex-col sm:flex-row  space-x-4 mt-2 md:mt-0 text-[16px]">
            <a href="" className="text-primary font-medium hover:text-red capitalize">
              Terms & Conditions <span className="text-red w-[2]">/</span>
            </a>
            
            <a href="" className="text-primary font-medium hover:text-red capitalize">
              Privacy Policy <span className="text-red w-[2]">/</span>
            </a>
           
            <a href="" className="text-primary font-medium hover:text-red capitalize">
              Disclaimer  
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
