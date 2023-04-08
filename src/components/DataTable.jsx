import { Paper, Typography, Button } from "@mui/material";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import AddIcon from "@mui/icons-material/Add";
import POproyect from "./POproyect";
import Modal from "@mui/material/Modal";
import POFormCreate from "./POFormCreate";
import { useAuth } from "../context";
import TablePagination from "@mui/material/TablePagination";
import { Stack } from "@mui/material";

import React from "react";

function DataTable({ unidad, proyectos }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const auth = useAuth();
  const [page, setPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 5));
    setPage(0);
  };

  return (
    <Paper elevation={1} sx={{ paddingTop: "20px" }}>
      <Typography
        variant="h6"
        sx={{ textAlign: "center", color: "#666666", fontWeight: "700" }}
      >
        Proyectos operativos de la Unidad de {unidad}
      </Typography>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell
              sx={{ fontWeight: "400", color: "#666666" }}
              align="center"
            >
              Nombre
            </TableCell>
            <TableCell
              sx={{ fontWeight: "400", color: "#666666",display: { xs: 'none', md: 'table-cell' } }}
              align="center"
            >
              Fecha de inicio
            </TableCell>
            <TableCell
              sx={{ fontWeight: "400", color: "#666666",display: { xs: 'none', md: 'table-cell' } }}
              align="center"
            >
              Fecha de finalización
            </TableCell>
            <TableCell
              sx={{ fontWeight: "400", color: "#666666" }}
              align="center"
            >
              Estado
            </TableCell>
            <TableCell
              sx={{ fontWeight: "400", color: "#666666",display: { xs: 'none', md: 'table-cell' } }}
              align="center"
            >
              Editar
            </TableCell>
            <TableCell
              sx={{ fontWeight: "400", color: "#666666" }}
              align="center"
            >
              Ver más
            </TableCell>
            <TableCell
              sx={{ fontWeight: "400", color: "#666666" }}
              align="center"
            >
              Anular
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {proyectos.map((proyecto) => (
            <POproyect key={proyecto.id} proyecto={proyecto} />
          ))}
        </TableBody>
      </Table>
      <Stack
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        spacing={2}
      >
        <TablePagination
        sx={{ display: { xs: "none", md: "block" } }}
          component="div"
          count={auth.noProyectos}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
        <Button
          onClick={handleOpen}
          variant="contained"
          startIcon={<AddIcon />}
        >
          Crear nuevo proyecto
        </Button>
      </Stack>

      <Modal open={open} onClose={handleClose}>
        <POFormCreate
          closeModal={handleClose}
          handleEvent={(
            nombre,
            estado,
            fechaInicio,
            fechaFin,
            fechaCreacion,
            descripcion
          ) =>
            auth.createPO(
              nombre,
              estado,
              fechaInicio,
              fechaFin,
              fechaCreacion,
              descripcion
            )
          }
        />
      </Modal>
    </Paper>
  );
}

export default DataTable;
