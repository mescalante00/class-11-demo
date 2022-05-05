import { Typography, Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import React from "react";

export const Navigation = () => {
  return (
    <>
      <Grid container>
        <Grid item>
          <Navbar />
        </Grid>
        <Grid item>
          <Outlet />
        </Grid>
      </Grid>
    </>
  );
};
