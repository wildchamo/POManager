import { Container } from "@mui/material";
import React from "react";
import logoPO from "../img/logoPO.png";
import logoUAO from "../img/logouao.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Stack } from "@mui/system";

function LoginBar() {
  const [username, setUsername] = React.useState("");

  const login = (e) => {
    e.preventDefault();
    console.log("Hola, Jose");
  };

  return (
    <Stack
      component="form"
      onSubmit={login}
      direction="column"
      justifyContent="space-evenly"
      alignItems="center"
      spacing={2}
      padding="0 50px"
      sx={{ width: "60vh" }}
    >
      <img src={logoPO} />

      <TextField
        margin="normal"
        id="outlined-basic"
        label="Usuario en GitHub"
        placeholder="Ingresa tu usuario en GitHub <3"
        autoFocus
        fullWidth
      />
      <Button
        type="submit"
        variant="contained"
        sx={{ backgroundColor: "#9E0B0F" }}
      >
        Iniciar sesión
      </Button>

      <img src={logoUAO} />
    </Stack>
  );
}

export default LoginBar;
