import { Box, Rating } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
const CardProfile = ({ user }) => {
    const [rating, setRating] = useState()
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        setIsLoading(true)
        axios.get(`https://c12-21-m-java-react-ecommerce.onrender.com/ratings/average/${user.idUser}`,
            {
                headers: {
                    Authorization: `Bearer ${user.jwtToken}`,
                }
            })
            .then(response => setRating(response.data))
            setTimeout(() => {
                setIsLoading(false)
            }, 1000)
    }, [])

    return (
        <div >
            <Box className="card-box">
                <div className="card-name">
                    <h4>Mis datos personales</h4>
                    <p>{user.firstName} {user.lastName}</p>
                    <p>{user.email} </p>
                    <p><b>Dirección:</b> </p>
                    <p>{user.address}</p>
                    <p>Promedio de calificaciones: </p>
                    {isLoading ? <></> : (<Rating name='half-rating-read' size={"large"} value={rating} precision={0.5} readOnly />)}
                </div>
                <div className="avatar-container">
                    <p className="avatar">{user.firstName[0]}</p>

                </div>
            </Box>
        </div>
    )
}

export default CardProfile