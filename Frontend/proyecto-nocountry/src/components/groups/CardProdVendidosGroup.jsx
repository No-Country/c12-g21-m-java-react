import CardProdVendidos from "../Card/CardProdVendidos"
import "../groups/groups.css"

const CardProdVendidosGroup = ({products}) => {
  return (
    <div className="cardProdVendidosGroup d-flex justify-content-center">
      {products.length !== 0 ? products.map((product, key) => <CardProdVendidos product={product} key={key} />) : <div><h3>No hay productos</h3></div>}
    </div>
  )
}

export default CardProdVendidosGroup