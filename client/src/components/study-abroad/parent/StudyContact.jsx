import React from "react";

import StudyHead from "../child/StudyHead";
import contactImg from "/assets/images/study-abroad/study-contact.jpg";
import ContactForm from "../child/ContactForm";
import StudyFooter from "../child/StudyFooter";

function StudyContact() {
  return (
    <div className="relative bg-customBgColor">
      <div className="max-w-[1480px] mx-auto px-[10px] sm:px-[40px] md:px-[50px] pt-10 ">
        <div className="relative grid lg:grid-cols-2 bg-black z-20 ">
          <div className="grid gap-4 px-[20px] sm:px-[40px] md:px-[50px] py-5">
            <StudyHead text={"contact"} color={"white"} />
            <h1 className="text-lg sm:text-xl md:text-2xl font-black text-white z-10">
              If You Have Any Question, Feel Free to <br /> Contact With Us.
            </h1>
            <ContactForm />
          </div>

          <div className="hidden lg:block">
            <img
              src={contactImg}
              alt="graduated-boy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="relative">
        <StudyFooter />
      </div>
    </div>
  );
}

export default StudyContact;
