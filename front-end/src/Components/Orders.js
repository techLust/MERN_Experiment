import React, { useState, useEffect } from "react";
import "../Styles/orders.css";
import { getOrders } from "../api/index";
// import Searchbar from "./Searchbar";
import OrderDetails from "./OrderDetails";
import DeleteIcon from "@mui/icons-material/Delete";
import UpdateIcon from "@mui/icons-material/Update";

const StudentLogin = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrders().then((data) => {
      setOrders(data);
      console.log(data);
    });
  }, []);

  //Delete orders handler
  const deleteOrderHandler = (id) => {
    console.log(id);
    const filterOrder = orders.filter((item) => item?._id !== id);
    console.log(filterOrder);
    setOrders(filterOrder);
    // console.log("Order deleted");
  };

  return (
    <div className="orders_container">
      <h1 className="primary_heading"> List of orders</h1>
      {/* <Searchbar /> */}

      <div className="orders_header">
        <div>Book Id</div>
        <div>User Id</div>
        <div>Address</div>
        <div>Phone</div>
        <div>Pin code</div>
        <div>Actions</div>
      </div>

      {orders?.map((data) => (
        <>
          <div className="orders">
            <div className="order_info_bookId">{data._id}</div>
            <div className="order_info_userId">{data.userId}</div>
            <div className="order_info_address">{data.address}</div>
            <div className="order_info_phone">{data.phone}</div>
            <div className="order_info_pin">{data.pinCode}</div>
            <div className="action_icons">
              <div>
                <UpdateIcon />
              </div>
              <div>
                <DeleteIcon
                  onClick={() => {
                    deleteOrderHandler(data._id);
                  }}
                />
              </div>
            </div>
          </div>
        </>
      ))}
      {/* <OrderDetails /> */}
    </div>
  );
};

export default StudentLogin;
