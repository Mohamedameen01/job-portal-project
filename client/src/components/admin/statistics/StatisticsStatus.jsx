import React from "react";
import { GrOrganization } from "react-icons/gr";
import { FiUsers } from "react-icons/fi";
import { MdOutlineWorkOutline } from "react-icons/md";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import StatusBox from "../../job-portal/StatusBox";

function StatisticsStatus() {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
      <StatusBox
        text={"Jobs"}
        textColor={"blue-500"}
        bgColor={"blue-100"}
        count={"250k+"}
        icon={<MdOutlineWorkOutline />}
      />
      <StatusBox
        text={"Companies"}
        textColor={"blue-500"}
        bgColor={"blue-100"}
        count={"25k+"}
        icon={<GrOrganization />}
      />
      <StatusBox
        text={"Users"}
        textColor={"blue-500"}
        bgColor={"blue-100"}
        count={"100k+"}
        icon={<FiUsers />}
      />
      <StatusBox
        text={"Subscribers"}
        textColor={"blue-500"}
        bgColor={"blue-100"}
        count={"50k+"}
        icon={<MdOutlineWorkspacePremium />}
      />
    </div>
  );
}

export default StatisticsStatus;
