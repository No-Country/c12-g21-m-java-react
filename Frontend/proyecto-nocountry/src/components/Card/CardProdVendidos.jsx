import { Box, Link } from "@mui/material"
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { useState } from "react";
import MessageModal from "../messageModal/MessageModal";
import axios from "axios";
import { useSelector } from "react-redux";

const CardProdVendidos = ({ product }) => {
    const [openModal, setOpenModal] = useState(false)
    const user = useSelector(state => state.user)
    const [finalizado, setFinalizado] = useState(product.status !== "RESERVADO")
    const [cancelado, setCancelado] = useState(false)
    const handleFinalizar = () => {
        axios.post("https://c12-21-m-java-react-ecommerce.onrender.com/sales/finish", {
            ...product
        }, {
            headers: {
                Authorization: `Bearer ${user.jwtToken}`,
            }
        }
        )
            .then(response => {
                setFinalizado(true)
                console.log(response.data)
            })
    }

    const handleCancelar = () => {
        axios.post("https://c12-21-m-java-react-ecommerce.onrender.com/sales/cancel", {
            ...product
        }, {
            headers: {
                Authorization: `Bearer ${user.jwtToken}`,
            }
        })
            .then(response => {
                setCancelado(true)
                console.log(response.data)
            })
    }

    return (
        <div>
            {openModal && <MessageModal setOpen={setOpenModal} open={openModal} id={product?.idSale} buyer={product?.idUserBuyer?.userPerson?.firstName} />}

            <Box className="card-box" >
                <div style={{ gridArea: "left" }}>
                    <b>Detalle de producto: </b>
                    <p>{product?.details[0]?.product?.title}</p>
                    <p>Id del producto: #{product?.details[0]?.product?.idProduct}</p>
                    <p>Id de venta: {product?.idSale}</p>
                    <p>Fecha de venta: {product?.saleDate}</p>
                    <p>Comprador: {product?.idUserBuyer?.userPerson?.firstName}</p>
                    <div className="d-flex flex-column justify-content-around">
                        <b>Estado del producto: </b>
                        <button className="card-button">{finalizado ? "CERRADO" : (cancelado ? "CANCELADO" : product.status)}</button>
                        {(!finalizado && !cancelado) && (
                            <p onClick={handleCancelar} style={{ margin: 0, cursor: "pointer", textDecoration: "underline" }}>Cancelar reserva</p>

                        )}

                    </div>
                </div>
                <div style={{ gridArea: "right", alignSelf: "end", display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%", alignItems: "end" }}>
                    {(!finalizado && !cancelado) && (<button className="card-button" onClick={handleFinalizar}>Finalizar transacción</button>)}
                    {(!finalizado && !cancelado) && (<button className="card-button" onClick={() => setOpenModal(true)}>Notas con el comprador <BorderColorIcon sx={{ fontSize: "1.2em" }}></BorderColorIcon></button>)}
                </div>

            </Box>
        </div>
    )
}

export default CardProdVendidos