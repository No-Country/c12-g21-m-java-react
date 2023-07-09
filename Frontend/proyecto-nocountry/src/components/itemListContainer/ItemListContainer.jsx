import React, { useEffect, useState } from 'react'
import Spinner from '../spinner/Spinner'
import ItemList from './itemList/ItemList'

const ItemListContainer = () => {
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)


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
        setItems(products)
        setTimeout(() => {
            setIsLoading(false)
        }, 2000)
    }, [])

    return (
        <div className='d-flex justify-content-center  w-100'>
            {isLoading ? <Spinner /> : <div className='w-100'><ItemList items={items} /></div>}
        </div>
    )
}

export default ItemListContainer