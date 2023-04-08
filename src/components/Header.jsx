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
import LogoutIcon from "@mui/icons-material/Logout";
import SearchIcon from "@mui/icons-material/Search";

function Header({ username, logout, setSearchValue }) {
  const [value, setValue] = React.useState("");

  const onSearchValueChange = (event) => {
    setValue(event.target.value);
    setSearchValue(value)
  };

  return (
    <Grid
      container
      sx={{
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
          <Typography variant="h5" sx={{ fontWeight: "700", color: "#C4161C" }}>
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
          onChange={onSearchValueChange}
          value={value}
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
