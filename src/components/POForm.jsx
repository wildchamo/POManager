import React from "react";
import { Typography, Grid, TextField, Button, Stack } from "@mui/material";
import { MenuItem } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

function POForm({ name, see, closeModal, handleEvent }) {
  var fechaHoy = dayjs();

  const [fechaInicio, setfechaInicio] = React.useState();
  const [fechaFin, setfechaFin] = React.useState();
  const [nombre, setNombre] = React.useState("");
  const [estado, setEstado] = React.useState("");
  const [descripcion, setDescripcion] = React.useState("");

  const handleClick = (e) => {
    e.preventDefault();
    // handleEvent(nombre, estado, fechaInicio);
    console.log(nombre, estado, fechaInicio);
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
        <Typography>{name}</Typography>
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

      <Grid element xs={12}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Grid container direction="row" alignItems="center">
            <Grid item xs={3}>
              <DatePicker
                label="Fecha de inicio"
                inputFormat="YYYY-MM-DD"
                value={fechaInicio}
                onChange={(e) => {
                  setfechaInicio(e.target.value);
                  console.log(e.target.value);
                }}
                maxDate={fechaFin}
                minDate={dayjs()}
              />
            </Grid>
            {/* <Grid item xs={3}>
              <DatePicker
                label="Fecha de finalización"
                inputFormat="YYYY-MM-DD"
                minDate={fechaInicio}
                value={fechaFin}
                onChange={(e) => setfechaFin(e.target.value)}
              />
            </Grid>
            <Grid item xs={3}>
              <DatePicker
                label="Fecha de creación"
                format="YYYY-MM-DD"
                defaultValue={fechaHoy}
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
              >
                <MenuItem value="Activo">Activo</MenuItem>
                <MenuItem value="Suspendido">Suspendido</MenuItem>
              </TextField> */}
            </Grid>
          </Grid>
        </LocalizationProvider>
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
          <Typography>
            Los campos marcados con ‘*’ son de carácter obligatorio.
          </Typography>

          {see === true ? (
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
          ) : (
            <Button variant="contained" onClick={closeModal}>
              Aceptar
            </Button>
          )}
        </Stack>
      </Grid>
    </Grid>
  );
}

export default POForm;
