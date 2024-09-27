import React, { useEffect, useState } from 'react'
import { CompaniesSection, CompaniesSideBar, CompaniesSideSection } from '../../../../components/job-portal/employer/companies';
import { useDispatch } from 'react-redux';
import { getOtherCompanies } from '../../../../redux/employerSlice';

function EmployerCompanies() {
  const [toggleJobSection, setToggleJobSection] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOtherCompanies());
  }, [dispatch]);

  return (
    <div className="max-w-[1440px] py-8 mx-auto px-7 grid lg:grid-cols-4">
      <CompaniesSideSection />
      <CompaniesSideBar
        toggleValue={toggleJobSection}
        setToggleValue={setToggleJobSection}
      />
      <CompaniesSection
        toggleValue={toggleJobSection}
        setToggleValue={setToggleJobSection}
      />
    </div>
  );
}

export default EmployerCompanies