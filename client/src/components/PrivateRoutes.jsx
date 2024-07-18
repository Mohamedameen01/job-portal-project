import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function PrivateRoutes() {
  const local = localStorage.getItem("USER_LOCAL");
  const { token, role } = local
    ? JSON.parse(local)
    : { token: null, role: null };
  const navigate = useNavigate();

  useEffect(() => {
    if (!token && role) {
      navigate("/");
    } else if (token && role === "Employee") {
      navigate("/employee");
    } else if (token && role === "Employer") {
      console.log("Vannittund.");
      navigate("/employer");
    } else if (token) {
      navigate("/auth/role-selection");
    } else if (role) {
      navigate("/auth/signin");
    }
  }, [token, role]);
  return null;
}

export default PrivateRoutes;
