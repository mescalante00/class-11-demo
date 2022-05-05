import { Typography, Grid } from "@mui/material";
import React from "react";
import { BookList } from "./BookList";
import { useQuery } from "@apollo/client";
import { GET_BOOKS } from "./queries";

export const Book = () => {
  const { data, error, loading } = useQuery(GET_BOOKS);
  if (error) return <Typography>{error.message}</Typography>;

  if (loading) return <Typography>Loading...</Typography>;

  console.log(data);

  const { book_data } = data;
  return (
    <>
      <Grid item>
        <Typography> Book page </Typography>
      </Grid>
      <Grid item>
        <BookList books={data.books} />
      </Grid>
    </>
  );
};
