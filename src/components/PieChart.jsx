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
        data: [auth.noProyectos, auth.noProyectos, auth.noProyectos],
        backgroundColor: ["#31B465", "#FFD600", "#7E818C"],
        borderColor: ["#31B465", "#FFD600", "#7E818C"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Stack alignItems="center">
      <Typography align="center" variant="h5">
        Tienes {auth.noProyectos} proyectos!
      </Typography>
      <div style={{ width: 160, margin: "0 auto" }}>
        <Doughnut data={data} />
      </div>
      <Stack direction="row">
        <Typography sx={{ color: "#31B465" }}>●</Typography>
        <Typography align="center" variant="h7">
          {auth.noProyectos} proyectos activos
        </Typography>
      </Stack>

      <Stack direction="row">
        <Typography sx={{ color: "#FFD600" }}>●</Typography>
        <Typography align="center" variant="h7">
          {auth.noProyectos} proyectos suspendidos
        </Typography>
      </Stack>

      <Stack direction="row">
        <Typography sx={{ color: "#7E818C" }}>●</Typography>
        <Typography align="center" variant="h7">
          {auth.noProyectos} proyectos anulados
        </Typography>
      </Stack>

    </Stack>
  );
}

export default PieChart;
