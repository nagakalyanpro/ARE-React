import React, { useState, useEffect } from "react";

const url =
  "http://localhost:8080/reportees?managerID=6135f9cbf0c4b2cfd5db80fc";

function Hero() {
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

  const newJobs = jobs.map((job) => {
    const { username } = job;
    return (
      <section>
        <div>
          <p className="ms-1 mb-1 fw-bold text-center">{username}</p>
        </div>
      </section>
    );
  });
  return <div>{newJobs}</div>;
}

export default Hero;
