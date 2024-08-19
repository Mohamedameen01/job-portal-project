import React from "react";

function SectionFooter() {
  return (
    <div className="flex flex-wrap md:justify-center gap-[20px] md:gap-[40px]">
      <h3 className="relative md:text-lg font-semibold tracking-wider cursor-pointer group">
        Our services
        <span className="absolute bottom-0 right-0 w-full h-px bg-white scale-x-0 group-hover:scale-x-100 transition-all duration-500 ease-in-out origin-left"></span>
      </h3>
      <h3 className="relative md:text-lg font-semibold tracking-wider cursor-pointer group">
        About us
        <span className="absolute bottom-0 right-0 w-full h-px bg-white scale-x-0 group-hover:scale-x-100 transition-all duration-500 ease-in-out origin-left"></span>
      </h3>
      <h3 className="relative md:text-lg font-semibold tracking-wider cursor-pointer group">
        How its work
        <span className="absolute bottom-0 right-0 w-full h-px bg-white scale-x-0 group-hover:scale-x-100 transition-all duration-500 ease-in-out origin-left"></span>
      </h3>
      <h3 className="relative md:text-lg font-semibold tracking-wider cursor-pointer group">
        Contact us
        <span className="absolute bottom-0 right-0 w-full h-px bg-white scale-x-0 group-hover:scale-x-100 transition-all duration-500 ease-in-out origin-left"></span>
      </h3>
    </div>
  );
}

export default SectionFooter;
