import CardMisCompras from "../Card/CardMisCompras"
import "../groups/groups.css"

const CardMisComprasGroup = ({ products }) => {
    return (
        <div className="cardProdVendidosGroup d-flex justify-content-center">
            {products.length !== 0 ? products.map((product, key) => <CardMisCompras product={product} key={key} />) : <div><h3>No hay productos</h3></div>}
        </div>
    )
}

export default CardMisComprasGroup