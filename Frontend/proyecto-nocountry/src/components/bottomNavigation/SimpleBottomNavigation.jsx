/* eslint-disable react/prop-types */
import * as React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

export default function SimpleBottomNavigation({ navLinks }) {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 460 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        {navLinks.map((link, index) => (
          <BottomNavigationAction
            key={index}
            label={link.title}
            icon={link.icon}
            component={Link}
            to={link.title === "Mi perfil" ? null : link.path}
          />
        ))}
      </BottomNavigation>
    </Box>
  );
}
