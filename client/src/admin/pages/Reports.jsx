import React from "react";
import { useOutletContext } from "react-router-dom";
import { ReportList } from "../../components";

function Reports() {
  const { showSideBar } = useOutletContext();
  const reportName = [
    "user reports",
    "company reports",
    "job reports",
    "revenue reports",
  ];
  return (
    <div className="mx-3">
      <h1 className="text-lg">Generate Reports</h1>
      {reportName.map((item) => (
        <ReportList title={item} />
      ))}
    </div>
  );
}

export default Reports;
