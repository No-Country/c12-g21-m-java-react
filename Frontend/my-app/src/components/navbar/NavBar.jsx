import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Link className="navbar-list-link" to="/">
        Inicio
      </Link>
      <Link className="navbar-list-link" to="/login">
        Login
      </Link>
      <Link className="navbar-list-link" to="/compras">
        Compras
      </Link>
      <Link className="navbar-list-link" to="/ventas">
        Ventas
      </Link>
    </>
  );
};

export default NavBar;
