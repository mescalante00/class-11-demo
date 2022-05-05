import React from "react";
import {
  Grid,
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

export const BookList = ({ books }) => {
  console.log(books);
  return (
    <Grid container spacing={2}>
      {books.map((book, i) => (
        <Grid item xs={4} key={i}>
          <Card>
            <CardMedia
              heigh="200"
              component="img"
              src={book.imgsrc}
              alt={book.title}
            />
            <CardContent>
              <Typography variant="h5">{book.title}</Typography>
              <Typography>{book.description}</Typography>
              <Typography>${book.price}</Typography>
            </CardContent>
            <CardActions>
              <Link to={`/book/${book.id}`}>More Details</Link>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
