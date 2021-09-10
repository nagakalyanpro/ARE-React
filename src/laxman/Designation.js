import React, { useState, useEffect } from "react";
import LaxmanUser1 from "./LaxmanUser1";
import LaxmanUser2 from "./LaxmanUser2";

const url =
  "http://localhost:8080/getGroupingValues?criteriaName=Product%20Sales&loggedInManagerID=6135fbfcfea96f43f4aabee8";
const data =
  "http://localhost:8080/reportees?managerID=6135fa6f348654ad496b83cf";

function Designation() {
  const [roles, setRoles] = useState([]);
  const [names, setNames] = useState([]);

  const fetchNames = async () => {
    const response = await fetch(data);
    const names = await response.json();
    setNames(names);
  };

  useEffect(() => {
    fetchNames();
  }, []);

  const newNames = names.map((name) => {
    const { username } = name;
    return <div>{username}</div>;
  });

  const fetchRoles = async () => {
    const response = await fetch(url);
    const roles = await response.json();
    setRoles(roles);
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
      <div className="col-md-6 col-lg-6 grid-margin">
        <div className="card card-square">
          <div className="card-body card-square p-0">
            <div className="claims-text">
              <p>Claims Processor Medical Claims</p>
              <p>Claims Processors managing Facts Claims</p>
              {newNames[0]}
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
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-6 grid-margin">
        <div className="card card-square">
          <div className="card-body card-square p-0">
            <div className="claims-text">
              <p>Claims Processor Medical Claims</p>
              <p>Claims Processors managing Facts Claims</p>
              {newNames[1]}
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
          </div>
        </div>
      </div>
      <div className="col-lg-3 d-flex flex-column order-lg-3">
        <div className="row flex-grow">
          <div className="col-12 grid-margin stretch-card">
            <div className="card card-square">
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="mt-3">
                      <div className="wrapper  align-items-center justify-content-between py-2">
                        <div className="">
                          <div className="wrapper">
                            <p className="ms-1 mb-1 fw-bold text-center"></p>
                          </div>
                        </div>
                      </div>
                      <LaxmanUser1 />
                      <div className="wrapper  align-items-center justify-content-between py-2">
                        <div className="">
                          <div className="wrapper">
                            <p className="ms-1 mb-1 fw-bold text-center"></p>
                          </div>
                        </div>
                      </div>
                      <LaxmanUser2 />
                      <div className="wrapper  align-items-center justify-content-between py-2">
                        <div className="">
                          <div className="wrapper">
                            <p className="ms-1 mb-1 fw-bold text-center"></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Designation;
