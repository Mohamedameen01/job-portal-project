import React from "react";
  import { FaArrowRight } from "react-icons/fa6";
  import { GoPerson } from "react-icons/go";
  import { MdOutlineAlternateEmail } from "react-icons/md";
  import { FiPhoneCall } from "react-icons/fi";
  import { LuMessagesSquare } from "react-icons/lu";

function ContactForm() {
  return (
    <form
      action=""
      className="w-full mt-3 grid gap-[16px] sm:gap-[30px] md:gap-[40px] "
    >
      <div className="relative  flex items-center">
        <span className="absolute left-3 text-xl text-white">
          <GoPerson />
        </span>
        <input
          type="text"
          name=""
          id=""
          placeholder="Goladria Gomez"
          className="w-full p-4 ps-5 bg-[#252525] text-white tracking-wider placeholder:text-white focus:outline-none "
        />
      </div>

      <div className="relative flex items-center">
        <span className="absolute left-3 text-xl text-white">
          <MdOutlineAlternateEmail />
        </span>
        <input
          type="text"
          name=""
          id=""
          placeholder="e.visa@services.com"
          className="w-full p-4 ps-5 bg-[#252525] text-white tracking-wider placeholder:text-white focus:outline-none"
        />
      </div>

      <div className="relative flex items-center">
        <span className="absolute left-3 text-xl text-white">
          <FiPhoneCall />
        </span>
        <input
          type="text"
          name=""
          id=""
          placeholder="+91 9988776655"
          className="w-full p-4 ps-5 bg-[#252525] text-white tracking-wider placeholder:text-white focus:outline-none"
        />
      </div>

      <div className="relative flex ">
        <span className="absolute top-6 left-3 text-xl text-white">
          <LuMessagesSquare />
        </span>
        <textarea
          name=""
          id=""
          rows={5}
          placeholder="Write Your Message..."
          className="w-full p-4 ps-5 bg-[#252525] text-white tracking-wider placeholder:text-white focus:outline-none rounded-lg"
        ></textarea>
      </div>

      <button
        className="group w-fit h-fit px-4 py-3 flex items-center gap-3 bg-gradient-to-r from-red-600 via-orange-600 to-orange-400 hover:from-orange-400  hover:to-red-600 transition-all duration-500 ease-in-out rounded-full"
        type="submit"
      >
        <h1 className="text-base xl:text-lg text-white font-black tracking-wide">
          Send Message
        </h1>
        <span className="w-4 h-4 lg:w-5 lg:h-5 flex items-center bg-white text-black text-sm lg:text-base  font-black rounded-full">
          <FaArrowRight />
        </span>
      </button>
    </form>
  );
}

export default ContactForm;
