import React from "react";
import { Typography, Grid, TextField, Button, Stack } from "@mui/material";

function POFormAnul({ proyecto, closeModal, handleEvent }) {
  const [justificacion, setjustificacion] = React.useState("");

  const handleClick = (e) => {
    e.preventDefault();
    handleEvent(proyecto.id, justificacion);
    closeModal();
  };

  return (
    <Grid
      component="form"
      //   onSubmit={handleClick}
      container
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "60%",
        height: "40%",
        bgcolor: "background.paper",
        border: "2px solid #000",
        boxShadow: 24,
        p: 4,
      }}
    >
      <Grid item xs={12}>
        <Typography variant="h5" color="initial">
          Por qué desea anular el proyecto {proyecto.nombre}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField
          value={justificacion}
          onChange={(e) => setjustificacion(e.target.value)}
          margin="normal"
          id="outlined-basic"
          label="Justificación"
          placeholder="Ingresa la justificación :("
          autoFocus
          fullWidth
          required
        />
      </Grid>
      <Grid item xs={12}>
        <Stack
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          spacing={4}
        >
          <Button variant="contained" onClick={closeModal}>
            Cancelar
          </Button>
          <Button onClick={handleClick}>Anular proyecto</Button>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default POFormAnul;
