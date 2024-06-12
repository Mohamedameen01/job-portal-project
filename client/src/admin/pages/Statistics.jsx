import React from "react";
import { useOutletContext } from "react-router-dom";
import { StatisticsStatus, StatusGraph } from "../../components";
import { jobStatusData, subscriberStatusData } from "../../utils/graph-data";

function Statistics() {
  const { showSideBar } = useOutletContext();

  return (
    <div className={`mx-3  ${showSideBar ? "col-span-5" : "col-span-11"}`}>
      <StatisticsStatus />
      <div className="my-3 mt-5">
        <h1 className="font-medium text-lg mb-6">Job Staus Graph</h1>
        <StatusGraph data={jobStatusData} />
      </div>
      <div className="my-3 mt-5">
        <h1 className="font-medium text-lg mb-6">Subscriber Staus Graph</h1>
        <StatusGraph data={subscriberStatusData} />
      </div>
    </div>
  );
}

export default Statistics;
