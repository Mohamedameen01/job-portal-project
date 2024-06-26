import React, { useEffect, useState } from "react";
import CompanyOpenJobs from "./CompanyOpenJobs";
import CompanyBoxInfo from "./CompanyBoxInfo";

import { jobDetailsData } from "../../../utils/table-datas";

function CompanyDetailsBody({ companyInfo }) {
  console.log(companyInfo);
  const [openJobs, setOpenJobs] = useState();

  useEffect(() => {
    const fetchOpenJobs = async () => {
      const recruiting = jobDetailsData.filter(
        (item) => item.status === "recruiting"
      );
      setOpenJobs(recruiting);
    };
    fetchOpenJobs();
  }, [jobDetailsData]);

  return (
    <div className="grid grid-cols-3 gap-4 mt-5">
      <div className="col-span-2">
        <h1 className="text-lg font-semibold">About Company</h1>
        <p className="mt-4">
          Moody’s Corporation, often referred to as Moody’s, is an American
          business and financial services company. It is the holding company for
          Moody’s Investors Service (MIS), an American credit rating agency, and
          Moody’s Analytics (MA), an American provider of financial analysis
          software and services. Moody’s was founded by John Moody in 1909 to
          produce manuals of statistics related to stocks and bonds and bond
          ratings. Moody’s was acquired by Dun & Bradstreet in 1962. In 2000,
          Dun & Bradstreet spun off Moody’s Corporation as a separate company
          that was listed on the NYSE under MCO. In 2007, Moody’s Corporation
          was split into two operating divisions, Moody’s Investors Service, the
          rating agency, and Moody’s Analytics, with all of its other products.
        </p>
        <CompanyOpenJobs data={openJobs} />
      </div>
      <CompanyBoxInfo title={companyInfo?.company} />
    </div>
  );
}

export default CompanyDetailsBody;
