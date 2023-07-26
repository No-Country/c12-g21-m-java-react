/* eslint-disable react/prop-types */
import {
  AppBar,
  Box,
  Tab,
  Tabs,
  Toolbar,
} from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import { theme } from "../../assets/styles";

export default function Navbar({ navLinks }) {

  const location = useLocation();
  const isMobile = useMediaQuery("(max-width: 767px)");
 
  return (
    <>
      {!isMobile && (
        <AppBar
          position="sticky"
          sx={{
            backgroundColor: theme.palette.background.main,
            boxShadow: "1px 0px 1px 1px",
          }}
        >
          <Toolbar>           
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
                    item.title === "Login" ||
                    item.title === "Logout" ||
                    item.title === "Crear Cuenta" ||
                    item.title === "Mi perfil"
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
          </Toolbar>
        </AppBar>
      )}     
    </>
  );
}