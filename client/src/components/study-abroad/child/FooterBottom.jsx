import React from "react";

function FooterBottom() {
  return (
    <div className="grid gap-4 md:flex md:justify-between">
      <h3 className="text-sm md:text-base xl:text-lg text-center md:text-start font-medium tracking-wide">
        Copyright © 2024 e.visa.
        <span className="ps-2 text-gray-400">All rights reserved.</span>
      </h3>
      <div className="flex justify-center md:justify-normal gap-[20px] xl:gap-[55px]">
        <h4 className="text-sm md:text-base xl:text-lg text-gray-400 font-medium">
          Privacy Policy
        </h4>
        <h4 className="text-sm md:text-base xl:text-lg text-gray-400 font-medium">
          Cookies
        </h4>
      </div>
    </div>
  );
}

export default FooterBottom;
