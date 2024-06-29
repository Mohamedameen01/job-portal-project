import React from "react";
import { useDispatch } from "react-redux";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

import { IoLogoGoogle } from "react-icons/io";
import { employeeGoogleSignin } from "../../redux/employeeSlice";

function GoogleSignin() {
  const dispatch = useDispatch();

  const googleLogin = useGoogleLogin({
    onSuccess: async (codeResponse) => {
      const userInfo = await axios
        .get("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: { Authorization: `Bearer ${codeResponse.access_token}` },
        })
        .then((res) => res.data);

      dispatch(employeeGoogleSignin(userInfo));
    },
    onError: (error) => console.log("Google Failed", error),
  });
  return (
    <div
      onClick={() => googleLogin()}
      className="truncate text-blue-600 flex items-center gap-2 border-1 border-blue-600 rounded-md px-2 py-3  cursor-pointer hover:bg-blue-600 hover:text-white  hover:scale-105 "
    >
      <div>
        <IoLogoGoogle />
      </div>
      <p className=" text-sm font-medium">Sign In with Google</p>
    </div>
  );
}

export default GoogleSignin;
