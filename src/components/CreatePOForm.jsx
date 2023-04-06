import React from "react";
import { Typography, Grid, TextField, Button } from "@mui/material";
import { MenuItem } from "@mui/material";

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
        bgcolor: "background.paper",
        border: "2px solid #000",
        boxShadow: 24,
        p: 4,
      }}
    >
      <Grid element>
        <Typography>Creando un nuevo proyecto ...</Typography>
      </Grid>
      <Grid element>
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

      <Grid element>
        <TextField
          margin="normal"
          id="outlined-basic"
          label="Nombre del proyecto"
          placeholder="Ingresa el nombre del proyecto"
          autoFocus
          fullWidth
          required
        />
        <TextField
          margin="normal"
          id="outlined-basic"
          label="Nombre del proyecto"
          placeholder="Ingresa el nombre del proyecto"
          autoFocus
          fullWidth
          required
        />
        <TextField
          margin="normal"
          id="outlined-basic"
          label="Nombre del proyecto"
          placeholder="Ingresa el nombre del proyecto"
          autoFocus
          fullWidth
          required
        />
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
      <Grid element>
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
        >
          <MenuItem value="Activo">
            Activo
          </MenuItem>
          <MenuItem value="Suspendido">
            Suspendido
          </MenuItem>
        </TextField>
      </Grid>
      <Grid element>
        <Typography>
          Los campos marcados con ‘*’ son de carácter obligatorio.
        </Typography>

        <Button>Cancelar</Button>
        <Button variant="contained">Aceptar</Button>
      </Grid>
    </Grid>
  );
}

export default CreatePOForm;
