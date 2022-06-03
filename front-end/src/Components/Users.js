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

      <div className="user_header">
        <div>First Name</div>
        <div>Last Name</div>
        <div>Full Name</div>
        <div>Email</div>
      </div>
      {users?.map((user, i) => (
        <>
          <div className="user_details">
            <div>{user.firstName}</div>
            <div>{user.lastName}</div>
            <div>{user.firstName + " " + user.lastName}</div>
            <div>{user.email}</div>
          </div>
        </>
      ))}
      {/* <UserDetails /> */}
    </div>
  );
};

export default Users;
