import { Box, Link, Stepper, Step, StepLabel } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';

const steps = [
    'Producto reservado',
    'En contacto con el cliente',
    'Retiro acordado',
    'Pedido entregado',
    'Dinero acreditado',
];

const CardPublicacion = () => {
    return (
        <div className="card-publicacion">
            <Box className="card-box" sx={{ bgcolor: "#d9d9d9", width: "470px", padding: ".5rem" }}>
                <h5 style={{ gridArea: "title" }}>Detalle de producto: </h5>
                <Link className="card-box-link" href="#" underline="always" sx={{ color: "black", fontSize: ".75rem", gridArea: "link", textAlign: "end"}}>
                    {'Editar publicación o eliminar'}
                </Link>
                <p style={{ gridArea: "nPublicacion" }}>Número de publicación #00001</p>
                <p style={{ gridArea: "precio" }}>Precio $0,000</p>
                <div className="estadoProd" style={{ gridArea: "estadoProd" }}>
                    <b>Estado del producto: </b>
                    <Stepper activeStep={1} alternativeLabel>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </div>
            </Box>
            <Box className="card-box-msj" sx={{ bgcolor: "#d9d9d9", width: "470px", padding: "2.5rem 1rem" }}>
                <b>Ver mensaje del cliente</b>
                <div className="inputMnsj">
                    <input type="text" placeholder="Enviar mensaje"/>
                    <SendIcon className="sendIcon"/>
                </div>
            </Box>
        </div>
    )
}

export default CardPublicacion