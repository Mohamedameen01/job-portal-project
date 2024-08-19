import React from "react";
import { IoMailUnreadOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { FaPlus } from "react-icons/fa";

function InnerFooter() {
  const services = [
    "tourist visa",
    "working visa",
    "residential visa",
    "commercial visa",
    "student visa",
  ];
  const countries = ["canda", "australia", "germany", "america", "spain"];
  return (
    <div className="bg-[#edf3f5] pb-5">
      <div className="max-w-[1480px] mx-auto px-[10px] sm:px-[40px] md:px-[60px]">
        <div className="grid lg:grid-cols-2 gap-5">

          <div className="grid gap-3">
            <h5 className="w-full md:w-5/6 text-xl font-black">
              Do you have questions or went more information? Contact us now
            </h5>
            <div className="mt-[20px] md:mt-[30px] lg:mt-[50px] flex items-center gap-3">
              <span className="w-12 h-12 p-2 flex items-center justify-center bg-white text-slate-500 text-xl rounded-full">
                <FiPhoneCall />
              </span>
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold">
                +91590 088 55
              </h3>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-12 h-12 p-2 flex items-center justify-center bg-white text-slate-500 text-xl rounded-full">
                <IoMailUnreadOutline />
              </span>
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold">
                e.visa@gmail.com
              </h3>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="grid lg:justify-end">
              <h4 className="text-lg font-bold">Services</h4>
              <ul className="mt-4 grid gap-3">
                {services.map((item, ind) => (
                  <li key={ind} className="group flex items-center gap-3 cursor-pointer">
                    <span className="text-xs text-slate-400 group-hover:text-green-500 ">
                      <FaPlus />
                    </span>
                    <h6 className="text-base text-slate-500 group-hover:text-black font-semibold capitalize">{item}</h6>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid lg:justify-center">
              <h4 className="text-lg font-bold">Countries</h4>
              <ul className=" mt-4 grid gap-3">
                {countries.map((item, ind) => (
                  <li key={ind} className="group flex items-center gap-3 cursor-pointer">
                    <span className="text-xs text-slate-400 group-hover:text-green-500">
                      <FaPlus />
                    </span>
                    <h6 className="text-base text-slate-500 group-hover:text-black font-semibold capitalize">{item}</h6>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InnerFooter;
