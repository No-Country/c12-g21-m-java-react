import CardProdVendidos from "../Card/CardProdVendidos"
import "../groups/groups.css"

const CardProdVendidosGroup = ({products}) => {
  return (
    <div className="cardProdVendidosGroup">
      {products.length !== 0 ? products.map((product) => <CardProdVendidos product={product} key={product.idProduct} />) : <div><h3>No hay productos vendidos</h3></div>}
    <CardProdVendidos/>
    </div>
  )
}

export default CardProdVendidosGroup