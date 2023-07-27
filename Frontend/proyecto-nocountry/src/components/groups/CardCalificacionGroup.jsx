
import CardCalificacion from "../Card/CardCalificacion"
import "../groups/groups.css"

const CardCalificacionGroup = ({ products }) => {
    return (
        <div className="cardProdVendidosGroup d-flex justify-content-center">
            {products.length !== 0 ? products.map((product, key) => <CardCalificacion product={product} key={key} />) : <div><h3>No hay calificaciones</h3></div>}
        </div>
    )
}

export default CardCalificacionGroup