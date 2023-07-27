import { Box } from "@mui/material"
import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";

import { theme } from "../../assets/styles";


const CardPublicacion = ({ product }) => {
    const user = useSelector(state => state.user)
    const [isPublished, setIsPublished] = useState(product.active)
    
    const handlePublish = () => {
        const updated = {...product}
        updated.active = !product.active
        axios.put(`https://c12-21-m-java-react-ecommerce.onrender.com/products/${product.idProduct}`, {
            ...updated
        }, {
            headers: {
                Authorization: `Bearer ${user.jwtToken}`,
              }
        })
        .then(() => {
            setIsPublished(!isPublished) })
       
            .catch(error => console.log(error))
    }


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
                    <button onClick={handlePublish} className="published-button" id="published" style={{ background: isPublished && theme.palette.primary.light}}>Publicado</button>
                    <button onClick={handlePublish} className="published-button" id="unpublished" style={{background: !isPublished &&  theme.palette.primary.light}}>No publicado</button>
                </div>
            </Box>

        </div>
    )
}

export default CardPublicacion