import React, { useState, useEffect } from "react";

const url =
  "http://localhost:8080/reportees?managerID=6135fa6f348654ad496b83cf";

function TitleReporters() {
  const [jobs, setJobs] = useState([]);

  const fetchData = async () => {
    const response = await fetch(url);
    const jobs = await response.json();
    setJobs(jobs);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const newData = jobs.map((job) => {
    const { username } = job;
    return (
      <div>
        <div>
          <p className="ms-1 mb-1 fw-bold text-center">{username}</p>
        </div>
      </div>
    );
  });
  return <div>{newData}</div>;
}

export default TitleReporters;
