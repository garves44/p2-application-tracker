import React, { useEffect, useState } from "react";
import API from "../utils/API";
import ModalEl from "../components/ModalEl";
import DnD from "../components/DnD";
import JobCard from "../components/JobCard";

const Jobs = () => {
  const [myJobs, setMyJobs] = useState([]);
  const [reload, setReload] = useState(false);

  const loadMyJobs = async () => {
    console.log("loadMyJobs");
    let JobsResponse = await API.getUserJobs();
    let { status, statusText, data } = JobsResponse;

    let j = [];
    if (status === 200) {
      data.map(({ job_name }) => {
        j.push(job_name);
      });

      setMyJobs(j);
    }

    console.log("Jobs", Jobs);
  };

  useEffect(() => {
    loadMyJobs();
  }, [reload]);

  return (
    <div>
      <ModalEl reload_jobs={reload} set_reload={setReload} />
      <DnD jobs={myJobs}></DnD>
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
