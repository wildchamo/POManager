import React from "react";
import { useAuth } from "../context";
import { Stack } from "@mui/material";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

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
    <div>
      <Stack>
        <div style={{ width: 160, margin: "0 auto" }}>
          <Doughnut data={data} />
        </div>
      </Stack>

      {auth.noProyectos}
    </div>
  );
}

export default PieChart;
