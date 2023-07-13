import { Box, Link } from "@mui/material";
import { useState } from "react";

const InputLink = () => {
    const [showOptions, setShowOptions] = useState(false);

    const handleLinkClick = (event) => {
        event.preventDefault(); // Evita la recarga de la página
        setShowOptions(!showOptions);
        console.info("Link categoria");
    };

    const linkCat = (
        <Link
            component="button"
            variant="body2"
            onClick={handleLinkClick}
        >
            Seleccione categoría
        </Link>
    );

    //Funcion opciones
    const option1 =
        <Link>Opcion 1</Link>

    const option2 =
        <Link>Opcion 2</Link>

    const option3 =
        <Link>Opcion 3</Link>

    return (
        <div id="inputLink">
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
                    {linkCat}
                    {showOptions && (
                        <div id="optionsLinks">
                            {/* Opciones a mostrar */}
                            <p>{option1}</p>
                            <p>{option2}</p>
                            <p>{option3}</p>
                        </div>
                    )}
                </Box>
            </Box>
        </div>
    );
};

export default InputLink;