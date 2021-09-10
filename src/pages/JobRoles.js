import React, { useState, useEffect } from "react";

const url =
  "http://localhost:8080/getGroupingValues?criteriaName=Job%20Title&loggedInManagerID=6135f9cbf0c4b2cfd5db80fc";

function JobRoles() {
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
        <div>{jobs[0]}</div>
        <div>{jobs[1]}</div>
        <div>{jobs[2]}</div>
        <div>{jobs[3]}</div>
      </section>
    );
  });
  return (
    <section>
      <div>
        <div className="row flex-grow">
          <div className="col-md-6 col-lg-6 grid-margin">
            <div className="card card-square">
              <div className="card-body card-square p-0">
                <div className="claims-text">
                  <p>Claims Processor Medical Claims</p>
                  <p>Claims Processors managing Facts Claims</p>
                  <p>Mr Manager</p>
                  <p className="job-title pt-2">JOB TITLE</p>
                  <p className="title">{jobs[0]}</p>
                </div>
                <div className="card-stripe-blue">
                  <ul>
                    <li>Users</li>
                    <li>Common Roles</li>
                    <li>Smart Suggestions</li>
                  </ul>
                </div>

                <div className="card-stripe-white">
                  <ul>
                    <li>12</li>
                    <li>5-12%</li>
                    <li>3-8%</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row flex-grow">
          <div className="col-md-6 col-lg-6 grid-margin">
            <div className="card card-square">
              <div className="card-body card-square p-0">
                <div className="claims-text">
                  <p>Claims Processor Medical Claims</p>
                  <p>Claims Processors managing Facts Claims</p>
                  <p>Mr Manager</p>
                  <p className="job-title pt-2">JOB TITLE</p>
                  <p className="title">{jobs[1]}</p>
                </div>
                <div className="card-stripe-blue">
                  <ul>
                    <li>Users</li>
                    <li>Common Roles</li>
                    <li>Smart Suggestions</li>
                  </ul>
                </div>

                <div className="card-stripe-white">
                  <ul>
                    <li>12</li>
                    <li>5-12%</li>
                    <li>3-8%</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row flex-grow">
          <div className="col-md-6 col-lg-6 grid-margin">
            <div className="card card-square">
              <div className="card-body card-square p-0">
                <div className="claims-text">
                  <p>Claims Processor Medical Claims</p>
                  <p>Claims Processors managing Facts Claims</p>
                  <p>Mr Manager</p>
                  <p className="job-title pt-2">JOB TITLE</p>
                  <p className="title">{jobs[2]}</p>
                </div>
                <div className="card-stripe-blue">
                  <ul>
                    <li>Users</li>
                    <li>Common Roles</li>
                    <li>Smart Suggestions</li>
                  </ul>
                </div>

                <div className="card-stripe-white">
                  <ul>
                    <li>12</li>
                    <li>5-12%</li>
                    <li>3-8%</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row flex-grow">
          <div className="col-md-6 col-lg-6 grid-margin">
            <div className="card card-square">
              <div className="card-body card-square p-0">
                <div className="claims-text">
                  <p>Claims Processor Medical Claims</p>
                  <p>Claims Processors managing Facts Claims</p>
                  <p>Mr Manager</p>
                  <p className="job-title pt-2">JOB TITLE</p>
                  <p className="title">{jobs[3]}</p>
                </div>
                <div className="card-stripe-blue">
                  <ul>
                    <li>Users</li>
                    <li>Common Roles</li>
                    <li>Smart Suggestions</li>
                  </ul>
                </div>

                <div className="card-stripe-white">
                  <ul>
                    <li>12</li>
                    <li>5-12%</li>
                    <li>3-8%</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default JobRoles;
