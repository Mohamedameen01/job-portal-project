import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";
import { setUserLocalLogout } from "../redux/authSlice";

export const isExpireToken = (token, dispatch) => {
  try {
    if (!token) {
      return null;
    }
    const decodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000;

    if (decodedToken.exp < currentTime) {
      dispatch(setUserLocalLogout());
      toast.info("Token Expired, Sign in Again");
    }
  } catch (error) {
    console.log(error);
    toast.error("Some error occured");
  }
};
