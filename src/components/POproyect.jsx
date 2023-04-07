import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import CancelIcon from "@mui/icons-material/Cancel";
import VisibilityIcon from "@mui/icons-material/Visibility";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { IconButton } from "@mui/material";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function POproyect({ proyecto }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <TableRow>
        <TableCell align="center">{proyecto.nombre}</TableCell>
        <TableCell align="center">{proyecto.fechaInicio}</TableCell>
        <TableCell align="center">{proyecto.fechaFin}</TableCell>
        <TableCell
          align="center"
          sx={{
            color:
              proyecto.estado === "Activo"
                ? "#31B465"
                : proyecto.estado === "Anulado"
                ? "#7E818C"
                : "#C0A200",
          }}
        >
          ● {proyecto.estado}
        </TableCell>
        <TableCell align="center">
          <IconButton>
            <EditIcon />
          </IconButton>
        </TableCell>
        <TableCell align="center">
          <IconButton onClick={handleOpen}>
            <VisibilityIcon />
          </IconButton>
        </TableCell>
        <TableCell align="center">
          <IconButton>
            <CancelIcon />
          </IconButton>
        </TableCell>
      </TableRow>

      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <p>holaa, soy Jose</p>
        </Box>
      </Modal>
    </>
  );
}

export default POproyect;
