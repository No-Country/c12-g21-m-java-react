import { useEffect, useState } from 'react';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { loguearse } from '../../features/userSlice';
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleUsernameChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };


  const handleLogin = () => {
    console.log(user)
    const usuario = {
      email: email || "",
      password: password || ""
    };
    if (usuario.email === user.email && usuario.password === user.password) {
      dispatch(loguearse())
      navigate("/");
    } else {
      setError('false')
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: '3rem', textAlign: 'center' }}>
        <Typography variant="h4">Inicio de sesión</Typography>
      </Box>
      <Box sx={{ mt: '2rem' }}>
        <TextField
          label="Email"
          variant="outlined"
          value={email}
          type='email'
          onChange={handleUsernameChange}
          fullWidth
          sx={{ marginBottom: '1rem' }}
        />
        <TextField
          label="Contraseña"
          variant="outlined"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          fullWidth
          sx={{ marginBottom: '1rem' }}
        />
        <Button submit='submit' variant="contained" onClick={handleLogin} fullWidth>
          Iniciar sesión
        </Button>
      </Box>
      {error ? <p>Usuario y/o contraseña incorrectos</p> : ""}
    </Container>
  );
}
