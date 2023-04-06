import { Paper, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";

import React from "react";

function DataTable({ unidad, proyectos }) {
  return (
    <Paper elevation={1}>
      <Typography variant="h6" color="initial" sx={{ textAlign: "center" }}>
        Proyectos operativos de la Unidad de {unidad}{" "}
      </Typography>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">Nombre</TableCell>
            <TableCell align="center">Fecha de inicio</TableCell>
            <TableCell align="center">Fecha de finalización</TableCell>
            <TableCell align="center">Estado</TableCell>
            <TableCell align="center">Editar</TableCell>
            <TableCell align="center">Ver más</TableCell>
            <TableCell align="center">Anular</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {proyectos.map((proyecto) => (
            <TableRow key={proyecto.id}>
              <TableCell align="center">{proyecto.nombre}</TableCell>
              <TableCell align="center">{proyecto.fechaInicio}</TableCell>
              <TableCell align="center">{proyecto.fechaFin}</TableCell>
              <TableCell align="center">{proyecto.estado}</TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default DataTable;
