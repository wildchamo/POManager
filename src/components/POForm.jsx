import React from "react";
import { Typography, Grid, TextField, Button, Stack } from "@mui/material";
import { MenuItem } from "@mui/material";

function POForm({ name, see, closeModal, handleEvent, proyecto }) {
  var fechaCreacion = new Date();
  var dd = String(fechaCreacion.getDate()).padStart(2, "0");
  var mm = String(fechaCreacion.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = fechaCreacion.getFullYear();

  fechaCreacion = yyyy + "-" + mm + "-" + dd;

  const [fechaInicio, setfechaInicio] = React.useState(proyecto.fechaInicio);
  const [fechaFin, setfechaFin] = React.useState(proyecto.fechaFin);
  const [nombre, setNombre] = React.useState(proyecto.nombre);
  const [estado, setEstado] = React.useState(proyecto.estado);
  const [descripcion, setDescripcion] = React.useState(proyecto.descripcion);

  const handleClick = (e) => {
    e.preventDefault();
    handleEvent(
      proyecto.id,
      nombre,
      estado,
      fechaInicio,
      fechaFin,
      fechaCreacion,
      descripcion
    );
    closeModal();
  };
  const inputProps = {
    disabled: see === true ? true : false,
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
        <Typography>
          {name} {proyecto.nombre}
        </Typography>
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
          inputProps={inputProps}
        />
      </Grid>

      <Grid element xs={12}>
        <Grid container direction="row" alignItems="center">
          <Grid item xs={3}>
            <input
              type="date"
              label="Fecha de inicio"
              value={fechaInicio}
              onChange={(e) => setfechaInicio(e.target.value)}
              min={fechaCreacion}
              max={fechaFin}
              disabled={see}
            />
          </Grid>
          <Grid item xs={3}>
            <input
              type="date"
              label="Fecha de Finalización"
              value={fechaFin}
              onChange={(e) => setfechaFin(e.target.value)}
              min={fechaInicio}
              disabled={see}
            />
          </Grid>
          <Grid item xs={3}>
            <input
              type="date"
              label="Fecha de creación"
              value={fechaCreacion}
              disabled
            />
          </Grid>
          <Grid item xs={3}>
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
              inputProps={inputProps}
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
          inputProps={inputProps}
        />
      </Grid>
      <Grid element xs={12}>
        <Stack direction="row" justifyContent="space-between">
          <Typography>
            Los campos marcados con ‘*’ son de carácter obligatorio.
          </Typography>

          {see === true ? (
            <Button variant="contained" onClick={closeModal}>
              Aceptar
            </Button>
          ) : (
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
          )}
        </Stack>
      </Grid>
    </Grid>
  );
}

export default POForm;
