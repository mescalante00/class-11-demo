import { Container, Grid } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import { Navigation } from "./Navigation";

export const Layout = () => {
  return (
    <Container>
      <Grid container justifyContent="space-between">
        <Grid item xs={12}>
          <Navigation />
        </Grid>
        <Grid item xs={12}>
          <Outlet />
        </Grid>
      </Grid>
    </Container>
  );
};
