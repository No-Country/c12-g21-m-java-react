import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Tab,
  Tabs,
  Toolbar,
} from "@mui/material";
import NavListDrawer from "./NavListDrawer";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import FavoriteBadge from "../favoriteBadge/FavoriteBadge";
import UserBadge from "../userBadge/UserBadge";
import { useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import { theme } from "../../assets/styles";

export default function Navbar({ navLinks }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isMobile = useMediaQuery("(max-width: 767px)");
  const logueado = useSelector((state) => state.user.logueado);

  return (
    <>
      <AppBar position="sticky" sx={{backgroundColor: theme.palette.background.main, boxShadow: "1px 0px 1px 1px"}}>
        <Toolbar>
          <IconButton
            color="inherit"
            size="large"
            onClick={() => setOpen(true)}
            sx={{ display: { sx: "flex", sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            display="flex"
            alignItems="center"
            flexGrow={1}
            justifyContent="flex-start"
            sx={{ display: { xs: "none", sm: "flex" } }}
          >
            <Tabs
              value={location.pathname}
              textColor="inherit"
              variant="scrollable"
              scrollButtons="auto"
              indicatorColor="primary"
              TabIndicatorProps={{
                style: {
                  height: 3,
                  top: "-1.6px",
                  backgroundColor: "black",
                },
              }}
            >
              {navLinks.map((item) => {
                if (
                  item.title === "Iniciar Sesión" ||
                  item.title === "Cerrar Sesión" ||
                  item.title === "Crear Cuenta"
                ) {
                  return null;
                }
                return (
                  <Tab
                    key={item.title}
                    label={item.title}
                    value={item.path}
                    component={NavLink}
                    to={item.path}
                    style={{ margin: "0 30px" }}
                  />
                );
              })}
            </Tabs>
          </Box>
          {isMobile && logueado && (
            <div style={{position: "absolute", right: 0}}>
              <UserBadge />
            </div>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        open={open}
        anchor="left"
        onClose={() => setOpen(false)}
        sx={{ display: { sx: "flex", sm: "none" } }}
      >
        <NavListDrawer
          navLinks={navLinks}
          NavLink={NavLink}
          setOpen={setOpen}
        />
      </Drawer>
    </>
  );
}

Navbar.propTypes = {
  navLinks: PropTypes.array.isRequired,
};
