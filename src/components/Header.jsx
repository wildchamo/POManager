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
        paddingTop: "14px",
        paddingLeft: "10px",
      }}
    >
      <Grid item md={5} xs={10}>
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
        md={6}
        sx={{
          display: "flex",
          justifyContent: "center",
          display: { xs: 'none', md: 'block' } 
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
        md={1}
        xs={2}
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
