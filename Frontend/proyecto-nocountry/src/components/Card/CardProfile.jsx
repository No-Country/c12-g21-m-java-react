import { Box } from "@mui/material"

const CardProfile = () => {
    return (
        <div className="card-profile">
            <Box className="card-box-profile" sx={{ bgcolor: "#d9d9d9", width: "470px", height: "218px", marginBottom: "4rem"}}>
                <div className="card-name-autorized">
                    <h4>Nombre</h4>
                    <p>Vendedor autorizado</p>
                </div>
                <p>Documento Nacional de identidad: </p>
                <p>Dirección: </p>
                <p>Contacto: </p>
            </Box>
        </div>
    )
}

export default CardProfile