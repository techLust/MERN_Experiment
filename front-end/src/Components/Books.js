import React, { useEffect, useState } from "react";
import { getBookList } from "../api/index";
import Searchbar from "./Searchbar";
import "../Styles/books.css";
import "../Styles/search.css";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";

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
      <Searchbar />
      <ul className="book_card">
        {books?.map((book, i) => (
          <Card sx={{ width: 300 }}>
            <CardMedia
              component="img"
              height="140"
              image="/static/images/books.jpeg"
              alt="green iguana"
            />
            <CardContent>
              <div
                style={{
                  width: "2rem",
                  // overflow: "hidden",
                  // height: "1rem",
                  textoverflow: "ellipsis !important",
                }}
              >
                <Typography gutterBottom variant="h6" component="div">
                  {book.title}
                </Typography>
              </div>
              <Typography variant="body2" color="text.secondary">
                {book.author}
              </Typography>
            </CardContent>
            <Stack spacing={1}>
              <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
            </Stack>
            <CardActions>
              <Button size="small">${book.price}</Button>
              <Button size="small">Buy now</Button>
            </CardActions>
          </Card>
          // <>
          //   <li className="list_item" key={i}>
          //     {book.title}
          //     <br></br>
          //     {book.author}
          //     <br></br>
          //     {book.price}
          //   </li>
          // </>
        ))}
      </ul>
      <Pagination count={10} color="primary" />
    </div>
  );
};

export default Books;
