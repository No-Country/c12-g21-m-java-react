import React from 'react'
import { Button } from '@mui/material'
import './header-style.css'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import UserBadge from '../userBadge/UserBadge'
const Header = () => {
    const logueado = useSelector((state) => state.user.logueado);

    const navigate = useNavigate();

    const handleSesion = () => {
        navigate('/login-registro')
    }

    return (
        <div className='header-container'>
            <Button className='header-logo' variant='contained'>LOGO</Button>
            <div style={{display: "flex", width: "20em", justifyContent: "space-around"}}>
                {!logueado ? <Button className="header-sesion" variant='contained' onClick={handleSesion}>Iniciar sesión</Button> : <Button variant='contained' onClick={() => navigate('/cerrarSesion')}>Logout</Button>}
                {logueado && <UserBadge />}
            </div>
        </div>
    )
}

export default Header