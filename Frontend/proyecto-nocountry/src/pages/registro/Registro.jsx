import {
  Box,
  TextField,
  Button,
  MenuItem,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { useState } from "react";

const provincias = [
  {
    value: "Buenos Aires",
  },
  {
    value: "Córdoba",
  },
];

const ciudades = [
  {
    value: "La Plata",
  },
  {
    value: "Villa Carlos Paz",
  },
];

export default function Registro() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [provincia, setProvincia] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [codigoPostal, setCodigoPostal] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // console.log(nombre);
  // console.log(apellido);
  // console.log(provincia);
  // console.log(ciudad);
  // console.log(codigoPostal);
  // console.log(email);
  // console.log(password);

  const [error, setError] = useState({
    error: false,
    message: "",
  });

  const validateEmail = (email) => {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      setError({
        error: false,
        message: "",
      });
      console.log("Email correcto");
      setNombre("");
      setApellido("");
      setProvincia("");
      setCiudad("");
      setCodigoPostal("");
      setEmail("");
      setPassword("");
    } else {
      setError({
        error: true,
        message: "Formato de email incorrecto",
      });
    }
  };

  return (
    <>
      <h1>Registro de usuario</h1>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: "grid", gap: 2 }}
      >
        <TextField
          id="nombre"
          label="Nombre"
          type="text"
          variant="outlined"
          fullWidth
          required
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <TextField
          id="apellido"
          label="Apellido"
          type="text"
          variant="outlined"
          fullWidth
          required
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
        />

        <TextField
          id="provincia"
          select
          label="Provincia"
          value={provincia}
          onChange={(e) => setProvincia(e.target.value)}
        >
          {provincias.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          id="ciudad"
          select
          label="Ciudad"
          value={ciudad}
          onChange={(e) => setCiudad(e.target.value)}
        >
          {ciudades.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          id="codigoPostal"
          label="Código Postal"
          type="number"
          variant="outlined"
          fullWidth
          required
          value={codigoPostal}
          onChange={(e) => setCodigoPostal(e.target.value)}
        />

        <TextField
          id="email"
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          required
          error={error.error}
          helperText={error.message}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          id="password"
          label="Contraseña"
          type="password"
          variant="outlined"
          fullWidth
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <FormControlLabel
          required
          control={<Checkbox />}
          label="He leído y acepto las condiciones las condiciones de *****"
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Deseo recibir emails y promociones en mi correo electrónico"
        />

        <Button type="submit" variant="outlined" sx={{ mt: 2 }}>
          Crear cuenta
        </Button>
      </Box>
    </>
  );
}
