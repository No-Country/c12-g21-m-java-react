import {useState} from 'react'
import {Button} from '@mui/material'
import Registro from '../registro/Registro'
import Login from '../login/Login'
import './login-registro-style.css'
const LoginRegistro = () => {
  
    const [registerActive, setRegisterActive] = useState(true)

    return (
    <div className='login-registro-container'>
        <h1>Nombre de la empresa</h1>
        <Button className='login-registro-button' variant={registerActive ? 'outlined' : 'contained'} onClick={() => {setRegisterActive(false)}} >Iniciar sesión</Button>
            <Button className='login-registro-button'  variant={registerActive ? 'contained' : 'outlined'} onClick={() => setRegisterActive(true)} >Crear cuenta</Button> 

        {registerActive ? <Registro /> : <Login/>}
    </div>
  )
}

export default LoginRegistro