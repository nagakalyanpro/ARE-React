import React, { useState, useEffect } from "react";

const url =
  "http://localhost:8080/reportees?managerID=6135fa6f348654ad496b83cf";

function LaxmanRP() {
  const [persons, setPersons] = useState([]);

  const fetchPersons = async () => {
    const response = await fetch(url);
    const persons = await response.json();
    setPersons(persons);
    console.log(persons);
  };

  useEffect(() => {
    fetchPersons();
  }, []);

  const newPersons = persons.map((person) => {
    const { username } = person;
    return <p className="ms-1 mb-1 fw-bold text-center">{username}</p>;
  });
  return <div>{newPersons}</div>;
}

export default LaxmanRP;
