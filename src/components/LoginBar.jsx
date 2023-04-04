import React from "react";
import logoPO from "../img/logoPO.png";
import logoUAO from "../img/logouao.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { MenuItem } from "@mui/material";
import { Stack } from "@mui/system";

function LoginBar() {
  const [username, setUsername] = React.useState("");
  const [unidad, setUnidad] = React.useState("");

  const login = (e) => {
    e.preventDefault();
    console.log(username);
    console.log(unidad);
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
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        margin="normal"
        id="outlined-basic"
        label="Nombre"
        placeholder="Ingresa tu nombre <3"
        autoFocus
        fullWidth
        required
      />

      <TextField
        value={unidad}
        onChange={(e) => setUnidad(e.target.value)}
        margin="normal"
        id="outlined-basic"
        label="Unidad de gestión"
        placeholder="Ingresa la unidad a gestionar <3"
        autoFocus
        select
        fullWidth
        required
      >
        <MenuItem value="Gestión de procesos en TI">Unidad de gestión de procesos en TI</MenuItem>
        <MenuItem value="Gestión de infraestructura">Unidad de gestión de infraestructura</MenuItem>
      </TextField>

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
