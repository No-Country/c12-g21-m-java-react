import { Box, Link } from "@mui/material"
import BorderColorIcon from '@mui/icons-material/BorderColor';
const CardProdVendidos = ({ product }) => {
    return (
        <div>
            <Box className="card-box" >
                <div style={{ gridArea: "left" }}>
                    <b>Detalle de producto: </b>
                    <p>Id de venta: {/* {product.idSale} */}</p>
                    <p>Fecha de venta: {/* {product.saleDate} */}</p>
                    <div className="d-flex flex-column justify-content-around">
                        <b>Estado del producto: </b>
                        <button className="card-button">Reservado</button>
                        <Link href="#" style={{color: "black", fontSize: "0.8em"}}>
                            <p style={{margin: 0}}>Cancelar reserva</p>
                        </Link>
                    </div>
                </div>
                <div style={{gridArea: "right", alignSelf: "end"}}>
                    <button className="card-button">Notas con el comprador <BorderColorIcon sx={{fontSize: "1.2em"}}></BorderColorIcon></button>
                </div>

            </Box>
        </div>
    )
}

export default CardProdVendidos