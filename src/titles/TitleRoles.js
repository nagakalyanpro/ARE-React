import React, { useState, useEffect } from "react";

const url =
  "http://localhost:8080/getGroupingValues?criteriaName=Job Title&loggedInManagerID=6135fa6f348654ad496b83cf";

function TitleRoles() {
  const [roles, setRoles] = useState([]);

  const fetchRoles = async () => {
    const response = await fetch(url);
    const roles = await response.json();
    setRoles(roles);
    console.log(roles);
  };
  useEffect(() => {
    fetchRoles();
  }, []);

  roles.map((role) => {
    return (
      <div>
        {roles[0]}
        {roles[1]}
      </div>
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
                  <p className="title">{roles[0]}</p>
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
                  <p className="title">{roles[1]}</p>
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

export default TitleRoles;
