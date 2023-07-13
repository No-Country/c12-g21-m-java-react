import { Box, Link } from "@mui/material";
import { useState } from "react";

const InputLink = () => {
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
            {selectedOption ? selectedOption : "Seleccione categoría"}
        </Link>
    );

    //Opciones de categoria de productos
    const option1 = <Link onClick={() => handleOptionClick("Opción 1")}>Opción 1</Link>;
    const option2 = <Link onClick={() => handleOptionClick("Opción 2")}>Opción 2</Link>;
    const option3 = <Link onClick={() => handleOptionClick("Opción 3")}>Opción 3</Link>;

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
