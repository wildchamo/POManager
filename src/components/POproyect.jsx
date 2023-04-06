import React from "react";

import EditIcon from "@mui/icons-material/Edit";
import CancelIcon from "@mui/icons-material/Cancel";
import VisibilityIcon from "@mui/icons-material/Visibility";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { IconButton } from "@mui/material";

function POproyect({ proyecto }) {
  return (
    <TableRow>
      <TableCell align="center">{proyecto.nombre}</TableCell>
      <TableCell align="center">{proyecto.fechaInicio}</TableCell>
      <TableCell align="center">{proyecto.fechaFin}</TableCell>
      <TableCell align="center">● {proyecto.estado}</TableCell>
      <TableCell align="center">
        <IconButton>
          <EditIcon />
        </IconButton>
      </TableCell>
      <TableCell align="center">
        <IconButton>
          <VisibilityIcon />
        </IconButton>
      </TableCell>
      <TableCell align="center">
        <IconButton>
          <CancelIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}

export default POproyect;
