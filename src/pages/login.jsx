import React from "react";
import Stack from "@mui/material/Stack";
import loginImg from "../img/loginimg.png";
import LoginBar from "../components/LoginBar";

function Login() {
  return (
    <Stack direction="row">
      <LoginBar />
      <img style={{ height: "100vh" }} src={loginImg} />
    </Stack>
  );
}

export default Login;
