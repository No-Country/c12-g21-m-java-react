import { Button, Drawer, useMediaQuery } from "@mui/material";
import { useState } from "react";
import NavListDrawer from "../navbar/NavListDrawer";
import { NavLink } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const UserBadge = () => {
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 767px)");
  const navLinks = [
    {
      title: "Mi datos personales",
      path: "usuario/perfil",
      icon: "",
    },
    {
      title: 'Mis compras',
      path: "usuario/miscompras",
      icon: ""
    },  
    {
      title: "Mis productos publicados",
      path: "/usuario/productosPublicados",
      icon: "",
    },
    {
      title: "Mis productos vendidos",
      path: "/usuario/productosVendidos",
      icon: "",
    },
    {
      title: "Mis Calificaciones",
      path: "/usuario/calificaciones",
      icon: "",
    },
    {
      title: "Cerrar sesión",
      path: "/cerrarsesion",
      icon: "",
    },
  ];

  const handleCloseDrawer = () => {
    setOpen(false);
  };
  return (
    <div>
      {isMobile ? (
        <>
          <AccountCircleIcon onClick={() => setOpen(true)} />
          <Drawer anchor="right" open={open} onClose={handleCloseDrawer}>
            <NavListDrawer
              navLinks={navLinks}
              NavLink={NavLink}
              setOpen={setOpen}
            />
          </Drawer>
        </>
      ) : (
        <>
          <Button
            onClick={() => setOpen(true)}
            variant="contained"
            sx={{ background: "#fff", borderRadius: "2em" }}
          >
            Mi perfil
          </Button>
          <Drawer anchor="right" open={open} onClose={handleCloseDrawer}>
            <NavListDrawer
              navLinks={navLinks}
              NavLink={NavLink}
              setOpen={setOpen}
            />
          </Drawer>
        </>
      )}
    </div>
  );
};

export default UserBadge;
