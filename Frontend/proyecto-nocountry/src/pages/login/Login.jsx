import { useState } from 'react';
import { Box, Button, Container, TextField, Typography } from '@mui/material';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {    
    console.log('Usuario:', username);
    console.log('Contraseña:', password);    
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: '3rem', textAlign: 'center' }}>
        <Typography variant="h4">Inicio de sesión</Typography>
      </Box>
      <Box sx={{ mt: '2rem' }}>
        <TextField
          label="Usuario"
          variant="outlined"
          value={username}
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
        <Button variant="contained" onClick={handleLogin} fullWidth>
          Iniciar sesión
        </Button>
      </Box>
    </Container>
  );
}
