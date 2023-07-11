import React from 'react';
import "../productosVendidos/productosVendidos.css";
import { Box, Container, Link, TextField, Stepper, Step, StepLabel } from "@mui/material";
import SendRoundedIcon from '@mui/icons-material/SendRounded';

const steps = [
    'Producto reservado',
    'En contacto con el cliente',
    'Retiro acordado',
    'Pedido entregado',
    'Dinero acreditado',
];

const preventDefault = (event) => event.preventDefault();

const ProductosVendidos = () => {
    return (
        <Container maxWidth="lg" className='prodVen'>
            <div className='userContainer'>
                <Box className="box" sx={{ width: 500, height: 250, backgroundColor: '#d9d9d9' }}>
                    <div className="nameCard">
                        <h4>Maria Lopez</h4>
                        <p>Vendedor autorizado</p>
                    </div>
                    <p className='userData'>Documento Nacional de Identidad: </p>
                    <p className='userData'>Dirección: </p>
                    <p className='userData'>Contacto: </p>
                </Box>
            </div> <hr />
            <div className='publicados'>
                <h4>Mis productos publicados</h4>
                <div className="boxes">
                    <div className="boxGroup">
                        <Box className="box1" sx={{ width: 365, height: "auto", backgroundColor: '#d9d9d9', padding: ".2rem" }} onClick={preventDefault}>
                            <div className="uper">
                                <h5>Detalle del producto: </h5>
                                <Box className="underBox"> <Link href="#" underline="hover">{'Editar publicación o eliminar'}</Link></Box>
                            </div>
                            <p>Número de publicación: </p>
                            <p>Precio: </p>
                            <b>Estado del producto: </b>
                            <Stepper className='stepper' activeStep={0} alternativeLabel>
                                {steps.map((label) => (
                                    <Step key={label}>
                                        <StepLabel>{label}</StepLabel>
                                    </Step>
                                ))}
                            </Stepper>
                        </Box>
                        <Box className="box2" sx={{ width: 365, height: 125, backgroundColor: '#d9d9d9' }}>
                            <h5>Ver mensajes del cliente</h5>
                            <div className="mnsj">
                                <TextField id="filled-basic" label="Enviar mensaje" variant="filled" size='small' sx={{ width: "75%" }} /> <SendRoundedIcon sx={{ cursor: "pointer" }} />
                            </div>
                        </Box>
                    </div>
                    <div className="boxGroup">
                        <Box className="box1" sx={{ width: 365, height: "auto", backgroundColor: '#d9d9d9', padding: ".2rem" }} onClick={preventDefault}>
                            <div className="uper">
                                <h5>Detalle del producto: </h5>
                                <Box className="underBox"> <Link href="#" underline="hover">{'Editar publicación o eliminar'}</Link></Box>
                            </div>
                            <p>Número de publicación: </p>
                            <p>Precio: </p>
                            <b>Estado del producto: </b>
                            <Stepper className='stepper' activeStep={0} alternativeLabel>
                                {steps.map((label) => (
                                    <Step key={label}>
                                        <StepLabel>{label}</StepLabel>
                                    </Step>
                                ))}
                            </Stepper>
                        </Box>
                        <Box className="box2" sx={{ width: 365, height: 125, backgroundColor: '#d9d9d9' }}>
                            <h5>Ver mensajes del cliente</h5>
                            <div className="mnsj">
                                <TextField id="filled-basic" label="Enviar mensaje" variant="filled" size='small' sx={{ width: "75%" }} /> <SendRoundedIcon sx={{ cursor: "pointer" }} />
                            </div>
                        </Box>
                    </div>
                    <div className="boxGroup">
                        <Box className="box1" sx={{ width: 365, height: "auto", backgroundColor: '#d9d9d9', padding: ".2rem" }} onClick={preventDefault}>
                            <div className="uper">
                                <h5>Detalle del producto: </h5>
                                <Box className="underBox"> <Link href="#" underline="hover">{'Editar publicación o eliminar'}</Link></Box>
                            </div>
                            <p>Número de publicación: </p>
                            <p>Precio: </p>
                            <b>Estado del producto: </b>
                            <Stepper className='stepper' activeStep={0} alternativeLabel>
                                {steps.map((label) => (
                                    <Step key={label}>
                                        <StepLabel>{label}</StepLabel>
                                    </Step>
                                ))}
                            </Stepper>
                        </Box>
                        <Box className="box2" sx={{ width: 365, height: 125, backgroundColor: '#d9d9d9' }}>
                            <h5>Ver mensajes del cliente</h5>
                            <div className="mnsj">
                                <TextField id="filled-basic" label="Enviar mensaje" variant="filled" size='small' sx={{ width: "75%" }} /> <SendRoundedIcon sx={{ cursor: "pointer" }} />
                            </div>
                        </Box>
                    </div>
                </div>
            </div> <hr />
            <div className='vendidos'></div> <hr />
            <div className='calificaciones'></div>
        </Container>
    );
}

export default ProductosVendidos