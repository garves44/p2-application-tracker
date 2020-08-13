import React from "react";
import ModalEl from "../components/ModalEl";
import DnD from "../components/DnD";

import JobCard from "../components/JobCard";

const Jobs = () => {
  return (
    <div>
      <ModalEl />
      <DnD></DnD>
      {/* <div className="container">
        <div className="row">
          <div id="need-to-apply">
            Need To Apply
            <JobCard title="Need to Apply" className="col"></JobCard>
          </div>
          <div id="waiting-for-response">
            Waiting for response
            <JobCard title="Waiting for response" className="col"></JobCard>
          </div>
          <div id="interview-scheduled">
            Interview Scheduled
            <JobCard title="Interview Scheduled" className="col"></JobCard>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Jobs;
