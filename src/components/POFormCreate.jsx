import React from "react";
import { Typography, Grid, TextField, Button, Stack } from "@mui/material";
import { MenuItem } from "@mui/material";

function POFormCreate({ closeModal, handleEvent }) {
  var fechaCreacion = new Date();
  var dd = String(fechaCreacion.getDate()).padStart(2, "0");
  var mm = String(fechaCreacion.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = fechaCreacion.getFullYear();

  fechaCreacion = yyyy + "-" + mm + "-" + dd;

  const [fechaInicio, setfechaInicio] = React.useState("");
  const [fechaFin, setfechaFin] = React.useState("");
  const [nombre, setNombre] = React.useState("");
  const [estado, setEstado] = React.useState("");
  const [descripcion, setDescripcion] = React.useState("");

  const handleClick = (e) => {
    e.preventDefault();
    // handleEvent(nombre, estado, fechaInicio);
    handleEvent(
      nombre,
      estado,
      fechaInicio,
      fechaFin,
      fechaCreacion,
      descripcion
    );
    closeModal();
  };

  return (
    <Grid
      component="form"
      onSubmit={handleClick}
      container
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "80%",
        height: "60%",
        bgcolor: "background.paper",
        border: "2px solid #000",
        boxShadow: 24,
        p: 4,
      }}
    >
      <Grid element xs={12}>
        <Typography>Creando un nuevo proyecto</Typography>
      </Grid>
      <Grid element xs={12}>
        <TextField
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          margin="normal"
          id="outlined-basic"
          label="Nombre del proyecto"
          placeholder="Ingresa el nombre del proyecto"
          autoFocus
          fullWidth
          required
        />
      </Grid>

      <Grid element md={12}>
        <Grid container direction="row" alignItems="center">
          <Grid item md={3} xs={12}>
            <Stack>
              <Typography>Fecha de inicio</Typography>

              <input
                type="date"
                label="Fecha de inicio"
                value={fechaInicio}
                onChange={(e) => setfechaInicio(e.target.value)}
                min={fechaCreacion}
                max={fechaFin}
                style={{
                  height: "56px",
                  width:"200px",
                  backgroundColor: "white",
                  borderRadius: "4px",
                  color: "#666666",
                }}
              />
            </Stack>
          </Grid>
          <Grid item md={3} xs={12}>
            <Stack>
              <Typography>Fecha de Finalización</Typography>

              <input
                type="date"
                label="Fecha de Finalización"
                value={fechaFin}
                onChange={(e) => setfechaFin(e.target.value)}
                min={fechaInicio}
                style={{
                  height: "56px",
                  width:"200px",
                  backgroundColor: "white",
                  borderRadius: "4px",
                  color: "#666666",
                }}
              />
            </Stack>
          </Grid>
          <Grid item md={3} xs={12}>
            <Stack>
              <Typography>Fecha de creación</Typography>

              <input
                type="date"
                label="Fecha de creación"
                value={fechaCreacion}
                disabled
                style={{
                  height: "56px",
                  width:"200px",
                  backgroundColor: "white",
                  borderRadius: "4px",
                  color: "#666666",
                }}
              />
            </Stack>
          </Grid>
          <Grid item md={3} xs={12}>
            <TextField
              value={estado}
              defaultValue={estado}
              onChange={(e) => setEstado(e.target.value)}
              margin="normal"
              id="outlined-basic"
              label="Estado"
              placeholder="Selecciona el estado de tu proyecto"
              autoFocus
              select
              fullWidth
              required
            >
              <MenuItem value="Activo">Activo</MenuItem>
              <MenuItem value="Suspendido">Suspendido</MenuItem>
            </TextField>
          </Grid>
        </Grid>
      </Grid>
      <Grid element xs={12}>
        <TextField
          margin="normal"
          id="outlined-basic"
          label="Descripción del proyecto"
          placeholder="Ingresa la descripción del proyecto"
          autoFocus
          fullWidth
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
      </Grid>
      <Grid element xs={12}>
        <Stack direction="row" justifyContent="space-between">
          <Typography sx={{ display: { xs: "none", md: "block" } }}>
            Los campos marcados con ‘*’ son de carácter obligatorio.
          </Typography>

          <Stack
            direction="row"
            justifyContent="space-between"
            sx={{ width: "240px" }}
          >
            <Button variant="contained" type="submit">
              Aceptar
            </Button>
            <Button onClick={closeModal}>Cancelar</Button>
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default POFormCreate;
