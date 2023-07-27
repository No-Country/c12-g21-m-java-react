import Item from './item/Item'

const ItemList = ({ items }) => {
  return (
    <div>
      <div className='w-100 d-flex justify-content-center flex-wrap'>
        {items.length !== 0 ? items.map((item) => <Item item={item} key={item.id} />) : <div><h3>No hay coincidencias con su búsqueda</h3></div>}
      </div>
    </div>
  )
}

export default ItemList