/* eslint-disable react/prop-types */
import { Box, Link } from "@mui/material"
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { useState } from "react";
import MessageModal from "../messageModal/MessageModal";
import axios from "axios";
import { useSelector } from "react-redux";
import BasicRating from "../basicRating/BasicRating";

const CardMisCompras = ({ product }) => {
    console.log(product)
    const [openModal, setOpenModal] = useState(false)
    const user = useSelector(state => state.user)
    const [rating, setRating] = useState();
    const [review, setReview] = useState()
    const handleRating = (value, reviewvalue) => {
        setRating(parseInt(value))
        setReview(reviewvalue)
        console.log(value)
        console.log(review)
        axios.post("https://c12-21-m-java-react-ecommerce.onrender.com/ratings", {
            ratingValue: rating,
            review: "vacio",
            idSale: product.idSale,
            idUser: product.details[0]?.product?.user?.idUser
        },
        {
            headers: {
                Authorization: `Bearer ${user.jwtToken}`,
            }
        }
        )
        .then(response => console.log(response.data))
        .catch(error => console.log(error))
    }
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
                        <button className="card-button">{product?.status}</button>
                    </div>
                </div>
                <div style={{ gridArea: "right", alignSelf: "end" }}>
                    {product.status !== "RESERVADO"? (
                    <BasicRating  handleRating={handleRating} status={product.status}/>
                    ): (
                    
                    <button className="card-button" onClick={() => setOpenModal(true)}>Notas con el vendedor <BorderColorIcon sx={{ fontSize: "1.2em" }}></BorderColorIcon></button>
                        )}
                </div>

            </Box>
        </div>
    )
}

export default CardMisCompras