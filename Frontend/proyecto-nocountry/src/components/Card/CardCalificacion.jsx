import { Box, Rating, Link, Button } from "@mui/material"

const CardCalificacion = ({ product }) => {
    return (
        <div>
            <Box className="card-box" >
                <div>
                    <b>Mis calificaciones</b>
                    <p>Número de publicación: {product?.idSale}</p>
                    <Rating name="read-only" defaultValue={product.ratingValue} readOnly />
                    <p>Reseña: </p>
                    <p>{product.review}</p>
                </div>

            </Box>
        </div>
    )
}

export default CardCalificacion