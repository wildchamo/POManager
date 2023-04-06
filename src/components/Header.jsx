import {
  AppBar,
  Typography,
  TextField,
  IconButton,
  InputAdornment,
  Stack,
} from "@mui/material";
import React from "react";
import logoHeader from "../img/logoheader.png";

import LogoutIcon from "@mui/icons-material/Logout";
import SearchIcon from "@mui/icons-material/Search";

function Header({ username }) {
  return (
    <AppBar
      sx={{
        backgroundColor: "white",
        color: "#C4161C",
        boxShadow: "none",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        paddingTop: "10px",
      }}
    >
      <Stack
        sx={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
        }}
      >
        <img src={logoHeader} />
        <Typography variant="h5" sx={{ fontWeight: "700" }}>
          ¡Bienvenido a OP manager, {username}!
        </Typography>
      </Stack>

      <TextField
        id="outlined-basic"
        label="Buscar proyecto"
        placeholder="Introduce el nombre del proyecto que buscas"
        sx={{
          width: "500px",
        }}
        // value={valueInput}
        // onChange={onSearchValueChange} onClick={onHandleSubmit}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <IconButton>
        <LogoutIcon />
      </IconButton>
    </AppBar>
  );
}

export default Header;
