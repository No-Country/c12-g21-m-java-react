import { Box, Rating, Link } from "@mui/material"

const CardCalificacion = () => {
    return (
        <div>
            <Box className="card-box-Calif" sx={{ bgcolor: "#d9d9d9", width: "470px", height: "218px", margin: "4rem 0" }}>
                <b>Promedio de 4,8 puntos de 5 recibidos.</b>
                <Rating name="half-rating-read" defaultValue={4.6} precision={0.1} readOnly />
                <Link className="card-box-link" href="#" underline="always" sx={{ color: "black", fontSize: ".75rem", gridArea: "link", textAlign: "end"}}>
                    {'Ver detalles'}
                </Link>
            </Box>
        </div>
    )
}

export default CardCalificacion