"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../assets/images/Logo.svg";

const navigation = [
  { name: "Home", href: "#" },
  { name: "Fantasy sports", href: "#" },
  { name: "Features", href: "#" },
  { name: "Blog", href: "#" },
  { name: "Contact us", href: "#" },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white sticky top-0 ">
      <header className="inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className=" bg-white flex items-center justify-between p-2 lg:px-8"
        >
          <div className="flex items-center">
            <a
              href="#"
              className="block" 
            //    className="-m-1.5 p-1.5"
            >
              {/* <span>Your Company</span> */}
              <img
                alt=""
                src={Logo}
                className="xl:h-[118px] xl:w-[99px] lg:h-[100px] lg:w-[77px] md:h-[80px] md:w-[60px] h-[60px] w-[40px]"
                // className="h-8 w-auto"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          {/* <div className="hidden lg:flex lg:gap-x-12"> */}
            <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                // className="text-sm/6 font-semibold text-gray-900"
                className=" lg:text-[15px] xl:text-[22px] leading-[36px] font-[600] text-primary capitalize font-inter"
              >
                {item.name}
              </a>
            ))}
            {/* </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end"> */}
            <a
              href="#"
              className="text-white bg-primary font-[700] uppercase text-[22px] px-10 py-4 rounded shadow-md font-inter"

              // className="text-sm/6 font-semibold text-gray-900"
            >
              Start a Project
              {/* <span aria-hidden="true">&rarr;</span> */}
            </a>
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src={Logo}
                //   src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                      Start a Project
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </div>
  );
}
