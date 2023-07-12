import { Button, Drawer } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import NavListDrawer from '../navbar/NavListDrawer'
import { NavLink } from 'react-router-dom'
const UserBadge = () => {
    const [open, setOpen] = useState(false);
    const navLinks = [
        {
            title: "Mis productos publicados",
            path: "/",
            icon: "",
        },
        {
            title: "Cerrar sesión",
            path: "/ventas",
            icon: "",
        },
        
    ];
    const user = useSelector(state => state.registro.user)
  return (
      <div >{user && <Button onClick={() => setOpen(true)} variant="contained">{user.nombre} {user.apellido}</Button>} 
          <Drawer
              open={open}
              anchor="right"
              onClose={() => setOpen(false)}
             
          >
              <NavListDrawer
                  navLinks={navLinks}
                  NavLink={NavLink}
                  setOpen={setOpen}
              />
          </Drawer>
      </div>
  )
}

export default UserBadge