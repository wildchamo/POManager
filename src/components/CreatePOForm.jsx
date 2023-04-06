import React from "react";
import { Typography, Grid, TextField, Button, Stack } from "@mui/material";
import { MenuItem } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function CreatePOForm() {
  return (
    <Grid
      component="form"
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
        <Typography>Creando un nuevo proyecto ...</Typography>
      </Grid>
      <Grid element xs={12}>
        <TextField
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
              <DatePicker label="Fecha de inicio" />
            </Grid>
            <Grid item xs={3}>
              <DatePicker label="Fecha de finalización" />
            </Grid>
            <Grid item xs={3}>
              <DatePicker label="Fecha de creación" />
            </Grid>
            <Grid item xs={3}>
              <TextField
                //   value={unidad}
                //   onChange={(e) => setUnidad(e.target.value)}
                margin="normal"
                id="outlined-basic"
                label="Estado"
                placeholder="Selecciona el estado de tu proyecto"
                autoFocus
                select
                fullWidth
                required
                sx={{
                  paddingBottom: "3px",
                }}
              >
                <MenuItem value="Activo">Activo</MenuItem>
                <MenuItem value="Suspendido">Suspendido</MenuItem>
              </TextField>
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
          required
        />
      </Grid>
      <Grid element xs={12}>
        <Stack direction="row" justifyContent="space-between">
          <Typography>
            Los campos marcados con ‘*’ son de carácter obligatorio.
          </Typography>
          <Stack
            direction="row"
            justifyContent="space-between"
            sx={{ width: "240px" }}
          >
            <Button>Cancelar</Button>
            <Button variant="contained">Aceptar</Button>
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default CreatePOForm;
