import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Compras from "./pages/compras/Compras.jsx";
import Login from "./pages/login/Login.jsx";
import Vender from "./pages/vender/Vender.jsx";
import ProductosVendidos from "./pages/productosVendidos/ProductosVendidos.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Registro from "./pages/registro/Registro.jsx";
import HomeIcon from "@mui/icons-material/Home";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import StorefrontIcon from "@mui/icons-material/Storefront";
import LoginIcon from "@mui/icons-material/Login";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer.jsx";
import AcordarCompra from "./pages/acordar-compra/AcordarCompra.jsx";
import CerrarSesion from "./pages/cerrar-sesion/CerrarSesion.jsx";
import { useSelector } from "react-redux";
import LogoutIcon from "@mui/icons-material/Logout";
import Header from "./components/header/Header.jsx";
import LoginRegistro from "./pages/login-registro/LoginRegistro.jsx";
import Profile from "./pages/profile/Profile.jsx";

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
      path: "/vender",
      icon: <MonetizationOnIcon />,
    },
    {
      title: "Comprar",
      path: "/compras",
      icon: <StorefrontIcon />,
    },
    {
      title: logueado ? "Logout" : "Login",
      path: logueado ? "/cerrarSesion" : "/login-registro",
      icon: logueado ? <LogoutIcon /> : <LoginIcon />,

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
        <Route path="/productosVendidos" element={<ProductosVendidos />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/detail/:id" element={<ItemDetailContainer />} />
        <Route path="/acordar-compra" element={<AcordarCompra />} />
        <Route path="/cerrarsesion" element={<CerrarSesion />} />
        <Route path="/login-registro" element={<LoginRegistro/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </>
  );
};

export default App;
