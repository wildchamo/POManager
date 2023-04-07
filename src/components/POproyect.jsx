import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import CancelIcon from "@mui/icons-material/Cancel";
import VisibilityIcon from "@mui/icons-material/Visibility";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { IconButton } from "@mui/material";
import Modal from "@mui/material/Modal";
import POForm from "./POForm";
import { useAuth } from "../context";
import POFormAnul from "./POFormAnul";

function POproyect({ proyecto }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);

  const [open3, setOpen3] = React.useState(false);
  const handleOpen3 = () => setOpen3(true);
  const handleClose3 = () => setOpen3(false);

  const auth = useAuth();

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
          <IconButton onClick={handleOpen2}>
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
            <CancelIcon onClick={handleOpen3} />
          </IconButton>
        </TableCell>
      </TableRow>
      <Modal open={open} onClose={handleClose}>
        <POForm
          see={true}
          closeModal={handleClose}
          proyecto={proyecto}
          name={"Detalles del proyecto"}
        />
      </Modal>

      <Modal open={open2} onClose={handleClose2}>
        <POForm
          see={false}
          closeModal={handleClose2}
          proyecto={proyecto}
          name={"Detalles del proyecto"}
          handleEvent={(
            id,
            nombre,
            estado,
            fechaInicio,
            fechaFin,
            fechaCreacion,
            descripcion
          ) =>
            auth.editPO(
              id,
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

      <Modal open={open3} onClose={handleClose3}>
        <POFormAnul closeModal={handleClose3} proyecto={proyecto} />
      </Modal>
    </>
  );
}

export default POproyect;
