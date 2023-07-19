import { AppBar, Box, Drawer, IconButton, Tab, Tabs, Toolbar, useTheme } from "@mui/material";
import NavListDrawer from "./NavListDrawer";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import FavoriteBadge from "../favoriteBadge/FavoriteBadge";
import UserBadge from "../userBadge/UserBadge";
import { useMediaQuery } from "@mui/material";

export default function Navbar({ navLinks }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <>
      <AppBar position="sticky">
        <Toolbar >
          <IconButton
            color="inherit"
            size="large"
            onClick={() => setOpen(true)}
            sx={{ display: { sx: "flex", sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box display="flex" flexGrow={1} justifyContent="flex-start" sx={{ display: { xs: "none", sm: "flex" }}}>
            <Tabs
              value={location.pathname}
              textColor="inherit"
              variant="scrollable"
              scrollButtons="auto"
              indicatorColor="primary"

              TabIndicatorProps={{
                style: {
                  height: 2,
                  top: "-1.6px",
                  backgroundColor: "white",

                },

              }}
            >
              {navLinks.map((item) => (
                item.path == "/login-registro" || item.path == "/cerrarSesion"? 
                <Tab
                  key={item.title}
                  label={item.title}
                  value={item.path}
                  component={NavLink}
                  to={item.path}
                  style={{ display: "none" }}
                />
                :
                  <Tab
                    key={item.title}
                    label={item.title}
                    value={item.path}
                    component={NavLink}
                    to={item.path}
                    style={{ margin: "0 30px" }}
                  />
              ))}
            </Tabs>
          </Box>
          {isMobile && <div ><UserBadge /></div>}
          <FavoriteBadge />
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


