import React, { useEffect, useState } from "react";
import { getBookList } from "../api/index";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import "../Styles/books.css";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBookList().then((data) => {
      console.log(data);
      setBooks(data);
    });
  }, []);

  return (
    <div className="books_container">
      <h1 className="primary_heading"> List of books</h1>
      <ul>
        {books?.map((book, i) => (
          <>
            <li className="list_item" key={i}>
              {book.title}
              <br></br>
              {book.author}
              <br></br>
              {book.price}
            </li>
            {/* <li key={i}>{book.author}</li> */}
            {/* <li key={i}>{book.price}</li> */}
          </>
        ))}
      </ul>
    </div>
  );
};

export default Books;
