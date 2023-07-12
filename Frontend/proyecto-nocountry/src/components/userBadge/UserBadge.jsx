import { Button, Drawer } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NavListDrawer from '../navbar/NavListDrawer'
import { NavLink } from 'react-router-dom'
import { cerrarSesion } from '../../features/userSlice'

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
            path: "/cerrarsesion",
            icon: "",
        },
        
    ];

    const handleClick = () => {
        dispatch(cerrarSesion())
    }
    const user = useSelector(state => state.user)

  return (
      <div >{user?.logueado && <Button onClick={() => setOpen(true)} variant="contained">{user.nombre} {user.apellido}</Button>} 
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