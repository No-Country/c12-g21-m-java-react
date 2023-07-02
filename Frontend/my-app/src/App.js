import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Compras from "./pages/compras/Compras.jsx";
import Login from "./pages/login/Login.jsx";
import Ventas from "./pages/ventas/Ventas.jsx";
import NavBar from "./components/Navbar/NavBar.jsx";

const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/compras" element={<Compras />} />
          <Route path="/ventas" element={<Ventas />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
