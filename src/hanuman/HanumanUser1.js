import React, { useState, useEffect } from "react";

const user1 =
  "http://localhost:8080/reporteeswithmatchingrole?jobRole=Clerk&loggedInManagerID=6135fbfcfea96f43f4aabeee";

function HanumanUser1() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const response = await fetch(user1);
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

export default HanumanUser1;
