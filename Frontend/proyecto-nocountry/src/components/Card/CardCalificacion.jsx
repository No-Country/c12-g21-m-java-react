import { Box, Rating, Link, Button } from "@mui/material"

const CardCalificacion = ({ product }) => {
    return (
        <div>
            <Box className="card-box" >
                <div className="d-flex flex-column" >
                    <b>Número de reserva: {product.idSale}</b>
                    <Rating name="read-only" defaultValue={product.ratingValue} readOnly />
                    <p>Reseña: </p>
                    <p>{product.review}</p>
                </div>

            </Box>
        </div>
    )
}

export default CardCalificacion