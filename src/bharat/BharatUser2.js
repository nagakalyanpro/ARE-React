import React, { useState, useEffect } from "react";

const user2 =
  "http://localhost:8080/reporteeswithmatchingrole?jobRole=Recruiter&loggedInManagerID=6135fbfcfea96f43f4aabeeb";

function ExtentionUser2() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const response = await fetch(user2);
    const users = await response.json();
    setUsers(users);
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  users.map((user) => {
    return (
      <div>
        {users[0]}
        {users[1]}
        {users[2]}
      </div>
    );
  });

  return (
    <div>
      <section>
        <p className="ms-1 mb-1 fw-bold text-center">{users[0]}</p>
        <p className="ms-1 mb-1 fw-bold text-center">{users[1]}</p>
        <p className="ms-1 mb-1 fw-bold text-center">{users[2]}</p>
        <p className="ms-1 mb-1 fw-bold text-center">{users[3]}</p>
        <p className="ms-1 mb-1 fw-bold text-center">{users[4]}</p>
      </section>
    </div>
  );
}

export default ExtentionUser2;
