import { Paper, Typography, Button } from "@mui/material";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import TableFooter from "@mui/material/TableFooter";
import AddIcon from "@mui/icons-material/Add";
import POproyect from "./POproyect";
import Modal from "@mui/material/Modal";
import POForm from "./POForm";

import React from "react";

function DataTable({ unidad, proyectos }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
            <POproyect key={proyecto.id} proyecto={proyecto} />
          ))}

          <TableFooter>
            <Button
              onClick={handleOpen}
              variant="contained"
              startIcon={<AddIcon />}
            >
              Crear nuevo proyecto
            </Button>
            <Modal open={open} onClose={handleClose}>
              <POForm see={true} closeModal={handleClose} name={"Creando un nuevo proyecto ..."} />
            </Modal>
          </TableFooter>
        </TableBody>
      </Table>
    </Paper>
  );
}

export default DataTable;
