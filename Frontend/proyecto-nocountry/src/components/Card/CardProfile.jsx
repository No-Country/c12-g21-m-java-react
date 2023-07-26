import { Box } from "@mui/material"
import { useEffect } from "react"

const CardProfile = ({ user }) => {


    return (
        <div >
            <Box className="card-box">
                <div className="card-name">
                    <h4>Mis datos personales</h4>
                    <p>{user.firstName} {user.lastName}</p>
                    <p>{user.email} </p>
                    <p><b>Dirección:</b> </p>
                    <p>{user.address}</p>
                </div>
                <div className="avatar-container">
                    <p className="avatar">{user.firstName[0]}</p>

                </div>
            </Box>
        </div>
    )
}

export default CardProfile