import React, { useEffect, useState } from "react";
import { CompanyDetailsBody, CompanyDetailsHeader } from "../../components";
import { useParams } from "react-router-dom";
import { companyData } from "../../utils/table-datas";

function SelectedCompany() {
  const { id } = useParams();
  const [companyDetails, setCompanyDetails] = useState();

  useEffect(() => {
    const fethData = async () => {
      const objId = parseInt(id, 10);

      if (!isNaN(objId)) {
        const data = companyData.find((item) => item.id === objId);
        setCompanyDetails(data || null);
      } else {
        console.error("Inavalid Parameter ID");
      }
    };

    fethData();
  }, [id]);

  return (
    <div className="mx-5">
      <CompanyDetailsHeader companyInfo={companyDetails} />
      <CompanyDetailsBody companyInfo={companyDetails} />
    </div>
  );
}

export default SelectedCompany;
