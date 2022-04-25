import { Typography } from "@mui/material";
import React from "react";

export const ErrorMessage = (error) => {
  return (
    <Typography variant="h4" style={{ color: "red" }}>
      Error! {error.error.message}
    </Typography>
  );
};

export default ErrorMessage;
