import { Button, Drawer } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavListDrawer from "../navbar/NavListDrawer";
import { NavLink } from "react-router-dom";

const UserBadge = () => {
  const [open, setOpen] = useState(false);
  const navLinks = [
    {
      title: "Mi datos personales",
      path: "usuario/perfil",
      icon: "",
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
      path: "/cerrarSesion",
      icon: "",
    },
  ];

  const user = useSelector((state) => state.user);
  return (
    <div>
      {user?.logueado && (
        <Button
          onClick={() => setOpen(true)}
          variant="contained"
          sx={{ background: "#fff", borderRadius: "2em" }}
        >
          Mi perfil
        </Button>
      )}
      <Drawer open={open} anchor="right" onClose={() => setOpen(false)}>
        <NavListDrawer
          navLinks={navLinks}
          NavLink={NavLink}
          setOpen={setOpen}
        />
      </Drawer>
    </div>
  );
};

export default UserBadge;
