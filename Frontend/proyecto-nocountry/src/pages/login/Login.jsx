import { useState } from "react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { loguearse } from "../../features/userSlice";
import { useNavigate } from "react-router-dom";
import { getUserByEmail } from '../../firebase/functions';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  // const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleLogin();
    }
  };
  
  const handleLogin = () => {
    const usuario = {
      email: email || "",
      password: password || "",     
    };   

    let usuarioExistente
    getUserByEmail(usuario.email).then(data => {
      usuarioExistente = data
      console.log(usuarioExistente)
      if (usuarioExistente?.password === usuario.password) {
        dispatch(loguearse(usuarioExistente))
        navigate("/");
      } else {
        setError(true)
        setTimeout(() => {
          setError(false)
        }, 5000)
      }
    })

  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: "3rem", textAlign: "center" }}>
        <Typography variant="h4">Inicio de sesión</Typography>
      </Box>
      <Box sx={{ mt: "2rem" }}>
        <TextField
          required
          label="Email"
          variant="outlined"
          value={email}
          type="email"
          onChange={handleUsernameChange}
          fullWidth
          sx={{ marginBottom: "1rem" }}
        />
        <TextField
          required
          label="Contraseña"
          variant="outlined"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          onKeyDown={handleKeyDown}
          fullWidth
          sx={{ marginBottom: "1rem" }}
        />
        <Button
          submit="submit"
          variant="contained"
          onClick={handleLogin}
          fullWidth
        >
          Iniciar sesión
        </Button>
      </Box>
      {error ? <p>Usuario y/o contraseña incorrectos</p> : ""}
    </Container>
  );
}
