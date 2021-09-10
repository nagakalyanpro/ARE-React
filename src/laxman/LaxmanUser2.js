import React, { useState, useEffect } from "react";

const url =
  "http://localhost:8080/reporteeswithmatchingrole?jobRole=Sales%20Rep&loggedInManagerID=6135fbfcfea96f43f4aabee9";

function LaxmanUser2() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
    console.log(users);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const newUsers = users.map((user) => {
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
      <p className="ms-1 mb-1 fw-bold text-center">{users[0]}</p>
      <p className="ms-1 mb-1 fw-bold text-center">{users[1]}</p>
      <p className="ms-1 mb-1 fw-bold text-center">{users[2]}</p>
    </div>
  );
}

export default LaxmanUser2;
