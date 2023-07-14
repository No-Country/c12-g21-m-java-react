import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './itemDetail/ItemDetail'
import Spinner from '../spinner/Spinner'
import { getProductById } from '../../firebase/functions'

const ItemDetailContainer = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [item, setItem] = useState({})
    const {id} = useParams()

 

    useEffect(() => {
        getProductById(id).then(product => setItem(product))

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