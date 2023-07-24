import { Box } from "@mui/material"

import { theme } from "../../assets/styles";


const CardPublicacion = ({ product }) => {

    return (
        <div className="card-publicacion">
            <Box className="card-box">
                <div style={{ gridArea: "left" }}>
                    <h5>Detalle de producto: </h5>
                    <p>{product.title}</p>
                    <p>Id del producto: #{product.idProduct}</p>
                    <p> ${product.price}</p>
                </div>
                <div style={{gridArea: "right"}}>
                    <button className="published-button" id="published" style={{background: theme.palette.primary.light}}>✔ Publicado</button>
                    <button className="published-button" id="unpublished">No publicado</button>
                </div>
            </Box>

        </div>
    )
}

export default CardPublicacion