import React from "react";
import { Typography, Grid, TextField, Button, Stack } from "@mui/material";

function POFormAnul({ proyecto }) {
  return (
    <Grid
      component="form"
    //   onSubmit={handleClick}
      container
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "80%",
        height: "60%",
        bgcolor: "background.paper",
        border: "2px solid #000",
        boxShadow: 24,
        p: 4,
      }}
    >
      <Typography variant="h1" color="initial">
        Hola, soyJose
      </Typography>
    </Grid>
  );
}

export default POFormAnul;
