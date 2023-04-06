import {
  AppBar,
  Typography,
  TextField,
  IconButton,
  InputAdornment,
  Stack,
  Grid,
} from "@mui/material";
import React from "react";
import logoHeader from "../img/logoheader.png";
import Container from "@mui/material/Container";
import LogoutIcon from "@mui/icons-material/Logout";
import SearchIcon from "@mui/icons-material/Search";

function Header({ username, logout }) {
  return (
    <Grid
      container
      sx={{
        position: "fixed",
        zIndex: "1100",
        top: "0",
        left: "auto",
        marginTop: "14px",
        marginLeft: "10px",
      }}
    >
      <Grid item xs={5}>
        <Stack
          sx={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <img src={logoHeader} />
          <Typography variant="h5" sx={{ fontWeight: "700" }}>
            ¡Bienvenido a OP manager, {username}!
          </Typography>
        </Stack>
      </Grid>

      <Grid
        item
        xs={6}
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <TextField
          item
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
      </Grid>

      <Grid
        item
        xs={1}
        sx={{
          alignItems: "center",
        }}
      >
        <IconButton onClick={logout} item>
          <LogoutIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
}

export default Header;
