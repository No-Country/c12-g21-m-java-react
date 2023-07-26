import React from 'react'
import { useState, useEffect } from "react"
import axios from "axios"
import { useSelector } from "react-redux"
import Spinner from '../../../components/spinner/Spinner'
import CardMisComprasGroup from '../../../components/groups/CardMisComprasGroup'

const MisCompras = () => {
    const user = useSelector(state => state.user)
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        setIsLoading(true)
        axios.get(`https://c12-21-m-java-react-ecommerce.onrender.com/sales/buyedlist/${user.idUser}`,
            {
                headers: {
                    Authorization: `Bearer ${user.jwtToken}`,
                }
            })
            .then(response => { setProducts(response.data) })
            .catch(error => console.log(error))
        setTimeout(() => {
            setIsLoading(false)
        }, 2000)
    }, [])
    return (
        <div className='w-100 d-flex justify-content-center'>
            {isLoading ? <div className=' mt-5'><Spinner /></div> : <CardMisComprasGroup products={products} />}
        </div>
    )
}

export default MisCompras