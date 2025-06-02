import React from "react";
import { Disclosure ,DisclosureButton, DisclosurePanel } from "@headlessui/react";
import queImg from "../assets/images/Que.png";
import triangleImg from "../assets/images/Triangle.png";
import { faqData } from "../constant/const";
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'


const Faq = () => {
  return (
    <section className="relative bg-faq-bg bg-cover bg-center py-20 px-4">
      <img src={triangleImg} alt="Triangle" className="absolute bottom-0 left-0 w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] md:w-[90px] md:h-[100px] lg:w-[119px] lg:h-[121px]" style={{ pointerEvents: "none" }} />
      <img src={queImg} alt="Question Icon" className="absolute top-0 right-0 w-[70px] h-[110px] sm:w-[90px] sm:h-[100px] md:w-[120px] md:h-[180px] lg:w-[196px] lg:h-[200px] xl:h-[280px] mr-4 sm:mr-6 md:mr-8" style={{ pointerEvents: "none" }} />

      <div className="max-w-[1096px] mx-auto text-center px-2 sm:px-4">
        <h2 className="text-[32px] sm:text-[40px] md:text-[64px] font-[400] text-primary uppercase font-jersey">FAQ</h2>
        <div className="w-[80px] sm:w-[120px] h-[4px] bg-red mx-auto mt-2 mb-8 sm:mb-10" />

        <div className="space-y-4 w-full">
          {faqData.map((item, index) => (
            <Disclosure key={index} as="div" className="w-full bg-white text-left rounded-[7px] border border-b4 overflow-hidden">
              {({ open }) => (
                <>
                  <DisclosureButton className="w-full text-left px-4 sm:px-6 py-3 sm:py-4 text-primary text-[18px] sm:text-[20px] font-medium flex justify-between items-center">
                    <span>{index + 1}. {item.question}</span>
                    {/* <svg
                      className={`w-4 h-4 transform transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg> */}
                                <ChevronDownIcon className={clsx('w-5', open && 'rotate-180')} />

                  </DisclosureButton>
                  <DisclosurePanel className="px-4 sm:px-6 pb-4 text-[16px] sm:text-[18px] text-gray font-medium leading-relaxed">
                    <div className="w-full h-[1px] bg-b4 mb-3" />
                    {item.answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
