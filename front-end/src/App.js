import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Users from "./Components/Users";
import Books from "./Components/Books";
import Orders from "./Components/Orders";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/books" element={<Books />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
      {/* <div className="footer">Footer</div> */}
    </div>
  );
}

export default App;
