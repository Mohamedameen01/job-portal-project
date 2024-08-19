import React from "react";
import { Link, useLocation } from "react-router-dom";

import studyInnerHead from "/assets/images/study-abroad/study-inner-page.jpg";
import ribben from "/assets/images/study-abroad/ribben.png"

function InnerHeader() {
  const { state } = useLocation();
  
  return (
      <div
        className="w-full h-[80vh] bg-cover bg-top bg-no-repeat"
        style={{ backgroundImage: `url(${studyInnerHead})` }}
      >
        <div className="relative max-w-[1480px] h-full mx-auto px-[10px] sm:px-[40px] md:px-[60px] flex flex-col gap-4 justify-center " >
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black capitalize">{state?.title || "Default Title"}</h1>
          <div className="w-fit px-4 py-3 bg-white flex items-center gap-3 text-sm font-semibold">
            <Link to={"/study-abroad"} className="hover:text-customViolet cursor-pointer">Home</Link>
            <span className="text-slate-500">/</span>
            <h4 className="text-slate-500 capitalize">{state?.currentPage || "Default Page"}</h4>
          </div>
          <div className="hidden xl:block absolute -left-12">
            <img src={ribben} />
          </div>
        </div>
      </div>
  );
}

export default InnerHeader;
