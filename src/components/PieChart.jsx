import React from "react";
import { useAuth } from "../context";
import { Stack } from "@mui/material";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Typography } from "@mui/material";

function PieChart() {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const auth = useAuth();

  const data = {
    datasets: [
      {
        data: [
          auth.proyectosActivosValue,
          auth.proyectosSuspendidosValue,
          auth.proyectosAnuladosValue,
        ],
        backgroundColor: ["#31B465", "#FFD600", "#7E818C"],
        borderColor: ["#31B465", "#FFD600", "#7E818C"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Stack
      direction="column"
      justifyContent="space-around"
      alignItems="center"
      spacing={2}
      sx={{paddingTop:"10px"}}
    >
      <Typography
        align="center"
        variant="h5"
        sx={{ textAlign: "center", color: "#666666", fontWeight: "700" }}
      >
        Tienes {auth.noProyectos} proyectos!
      </Typography>
      <div style={{ width: 160, margin: "0 auto" }}>
        <Doughnut data={data} />
      </div>
      <Stack direction="row">
        <Typography sx={{ color: "#31B465" }}>●</Typography>
        <Typography align="center">
          {auth.proyectosActivosValue} proyectos activos
        </Typography>
      </Stack>

      <Stack direction="row">
        <Typography sx={{ color: "#FFD600" }}>●</Typography>
        <Typography align="center">
          {auth.proyectosSuspendidosValue} proyectos suspendidos
        </Typography>
      </Stack>

      <Stack direction="row">
        <Typography sx={{ color: "#7E818C" }}>●</Typography>
        <Typography align="center">
          {auth.proyectosAnuladosValue} proyectos anulados
        </Typography>
      </Stack>
    </Stack>
  );
}

export default PieChart;
