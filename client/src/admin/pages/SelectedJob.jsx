import React, { useEffect, useState } from "react";
import { JobDetailsBody, JobDetailsHeader } from "../../components";
import { useParams } from "react-router-dom";
import { jobData } from "../../utils/table-datas";

function SelectedJob() {
  const { id } = useParams();
  const [jobDetails, setJobDetails] = useState();

  useEffect(() => {
    const fethData = async () => {
      const objId = parseInt(id, 10);

      if (!isNaN(objId)) {
        const data = jobData.find((item) => item.id === objId);
        setJobDetails(data || null);
      } else {
        console.log("Invalid Params Id");
      }
    };
    fethData();
  }, [id]);
  return (
    <div className="mx-5">
      <JobDetailsHeader jobInfo={jobDetails} />
      <JobDetailsBody jobInfo={jobDetails} />
    </div>
  );
}

export default SelectedJob;
