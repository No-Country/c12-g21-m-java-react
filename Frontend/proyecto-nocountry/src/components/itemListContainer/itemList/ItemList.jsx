import React from 'react'
import Item from './item/Item'

const ItemList = ({ items }) => {
  return (
    <div>
      <h1>Productos</h1>
      <div className='w-100 d-flex justify-content-around flex-wrap'>
        {items.length !== 0 ? items.map((item) => <Item title={item.title} price={item.price} description={item.description} img={item.img} id={item.id} key={item.id} />) : <div><h3>No hay coincidencias con su búsqueda</h3></div>}
      </div>
    </div>
  )
}

export default ItemList