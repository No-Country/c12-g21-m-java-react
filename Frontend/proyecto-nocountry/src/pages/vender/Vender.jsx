import { Container } from "react-bootstrap";
import { Box, Link, Button } from "@mui/material";
import "../vender/vender-style.css"

const labelLinkCat = <Link
    component="button"
    variant="body2"
    onClick={() => {
        console.info("I'm a button.");
    }}
> Seleccione categoría </Link>

const labelLinkEstado = <Link
    component="button"
    variant="body2"
    onClick={() => {
        console.info("I'm a button.");
    }}
> Seleccione estado del producto </Link>

function Vender() {
    return (
        <Container maxWidth="md" className="main-vender">
            <div className='tittle-vender'>
                <h2>Vende tus productos usados de forma simple</h2>
            </div>
            <div className='form-vender'>
                <Box component="form" className="first-form">
                    <label htmlFor="form">Tipo de producto: </label>
                    <Box component="text" className="linkBox">
                        {labelLinkCat}
                    </Box>
                </Box>

                <Box component="form" className="first-form">
                    <label htmlFor="form">Ubicación del producto: </label>
                    <Box component="input" className="linkBox" placeholder="Escriba aquí la ubicación del producto"></Box>
                </Box>
                <hr />
                <Box className="second-form">
                    <Box component="form" className="first-form">
                        <label htmlFor="form">Titulo: </label>
                        <Box component="input" className="linkBox" placeholder="Escriba aquí el titulo de su publicación"></Box>
                    </Box>

                    <Box component="form" className="first-form">
                        <label htmlFor="form">Descripción del producto: </label>
                        <Box component="input" className="linkBox" placeholder="Escriba aquí la descripción de su producto"></Box>
                    </Box>

                    <Box component="form" className="first-form">
                        <label htmlFor="form">Estado del producto: </label>
                        <Box component="text" className="linkBox">
                            {labelLinkEstado}
                        </Box>
                    </Box>

                    <Box component="form" className="first-form">
                        <label htmlFor="form">Precio: </label>
                        <Box component="input" className="linkBox" placeholder="USD | Escriba aquí el precio del producto"></Box>
                    </Box>

                    <Box component="form" className="first-form">
                        <label htmlFor="form">Imagen: </label>
                        <Box className="fotoContainer"
                            sx={{
                                height: 270,
                                backgroundColor: '#d9d9d9',
                            }} >
                            <p>Añadir hasta 6 fotografías</p>
                            <Button>Examinar</Button>
                        </Box>
                    </Box>

                    <div className="btnPublicar">
                        <Button>Publicar</Button>
                    </div>

                    <div className="infoLegal">
                        <p>Información legal</p>
                        <p>Dirección</p>
                    </div>

                </Box>
            </div>
        </Container>

    );
}

export default Vender