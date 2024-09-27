import React, { useEffect } from "react";
import { CompanyProfileForm } from "../../../../../components/job-portal/employer/dashboard";
import { useDispatch } from "react-redux";
import { getAllInfos } from "../../../../../redux/employerSlice";

function CompanyProfile() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllInfos());
  }, []);
  return (
    <>
      <CompanyProfileForm />
    </>
  );
}

export default CompanyProfile;
