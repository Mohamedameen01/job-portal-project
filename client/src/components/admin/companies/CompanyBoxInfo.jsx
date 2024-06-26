import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function CompanyBoxInfo({ title }) {
  return (
    <div className="p-4 bg-[#e3f2fd] h-fit ">
      <div className="flex justify-between">
        <div className="flex flex-col gap-3 font-medium">
          <p>Primay industry :</p>
          <p>Company size :</p>
          <p>Founded in :</p>
          <p>Phone :</p>
          <p>Email :</p>
          <p>Location :</p>
          <p>Social media :</p>
        </div>
        <div className="flex flex-col gap-3 ">
          <p>Softwar</p>
          <p>20-30</p>
          <p>2011</p>
          <p>1234567890</p>
          <p>info@gmail.com</p>
          <p>Calicut, Kerala</p>
          <p className="flex gap-2">
            <FaTwitter />
            <FaInstagram />
          </p>
        </div>
      </div>
      <button className="w-full mt-3 lowercase bg-[#90caf9] text-blue-500 py-3 rounded-md hover:bg-blue-600 hover:text-white">
        www.{title}.com
      </button>
    </div>
  );
}

export default CompanyBoxInfo;
