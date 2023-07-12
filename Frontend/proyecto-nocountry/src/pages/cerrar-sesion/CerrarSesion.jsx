import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { cerrarSesion } from '../../features/userSlice'
import { useNavigate } from 'react-router-dom'

const CerrarSesion = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        setTimeout(() => {
            dispatch(cerrarSesion())
            navigate('/')
        }, 2000)
    })
  return (
      <div><h2>Cerrando sesion</h2></div>
  )
}

export default CerrarSesion