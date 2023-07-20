import { useState } from "react";
import { Button, Typography } from "@mui/material";
import Registro from "../registro/Registro";
import Login from "../login/Login";
import "./login-registro-style.css";

const LoginRegistro = () => {
  const [registerActive, setRegisterActive] = useState(false);

  return (
    <div className="login-registro-container">
      {registerActive ? (
        <>
          <Registro />

          <Button
            className="login-registro-button"
            variant="contained"
            onClick={() => {
              setRegisterActive(false);
            }}
            sx={{ whiteSpace: "nowrap", minWidth: "auto", margin: "1rem" }}
          >
            Volver a Inicio de Sesión
          </Button>
        </>
      ) : (
        <>
          <Login />
          <Typography
            variant="body2"
            className="register-info-text"
            paddingTop={"3rem"}
          >
            Si no estás registrado, crea tu cuenta ahora!
          </Typography>
          <Button
            className="login-registro-button"
            variant="contained"
            onClick={() => {
              setRegisterActive(true);
            }}
          >
            Crear cuenta
          </Button>
        </>
      )}
    </div>
  );
};

export default LoginRegistro;
