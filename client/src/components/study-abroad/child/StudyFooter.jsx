import React from "react";
import footerImg from "/assets/images/study-abroad/study-footer.jpg";
import DetailsFooter from "./DetailsFooter";
import SectionFooter from "./SectionFooter";
import FooterBottom from "./FooterBottom";

function StudyFooter() {
  return (
    <div
      className="w-full absolute -top-60 pt-[200px] pb-[100px] object-cover"
      style={{
        backgroundImage: `url(${footerImg})`,
        backgroundPosition: "top",
      }}
    >
      <div className="max-w-[1480px] mx-auto px-[10px] sm:px-[40px] md:px-[50px]  grid gap-5 text-white">
        <DetailsFooter />
        <hr />
        <SectionFooter />
        <FooterBottom />
      </div>
    </div>
  );
}

export default StudyFooter;
