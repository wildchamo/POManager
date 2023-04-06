import { Paper, Typography } from "@mui/material";
import React from "react";

function DataTable({unidad}) {
  return (
    <Paper elevation={1}>
      <Typography variant="h6" color="initial" sx={{textAlign:"center"}}>
        Proyectos operativos de la Unidad de {unidad}{" "}
      </Typography>

    </Paper>
  );
}

export default DataTable;
