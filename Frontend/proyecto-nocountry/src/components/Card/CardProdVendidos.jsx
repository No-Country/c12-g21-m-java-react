import { Box, Link } from "@mui/material"

const CardProdVendidos = () => {
    return (
        <div>
            <Box className="card-box-profile" sx={{ bgcolor: "#d9d9d9", width: "470px", height: "176px"}}>
                <b>Detalle de producto: </b>
                <p>Número de publicación #00001</p>
                <p>Precio $0,000</p>
                <b>Producto entregado el 00/00/000</b>
                <Link className="card-box-link" href="#" underline="always" sx={{ color: "black", fontSize: ".75rem", gridArea: "link", textAlign: "end"}}>
                    {'Ver detalles'}
                </Link>
            </Box>
        </div>
    )
}

export default CardProdVendidos