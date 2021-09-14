import React, { useState, useEffect } from "react";

const url =
  "http://localhost:8080/reporteeswithmatchingrole?jobRole=Developer&loggedInManagerID=6135fbfcfea96f43f4aabeed";

function UserName() {
  const [jobs, setJobs] = useState([]);

  const fetchData = async () => {
    const response = await fetch(url);
    const jobs = await response.json();
    setJobs(jobs);
    console.log(jobs);
  };

  useEffect(() => {
    fetchData();
  }, []);

  jobs.map((job) => {
    return (
      <section>
        <div>
          {jobs[0]}
          {jobs[1]}
        </div>
      </section>
    );
  });
  return (
    <section>
      <div>
        <p className="ms-1 mb-1 fw-bold text-center">{jobs[0]}</p>
        <p className="ms-1 mb-1 fw-bold text-center">{jobs[1]}</p>
      </div>
    </section>
  );
}

export default UserName;
