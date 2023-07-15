import { Button, Drawer } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NavListDrawer from '../navbar/NavListDrawer'
import { NavLink } from 'react-router-dom'
import ProductosVendidos from '../../pages/productosVendidos/ProductosVendidos'
import { cerrarSesion } from '../../features/userSlice'

const UserBadge = () => {
    const [open, setOpen] = useState(false);
    const navLinks = [
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
    console.log(user)
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