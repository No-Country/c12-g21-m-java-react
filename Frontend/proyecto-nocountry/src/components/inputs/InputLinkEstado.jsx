import { Box, Link } from "@mui/material";
import React, { useState } from "react";

const InputLinkEstado = () => {
    const [showOptions, setShowOptions] = useState(false);

    const handleLinkClick = (event) => {
        event.preventDefault(); // Evita la recarga de la página
        setShowOptions(!showOptions);
        console.info("Link estado de producto");
    };

    const linkEstado = (
        <Link
            component="button"
            variant="body2"
            onClick={handleLinkClick}
        >
            Seleccione estado del producto
        </Link>
    );

    //Funcion opciones
    const option1st =
        <Link>Estado 1</Link>

    const option2st =
        <Link>Estado 2</Link>

    const option3st =
        <Link>Estado 3</Link>

    return (
        <div>
            <Box
                component="form"
                sx={{
                    borderRadius: "none",
                    border: ".4rem solid #d9d9d9",
                    maxWidth: "90%",
                    margin: "2rem auto",
                    padding: ".3rem",
                }}
            >
                <Box component="text">
                    {linkEstado}
                    {showOptions && (
                        <div id="optionsState">
                            {/* Opciones a mostrar */}
                            <p>{option1st}</p>
                            <p>{option2st}</p>
                            <p>{option3st}</p>
                        </div>
                    )}
                </Box>
            </Box>
        </div>
    );
};

export default InputLinkEstado;
