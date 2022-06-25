import React, { useState, useEffect } from "react";
import "../Styles/users.css";
// import Searchbar from "./Searchbar";
import { getUserList, deleteUserData } from "../api";
// import UserDetails from "./UserDetails"
import DeleteIcon from "@mui/icons-material/Delete";
import UpdateIcon from "@mui/icons-material/Update";
// import Snackbar from "@mui/material/Snackbar";

const Users = () => {
  const [users, setUser] = useState([]);
  // const [state, setState] = React.useState({
  //   open: false,
  //   vertical: "top",
  //   horizontal: "center",
  // });

  // const { vertical, horizontal, open } = state;

  // const handleClick = (newState) => () => {
  //   setState({ open: true, ...newState });
  // };

  // const handleClose = () => {
  //   setState({ ...state, open: false });
  // };

  useEffect(() => {
    getUserList().then((data) => {
      setUser(data);
      // console.log(data);
    });
  }, []);

  // Delete user API call
  const deleteUserHandler = async (id) => {
    const userData = await deleteUserData(id);
    if (userData.status == 200) {
      const filterUser = users && users.filter((item) => item?._id !== id);
      setUser(filterUser);
      console.log("Record deleted");
    } else {
      console.log("Record not found");
    }
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
      {users.length == 0 ? <h2>No user found</h2> : ""}
      {users?.map((user) => (
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
              <DeleteIcon
                onClick={() => {
                  deleteUserHandler(user._id);
                }}
              />
            </div>
          </div>
        </div>
      ))}
      {/* <UserDetails /> */}
    </div>
  );
};

export default Users;
