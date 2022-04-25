import { useQuery } from "@apollo/client";
import { Typography, Grid } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { GET_BOOK_DETAILS } from "./queries";

export default function BookDetailsPage() {
  const id = useParams();
  console.log(id);
  const { data, loading, error } = useQuery(GET_BOOK_DETAILS, {
    variables: {
      bookId: id.id,
    },
  });

  if (error) return <Typography>{error.message}</Typography>;
  if (loading) return <Typography> loading... </Typography>;

  const book = data.book;
  console.log(book);
  return (
    <>
      <Grid container spacing={2} direction="column">
        <Grid item>
          <img src={book.imgsrc} height="300" />
        </Grid>
        <Grid item>
          <Typography>{book.title}</Typography>
        </Grid>
        <Grid item>
          <Typography>{book.description}</Typography>
        </Grid>
        <Grid item>
          <Typography>{book.category.title}</Typography>
        </Grid>
        <Grid item>
          <Typography>{book.publisher}</Typography>
        </Grid>
        <Grid item>
          <Typography>${book.price}</Typography>
        </Grid>
      </Grid>
    </>
  );
}
