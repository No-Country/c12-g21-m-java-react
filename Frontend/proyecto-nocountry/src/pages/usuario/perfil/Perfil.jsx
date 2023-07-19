import React from 'react'
import CardProfile from '../../../components/Card/CardProfile'
import './perfil-style.css'
import { useSelector } from 'react-redux'
const Perfil = () => {
  const user = useSelector(state => state.user)
  return (
    <div className='profile-container'><CardProfile user={user}/></div>
  )
}

export default Perfil