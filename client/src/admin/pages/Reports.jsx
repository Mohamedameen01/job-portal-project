import React from "react";
import { ReportList } from "../../components";

function Reports() {
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
        <ReportList key={item} title={item} />
      ))}
    </div>
  );
}

export default Reports;
