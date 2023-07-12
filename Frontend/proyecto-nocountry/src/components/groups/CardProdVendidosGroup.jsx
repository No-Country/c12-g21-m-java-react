import CardProdVendidos from "../Card/CardProdVendidos"
import "../groups/groups.css"

const CardProdVendidosGroup = () => {
  return (
    <div className="cardProdVendidosGroup">
        <CardProdVendidos/>
        <CardProdVendidos/>
        <CardProdVendidos/>
    </div>
  )
}

export default CardProdVendidosGroup