import { Button } from "@mui/material";
import "./header-style.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const logueado = useSelector((state) => state.user.logueado);

  const navigate = useNavigate();

  const handleSesion = () => {
    navigate("/login");
  };

  const handleActionToHome = () => {
    navigate("/");
  };

  return (
    <div className="header-container">
      <Button
        className="header-logo"
        variant="contained"
        onClick={handleActionToHome}
      >
        LOGO
      </Button>
      <div
        style={{
          display: "flex",
          flexGrow: 1,
          justifyContent: "flex-end",
        }}
      >
        {!logueado ? (
          <Button
            className="header-sesion"
            variant="contained"
            onClick={handleSesion}
          >
            Iniciar sesión
          </Button>
        ) : (
          <Button
            variant="contained"
            onClick={() => navigate("/cerrarSesion")}
            sx={{ whiteSpace: "nowrap", minWidth: "auto" }}
          >
            Cerrar Sesión
          </Button>
        )}
      </div>
    </div>
  );
};

export default Header;
