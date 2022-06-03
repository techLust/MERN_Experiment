import React, { useState, useEffect } from "react";
import "../Styles/orders.css";
import { getOrders } from "../api/index";
// import Searchbar from "./Searchbar";
import OrderDetails from "./OrderDetails";

const StudentLogin = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrders().then((data) => {
      setOrders(data);
      console.log(data);
    });
  }, []);

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
      </div>

      {orders?.map((data, i) => (
        <>
          <div className="orders">
            <div className="order_info_bookId">{data.bookId}</div>
            <div className="order_info_userId">{data.userId}</div>
            <div className="order_info_address">{data.address}</div>
            <div className="order_info_phone">{data.phone}</div>
            <div className="order_info_pin">{data.pinCode}</div>
          </div>
        </>
      ))}
      {/* <OrderDetails /> */}
    </div>
  );
};

export default StudentLogin;
