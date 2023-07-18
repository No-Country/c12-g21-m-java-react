import { Button, Drawer } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NavListDrawer from '../navbar/NavListDrawer'
import { NavLink } from 'react-router-dom'


const UserBadge = () => {
    const [open, setOpen] = useState(false);
    const navLinks = [
        {
            title: "Mi perfil",
            path: "/profile",
            icon: ''
        },
        {
            title: "Mis productos publicados",
            path: "/ProductosVendidos",
            icon: "",
        },
        {
            title: "Cerrar sesión",
            path: "/cerrarsesion",
            icon: "",
        },
        
    ];


    const user = useSelector(state => state.user)
  return (
      <div >{user?.logueado && <Button onClick={() => setOpen(true)} variant="contained">{user.name} {user.surname}</Button>} 
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