import CardPublicacion from "../Card/CardPublicacion"
import "../groups/groups.css"


const CardPubliGroup = ({products}) => {

  return (
    <div className="CardPubliGroup d-flex justify-content-center">
      {products.length !== 0 ? products.map((product) => <CardPublicacion product={product} key={product.idProduct} />) : <div><h3>No hay productos publicados</h3></div>}
    </div>
  )
}

export default CardPubliGroup