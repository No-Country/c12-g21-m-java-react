import React, { useEffect, useState } from 'react'
import Spinner from '../spinner/Spinner'
import ItemList from './itemList/ItemList'

const ItemListContainer = ({products}) => {
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        setIsLoading(true)
        setTimeout(() => {
            setItems([...products])
            setIsLoading(false)
        }, 2000)
    }, [products])

    return (
        <div className='d-flex justify-content-center  w-100'>
            {isLoading ? <Spinner /> : <div className='w-100'><ItemList items={items} /></div>}
        </div>
    )
}

export default ItemListContainer