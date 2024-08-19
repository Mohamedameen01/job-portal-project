import React from "react";
import { FaTwitter } from "react-icons/fa";
import { CgFacebook } from "react-icons/cg";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function DetailsFooter() {
  return (
    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <div className="md:py-[40px] grid lg:justify-start grid-rows-2">
        <h4 className="text-xs font-bold tracking-wider uppercase">
          Our address
        </h4>
        <p className="text-base font-semibold tracking-wide">
          Sunshine Business park, Floor <br /> No 05A,Sector-94,Ukrine
        </p>
      </div>

      <div className="py-[40px] grid  lg:justify-center grid-rows-2">
        <h4 className="text-xs  font-bold tracking-wider uppercase">
          opening hours
        </h4>

        <p className="text-base font-semibold tracking-wider">
          Monday - Saturday <br /> 11:00 AM - 10:00 PM
        </p>
      </div>

      <div className=" lg:py-[40px] grid lg:justify-center grid-rows-2">
        <h4 className="text-xs  font-bold tracking-wider uppercase">Off day</h4>
        <p className="text-base font-semibold tracking-wider">
          Saturday <br />
          11:00 AM - 10:00 PM
        </p>
      </div>

      <div className="py-[30px] md:py-0 lg:py-[40px] grid lg:justify-end grid-rows-2">
        <h4 className="text-xs  font-bold tracking-wider uppercase">
          follow us
        </h4>
        <div className="mt-[14px] md:mt-0 flex gap-2 ">
          <span className="text-lg text-gray-500 hover:text-white cursor-pointer">
            <FaLinkedinIn />
          </span>
          <span className="text-lg text-gray-500 hover:text-white cursor-pointer">
            <FaTwitter />
          </span>
          <span className="text-lg text-gray-500 hover:text-white cursor-pointer">
            <CgFacebook />
          </span>
          <span className="text-lg text-gray-500 hover:text-white cursor-pointer">
            <FaInstagram />
          </span>
        </div>
      </div>
    </div>
  );
}

export default DetailsFooter;
