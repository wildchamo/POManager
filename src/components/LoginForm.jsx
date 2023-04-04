import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import PersonIcon from "@mui/icons-material/Person";

function LoginForm() {
  const [username, setUsername] = React.useState("holaJose");

  const login = (e) => {
    e.preventDefault();
    // auth.login({username})
    console.log(username);
    console.log("hola,jose")
  };

  return (
    <FormControl component="form" onSubmit={login}>
      <TextField
        margin="normal"
        id="outlined-basic"
        label="Ingresa tu nombre <3"
        placeholder="Nombre"
        autoFocus
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <PersonIcon />
            </InputAdornment>
          ),
        }}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Button
        type="submit"
        variant="contained"
        sx={{ backgroundColor: "#9E0B0F" }}
      >
        Iniciar sesión
      </Button>
    </FormControl>
  );
}

export default LoginForm;
