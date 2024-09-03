import React, { useEffect, useState } from "react";
import {
  CompanySection,
  CompanySideBar,
  CompanySideSection,
} from "../../../../components/job-portal/employee/companies";
import { useDispatch } from "react-redux";
import { getAllCompanies } from "../../../../redux/employeeSlice";

function HomeCompanies() {
  const [toggleJobSection, setToggleJobSection] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCompanies());
  }, [dispatch]);

  return (
    <div className="max-w-[1440px] py-8 mx-auto px-7 grid lg:grid-cols-4">
      <CompanySideSection />
      <CompanySideBar
        toggleValue={toggleJobSection}
        setToggleValue={setToggleJobSection}
      />
      <CompanySection
        toggleValue={toggleJobSection}
        setToggleValue={setToggleJobSection}
      />
    </div>
  );
}

export default HomeCompanies;
