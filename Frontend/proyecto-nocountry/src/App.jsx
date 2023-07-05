import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Compras from "./pages/compras/Compras.jsx";
import Login from "./pages/login/Login.jsx";
import Ventas from "./pages/ventas/Ventas.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import HomeIcon from "@mui/icons-material/Home";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import StorefrontIcon from "@mui/icons-material/Storefront";
import LoginIcon from "@mui/icons-material/Login";

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
];

const App = () => {
  return (
    <>
      <Navbar navLinks={navLinks} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/compras" element={<Compras />} />
        <Route path="/ventas" element={<Ventas />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;