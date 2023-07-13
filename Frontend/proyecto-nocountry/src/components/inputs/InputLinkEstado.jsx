import { Box, Link } from "@mui/material";
import { useState } from "react";

const InputLinkEstado = () => {
    const [showOptions, setShowOptions] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const handleLinkClick = (event) => {
        event.preventDefault();
        setShowOptions(!showOptions);
        console.info("Link categoria");
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setShowOptions(false);
    };

    const linkCat = (
        <Link component="button" variant="body2" onClick={handleLinkClick}>
            {selectedOption ? selectedOption : "Seleccione estado del producto"}
        </Link>
    );

    //Opciones de estado de productos
    const option1st = <Link onClick={() => handleOptionClick("Estado 1")}>Estado 1</Link>;
    const option2st = <Link onClick={() => handleOptionClick("Estado 2")}>Estado 2</Link>;
    const option3st = <Link onClick={() => handleOptionClick("Estado 3")}>Estado 3</Link>;

    return (
        <div id="inputLinkEstado">
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
                        <div id="optionsState">
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