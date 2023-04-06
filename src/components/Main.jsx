import React from "react";
import { Grid } from "@mui/material";
import DataTable from "./DataTable";
import PieChart from "./PieChart";

function Main({ unidad }) {
  return (
    <Grid container>
      <Grid item xs={9}>
        <DataTable unidad={unidad} />
      </Grid>
      <Grid item xs={3}>
        <PieChart />
      </Grid>
    </Grid>
  );
}

export default Main;
