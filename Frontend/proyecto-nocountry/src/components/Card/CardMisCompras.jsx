import { Box } from "@mui/material"
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { useState } from "react";
import MessageModal from "../messageModal/MessageModal";

import BasicRating from "../basicRating/BasicRating";

const CardMisCompras = ({ product }) => {
    const [openModal, setOpenModal] = useState(false)
    
    
    return (
        <div>
            {openModal && <MessageModal setOpen={setOpenModal} open={openModal} id={product?.idSale} buyer={product?.idUserBuyer?.userPerson?.firstName} />}

            <Box className="card-box" >
                <div style={{ gridArea: "left" }}>
                    <b>Detalle de reserva: </b>
                    <p>Vendedor: {product?.details[0]?.product?.user?.userPerson?.firstName}</p>
                    <p>{product?.details[0]?.product?.title}</p>
                    <p>Numero de reserva: #000{product?.idSale}</p>
                    <p>Fecha de reserva: {product?.saleDate}</p>
                    <div className="d-flex flex-column justify-content-around">
                        <b>Estado de la reserva: </b>
                        <button style={{cursor: "none"}} className="card-button">{product?.status}</button>
                    </div>
                </div>
                <div style={{ gridArea: "right", alignSelf: "end" }}>
                    {product.status !== "RESERVADO"? (
                    <BasicRating  product={product} idUser={product.details[0].product.user.idUser} idSale={product.idSale}/>
                    ): (
                    
                    <button className="card-button" onClick={() => setOpenModal(true)}>Notas con el vendedor <BorderColorIcon sx={{ fontSize: "1.2em" }}></BorderColorIcon></button>
                        )}
                </div>

            </Box>
        </div>
    )
}

export default CardMisCompras