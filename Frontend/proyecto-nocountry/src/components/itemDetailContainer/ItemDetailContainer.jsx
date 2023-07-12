import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './itemDetail/ItemDetail'
import Spinner from '../spinner/Spinner'

const ItemDetailContainer = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [item, setItem] = useState({})
    const {id} = useParams()

    const products = [
        { title: "Mesada Marmol", description: "Lorem ipsum, dolor sit amet", price: 1500, img: "", id: 1, category: "Mesadas", ambient: "Living", condition: "Buena" },
        { title: "Mesada de Granito", description: "Lorem ipsum, dolor sit amet", price: 2500, img: "", id: 2, category: "Mesadas", ambient: "Living", condition: "Muy buena" },
        { title: "Alfombra", description: "Lorem ipsum, dolor sit amet", price: 3500, img: "", id: 3, category: "Accesorios", ambient: "Living", condition: "Excelente" },
        { title: "Lámpara de pie", description: "Lorem ipsum, dolor sit amet", price: 4500, img: "", id: 4, category: "Accesorios", ambient: "Dormitorio", condition: "Buena" },
        { title: "Sofá 2 cuerpos", description: "Lorem ipsum, dolor sit amet", price: 5500, img: "", id: 5, category: "Muebles", ambient: "Living", condition: "Muy buena" },
        { title: "Mesa de comedor", description: "Lorem ipsum, dolor sit amet", price: 6500, img: "", id: 6, category: "Muebles", ambient: "Comedor", condition: "Excelente" },
        { title: "Cama 2 plazas", description: "Lorem ipsum, dolor sit amet", price: 7500, img: "", id: 7, category: "Muebles", ambient: "Dormitorio", condition: "Buena" },
        { title: "Sillón de cuero", description: "Lorem ipsum, dolor sit amet", price: 8500, img: "", id: 8, category: "Muebles", ambient: "Living", condition: "Muy buena" },
        { title: "Mesita de luz", description: "Lorem ipsum, dolor sit amet", price: 9500, img: "", id: 10, category: "Muebles", ambient: "Dormitorio", condition: "Excelente" },
        { title: "Silla de madera", description: "Lorem ipsum, dolor sit amet", price: 10500, img: "", id: 9, category: "Muebles", ambient: "Comedor", condition: "Buena" },
    ]

    useEffect(() => {
        let product = products.find(prod => prod.id === parseInt(id))
        setItem(product)
        setTimeout(() => {
            setIsLoading(false)
        }, 2000)
    }, [])

  return (
      <div className='position-absolute d-flex justify-content-center  w-100' style={{left: 0}}>
          {isLoading ? <Spinner /> : <div className='container d-flex justify-content-center'><ItemDetail item={item} key={item.id} /></div>}
      </div>
  )
}

export default ItemDetailContainer