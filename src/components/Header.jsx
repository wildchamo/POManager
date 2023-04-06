import { AppBar, Typography } from "@mui/material";
import React from "react";

function Header({ username }) {
  return (
    <AppBar
      sx={{
        backgroundColor: "white",
        color: "#C4161C",
        boxShadow: "none",
      }}
    >
      <Typography variant="h5" sx={{fontWeight: "700"}}>
        ¡Bienvenido a OP manager, {username}!
      </Typography>
    </AppBar>
  );
}

export default Header;
