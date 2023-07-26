import { Box, Link } from "@mui/material"
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { useState } from "react";
import MessageModal from "../messageModal/MessageModal";
import axios from "axios";
import { useSelector } from "react-redux";
import BasicRating from "../basicRating/BasicRating";

const CardMisCompras = ({ product }) => {
    const [openModal, setOpenModal] = useState(false)
    const user = useSelector(state => state.user)
    const [rating, setRating] = useState(0);

    const handleRating = (value) => {
        setRating(value)
        console.log(value)
        /* axios.post("https://c12-21-m-java-react-ecommerce.onrender.com/ratings", {
            ratingValue: rating,
            review: "vacio",
            idSale: product.idSale,
            idUser: idDelVendedor
        }) */
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
                    <div className="d-flex flex-column justify-content-around">
                        <b>Estado del producto: </b>
                        <button className="card-button">Reservado</button>
                        <Link href="#" style={{ color: "black", fontSize: "0.8em" }}>
                            <p style={{ margin: 0 }}>Cancelar reserva</p>
                        </Link>
                    </div>
                </div>
                <div style={{ gridArea: "right", alignSelf: "end" }}>
                    <BasicRating message={"Calificar al vendedor"} rating={rating} setRating={setRating} handleRating={handleRating} status={product.status}/>
                    <button className="card-button" onClick={() => setOpenModal(true)}>Notas con el vendedor <BorderColorIcon sx={{ fontSize: "1.2em" }}></BorderColorIcon></button>
                </div>

            </Box>
        </div>
    )
}

export default CardMisCompras