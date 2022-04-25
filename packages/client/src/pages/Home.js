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
  const [showAddMeal, setShowAddMeal] = useState(false);

  const showEditMeal = params.id !== undefined;

  return (
    <>
      <Grid container direction="column">
        <Grid item>
          <Typography variant="h2">Meals</Typography>
        </Grid>
        <Grid item>
          <Button onClick={() => setShowAddMeal(true)}>Add Meal</Button>
        </Grid>
        <Grid item>
          <BookTable />
        </Grid>
      </Grid>
      {showEditMeal && (
        <Dialog open={true} onClose={() => navigate("/")}>
          <DialogTitle />
          <DialogContent>
            <EditBook onClose={() => navigate("/")} />
          </DialogContent>
        </Dialog>
      )}
      {showAddMeal && (
        <Dialog open={true} onClose={() => setShowAddMeal(false)}>
          <DialogTitle />
          <DialogContent>
            <AddBook onClose={() => setShowAddMeal(false)} />
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};
