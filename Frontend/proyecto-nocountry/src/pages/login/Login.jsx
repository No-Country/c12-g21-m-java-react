import { useState } from "react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { loguearse } from "../../features/userSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
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
    
    if (!email.trim() || !password.trim()) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 5000);
      return; 
    }

    const usuario = {
      username: email,
      password: password,
    };

    axios
      .post("https://c12-21-m-java-react-ecommerce.onrender.com/login", usuario)
      .then((response) => {        
        const token = response.data.jwtToken;
        axios
          .post(
            "https://c12-21-m-java-react-ecommerce.onrender.com/users/profile",
            {
              email: usuario.username,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          )
          .then((response) => {           
            dispatch(loguearse({ ...response.data, jwtToken: token }));
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
            setError(true);
            setTimeout(() => {
              setError(false);
            }, 5000);
          });
      })
      .catch((error) => {
        console.log(error);
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 5000);
      });
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: "3rem", textAlign: "center" }}>
        <Typography variant="h4">Inicio de sesión</Typography>
      </Box>
      <Box sx={{ mt: "2rem", display: "flex", flexDirection: "column", alignItems: "center"  }}>
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
        <Button variant="contained" onClick={handleLogin} fullWidth>
          Iniciar sesión
        </Button>

        {error && <p>Usuario y/o contraseña incorrectos</p>}

        <Typography variant="body2" paddingTop={"3rem"}>
          Si no estás registrado, crea tu cuenta ahora!
        </Typography>
        <Button
          variant="contained"
          onClick={() => {
            navigate("/registro");
          }}
        >
          Crear cuenta
        </Button>
      </Box>
    </Container>
  );
}
