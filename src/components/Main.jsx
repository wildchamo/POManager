import React from "react";
import { Grid } from "@mui/material";
import DataTable from "./DataTable";
import PieChart from "./PieChart";

function Main({ unidad, proyectos }) {
  return (
    <Grid container sx={{paddingTop:"25px"}}>
      <Grid item md={9}>
        <DataTable unidad={unidad} proyectos={proyectos} />
      </Grid>
      <Grid item md={3} sx= {{display: { xs: 'none', md: 'block' }}} >
        <PieChart />
      </Grid>
    </Grid>
  );
}

export default Main;
