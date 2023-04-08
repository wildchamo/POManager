import React from "react";
import Stack from "@mui/material/Stack";
import loginImg from "../img/loginimg.png";
import LoginBar from "../components/LoginBar";
import { Grid } from "@mui/material";

function Login() {
  return (
    <Grid container direction="row">
      <Grid item md={5}>
        <LoginBar />
      </Grid>
      <Grid item md={7}>
        <img src={loginImg} />
      </Grid>
    </Grid>
  );
}

export default Login;
