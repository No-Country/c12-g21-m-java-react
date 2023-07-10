import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './itemDetail/ItemDetail'
import Spinner from '../spinner/Spinner'

const ItemDetailContainer = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [item, setItem] = useState({})
    const {id} = useParams()

    const products = [
        { title: "Mesada Marmol", description: "Lorem ipsum, dolor sit amet", price: 500, img: "", id: 1 },
        { title: "Mesada de Granito", description: "Lorem ipsum, dolor sit amet", price: 500, img: "", id: 2 },
        { title: "Alfombra", description: "Lorem ipsum, dolor sit amet", price: 500, img: "", id: 3 },
        { title: "Lámpara de pie", description: "Lorem ipsum, dolor sit amet", price: 500, img: "", id: 4 },
        { title: "Sofá 2 cuerpos", description: "Lorem ipsum, dolor sit amet", price: 500, img: "", id: 5 },
        { title: "Mesa de comedor", description: "Lorem ipsum, dolor sit amet", price: 500, img: "", id: 6 },
        { title: "Cama 2 plazas", description: "Lorem ipsum, dolor sit amet", price: 500, img: "", id: 7 },
        { title: "Sillón de cuero", description: "Lorem ipsum, dolor sit amet", price: 500, img: "", id: 8 },
        { title: "Mesita de luz", description: "Lorem ipsum, dolor sit amet", price: 500, img: "", id: 10 },
        { title: "Silla de madera", description: "Lorem ipsum, dolor sit amet", price: 500, img: "", id: 9 },
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