import React, { useState, useEffect } from "react";
import "../Styles/orders.css";
import { getOrders } from "../api/index";
import Searchbar from "./Searchbar";
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
      <Searchbar />
      <h1 className="primary_heading"> List of orders</h1>
      <ul className="#">
        {orders?.map((data, i) => (
          <>
            <li className="list_item" key={i}>
              {data.bookId}
              <br></br>
              {data.userId}
              <br></br>
              {data.address}
              <br></br>
              {data.pinCode}
              <br></br>
              {data.phone}
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default StudentLogin;
