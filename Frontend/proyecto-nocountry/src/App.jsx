import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Compras from "./pages/compras/Compras.jsx";
import Login from "./pages/login/Login.jsx";
import Ventas from "./pages/ventas/Ventas.jsx";
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

const navLinks = [
  {
    title: "Home",
    path: "/",
    icon: <HomeIcon />,
  },
  {
    title: "Ventas",
    path: "/ventas",
    icon: <MonetizationOnIcon />,
  },
  {
    title: "Compras",
    path: "/compras",
    icon: <StorefrontIcon />,
  },
  {
    title: "Login",
    path: "/login",
    icon: <LoginIcon />,
  },
  {
    title: "Registrarse",
    path: "/registro",
    icon: <AppRegistrationIcon />,
  },
];

const App = () => {
  return (
    <>
      <Navbar navLinks={navLinks} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/compras" element={<Compras />} />
        <Route path="/ventas" element={<Ventas />} />
        <Route path="/vender" element={<Vender />} />
        <Route path="/productosVendidos" element={<ProductosVendidos />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/detail/:id" element={<ItemDetailContainer />} />
        <Route path="/acordar-compra" element={<AcordarCompra />} />
        <Route path='/cerrarsesion' element={<CerrarSesion />} />
      </Routes>
    </>
  );
};

export default App;
