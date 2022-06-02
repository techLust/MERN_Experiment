import React, { useState, useEffect } from "react";
import "../Styles/users.css";
// import Searchbar from "./Searchbar";
import { getUserList } from "../api";
import UserDetails from "./UserDetails";

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
      {/* <Searchbar /> */}
      <h1 className="primary_heading"> List of users</h1>
      <ul className="user_list">
        {users?.map((user, i) => (
          <>
            <li key={i}>{user.firstName}</li>
            <li>{user.lastName}</li>
            <li>{user.email}</li>
          </>
        ))}
      </ul>
      <UserDetails />
    </div>
  );
};

export default Users;
