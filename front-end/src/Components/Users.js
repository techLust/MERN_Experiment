import React, { useState, useEffect } from "react";
import "../Styles/users.css";
import { getUserList } from "../api/index";

const Users = () => {
  const [users, setUser] = useState([]);
  useEffect(() => {
    getUserList().then((data) => {
      setUser(data);
      console.log(data);
    });
  }, []);

  return (
    <div className="users_container">
      <h1 className="primary_heading"> List of users</h1>
      <ul className="user_list">
        {users?.map((user, i) => (
          <>
            <li className="user_list_item" key={i}>
              {user.name} <br></br>
              {user.email}
            </li>
            {/* <li className="list_item" key={i}>{user.email}</li> */}
          </>
        ))}
      </ul>
    </div>
  );
};

export default Users;