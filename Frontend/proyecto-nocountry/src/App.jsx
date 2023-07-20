import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Compras from "./pages/compras/Compras.jsx";
import Login from "./pages/login/Login.jsx";
import Vender from "./pages/vender/Vender.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Registro from "./pages/registro/Registro.jsx";
import HomeIcon from "@mui/icons-material/Home";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer.jsx";
import AcordarCompra from "./pages/acordar-compra/AcordarCompra.jsx";
import CerrarSesion from "./pages/cerrar-sesion/CerrarSesion.jsx";
import { useSelector } from "react-redux";
import Header from "./components/header/Header.jsx";
import LoginRegistro from "./pages/login-registro/LoginRegistro.jsx";
import ProductosPublicados from "./pages/usuario/productosPublicados/ProductosPublicados.jsx";
import Perfil from "./pages/usuario/perfil/Perfil.jsx";
import ProductosVendidos from "./pages/usuario/productosVendidos/ProductosVendidos.jsx";
import Calificaciones from "./pages/usuario/calificaciones/Calificaciones.jsx";

const App = () => {
  const logueado = useSelector((state) => state.user.logueado);

  const navLinks = [
    {
      title: "Inicio",
      path: "/",
      icon: <HomeIcon />,
    },
    {
      title: "Vender",
      path: logueado ? "/vender" : "/login-registro",
      icon: <MonetizationOnIcon />,
    },
    {
      title: "Comprar",
      path: "/compras",
      icon: <StorefrontIcon />,
    },
  ];

  return (
    <>
      <Header />
      <Navbar navLinks={navLinks} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/compras" element={<Compras />} />
        <Route path="/vender" element={<Vender />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/detail/:id" element={<ItemDetailContainer />} />
        <Route path="/acordar-compra" element={<AcordarCompra />} />
        <Route path="/cerrarsesion" element={<CerrarSesion />} />
        <Route path="/login-registro" element={<LoginRegistro />} />
        <Route path="/usuario/perfil" element={<Perfil />} />
        <Route
          path="/usuario/productosPublicados"
          element={<ProductosPublicados />}
        />
        <Route
          path="/usuario/productosVendidos"
          element={<ProductosVendidos />}
        />
        <Route path="/usuario/calificaciones" element={<Calificaciones />} />
      </Routes>
    </>
  );
};

export default App;
