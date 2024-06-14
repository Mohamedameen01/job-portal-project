import React, { useEffect, useState } from "react";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import CompanyOpenJobs from "./CompanyOpenJobs";
import { jobDetailsData } from "../../utils/table-datas";

function CompanyDetailsBody() {
  const [openJobs, setOpenJobs] = useState();
  const [closedJobs, setClosedJobs] = useState();

  useEffect(() => {
    const fetchOpenJobs = () => {
      const recruiting = jobDetailsData.filter(
        (item) => item.status === "recruiting"
      );

      const expired = jobDetailsData.filter(
        (item) => item.status !== "recruiting"
      );

      setOpenJobs(recruiting);
      setClosedJobs(expired);
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
            <p>Calicut, Keral</p>
            <p className="flex gap-2">
              <FaTwitter />
              <FaInstagram />
            </p>
          </div>
        </div>
        <button className="w-full mt-3 bg-[#90caf9] text-blue-500 py-3 rounded-md hover:bg-blue-600 hover:text-white">
          www.voonix.com
        </button>
      </div>
    </div>
  );
}

export default CompanyDetailsBody;
