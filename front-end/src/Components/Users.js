import React, { useState, useEffect } from "react";
import "../Styles/users.css";
// import Searchbar from "./Searchbar";
import { getUserList, deleteUserData } from "../api";
// import UserDetails from "./UserDetails"
import DeleteIcon from "@mui/icons-material/Delete";
import UpdateIcon from "@mui/icons-material/Update";

const Users = () => {
  const [users, setUser] = useState([]);
  useEffect(() => {
    getUserList().then((data) => {
      setUser(data);
      // console.log(data);
    });
  }, []);

  // Delete user API call
  const deleteUserHandler = () => {
    // deleteUserData();
    console.log("user deleted");
  };

  //Update user API call
  const updateUserHandler = () => {
    // deleteUserData();
    console.log("user updated");
  };

  return (
    <div className="users_container">
      {/* <Searchbar /> */}
      <h1 className="primary_heading"> List of users</h1>

      <div className="user_header">
        <div>First Name</div>
        <div>Last Name</div>
        <div>Full Name</div>
        <div>Email</div>
        <div>Actions</div>
      </div>
      {users?.map((user, i) => (
        <>
          <div className="user_details">
            <div>{user.firstName}</div>
            <div>{user.lastName}</div>
            <div>{user.firstName + " " + user.lastName}</div>
            <div>{user.email}</div>
            <div className="action_icons">
              <div>
                <UpdateIcon onClick={updateUserHandler} />
              </div>
              <div>
                <DeleteIcon onClick={deleteUserHandler} />
              </div>
            </div>
          </div>
        </>
      ))}
      {/* <UserDetails /> */}
    </div>
  );
};

export default Users;
