import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
} from "@mui/material";
import { BookTable } from "../modules/book/BookTable";
import { useNavigate, useParams } from "react-router-dom";
import { EditBook } from "../modules/book/EditBook";
import { AddBook } from "../modules/book/AddBook";

export const Home = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [showAddBook, setShowAddBook] = useState(false);

  const showEditBook = params.id !== undefined;

  return (
    <>
      <Grid container direction="column">
        <Grid item>
          <Typography variant="h2">Admin Page</Typography>
        </Grid>
        <Grid item>
          <Button onClick={() => setShowAddBook(true)}>Add Book</Button>
        </Grid>
        <Grid item>
          <BookTable />
        </Grid>
      </Grid>
      {showEditBook && (
        <Dialog open={true} onClose={() => navigate("/")}>
          <DialogTitle />
          <DialogContent>
            <EditBook onClose={() => navigate("/")} />
          </DialogContent>
        </Dialog>
      )}
      {showAddBook && (
        <Dialog open={true} onClose={() => setShowAddBook(false)}>
          <DialogTitle />
          <DialogContent>
            <AddBook onClose={() => setShowAddBook(false)} />
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};
