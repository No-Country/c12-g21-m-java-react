import { Box } from "@mui/material"
import { useEffect } from "react"

const CardProfile = ({user}) => {


    return (
        <div className="card-profile">
            <Box className="card-box-profile" sx={{ bgcolor: "#d9d9d9", width: "470px", height: "218px", marginBottom: "4rem"}}>
                <div className="card-name-autorized">
                    <h4>{user.firstName} {user.lastName}</h4>
                    <p>Vendedor autorizado</p>
                </div>
                <p>Email: {user.email} </p>
                <p>Dirección: {user.address}</p>
                <p>Teléfono: {user.phone}</p>
                <p>Código postal: {user.postalCode}</p>
            </Box>
        </div>
    )
}

export default CardProfile