import React from "react";
import { MdPhoneAndroid } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function MobileSignin({ history }) {
  const navigate = useNavigate();

  const handleMobileSignin = () => {
    navigate("/sms-form", { state: { from: history } });
  };
  return (
    <div
      className="truncate text-orange-600 flex items-center gap-2 border-1 border-orange-600 rounded-md px-2 py-3 cursor-pointer hover:bg-orange-600 hover:text-white hover:scale-105 "
      onClick={handleMobileSignin}
    >
      <div>
        <MdPhoneAndroid />
      </div>
      <p className=" text-sm font-medium">Sign In with Mobile</p>
    </div>
  );
}

export default MobileSignin;
