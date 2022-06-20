import React from "react";
import "../Styles/home.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container maxWidth="lg">
      <Grid gap={15} container spacing={1} py={8}>
        <Grid xs={3}>
          <Card sx={{ maxWidth: 300 }}>
            <CardMedia
              component="img"
              height="140"
              image="/static/images/books.jpeg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Explore User
              </Typography>
              <Typography variant="body2" color="text.secondary">
                You can explore User section by click on the button.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">
                <Link to="/users">Explore Users</Link>
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid xs={3}>
          <Card sx={{ maxWidth: 300 }}>
            <CardMedia
              component="img"
              height="140"
              image="/static/images/books.jpeg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Explore Books
              </Typography>
              <Typography variant="body2" color="text.secondary">
                You can explore books section by click on the button.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">
                <Link to="/books">Explore Books</Link>
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid xs={3}>
          <Card sx={{ maxWidth: 300 }}>
            <CardMedia
              component="img"
              height="140"
              image="/static/images/books.jpeg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Explore Orders
              </Typography>
              <Typography variant="body2" color="text.secondary">
                You can explore Orders section by click on the button.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">
                <Link to="/orders">Explore Orders</Link>
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
