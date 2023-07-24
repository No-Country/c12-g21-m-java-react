import { Button } from "@mui/material";
import "./header-style.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Logo from '../../assets/img/logo.png'
import UserBadge from "../userBadge/UserBadge";
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
        onClick={handleActionToHome}
      >
        <img className="header-logo" src={Logo} alt="logo"/>
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
            sx={{ background: "#fff", borderRadius: "2em" }}
          >
            Iniciar sesión
          </Button>
        ) : (
          <UserBadge/>
        )}
      </div>
    </div>
  );
};

export default Header;
