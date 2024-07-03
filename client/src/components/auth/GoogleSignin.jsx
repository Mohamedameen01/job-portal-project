import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { IoLogoGoogle } from "react-icons/io";
import { googleSignin, resetAuthSuccess } from "../../redux/authSlice";

function GoogleSignin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const auth = useSelector((state) => state.userAuth);

  const googleLogin = useGoogleLogin({
    onSuccess: async (codeResponse) => {
      const userInfo = await axios
        .get("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: { Authorization: `Bearer ${codeResponse.access_token}` },
        })
        .then((res) => res.data);

      dispatch(googleSignin(userInfo));
    },
    onError: (error) => {
      toast.error("Google Authentication Failed");
    },
  });

  useEffect(() => {
    if (auth.success) {
      const timer = setTimeout(() => {
        dispatch(resetAuthSuccess());
        // navigate("/");
      }, 2000);
    }
  }, [auth, navigate]);

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
