import { Box } from "@mui/material";
import "../inputs/inputs.css"

const InputPrice = () => {
    return (
        <div id='inputText'>
            <Box component="form" sx={{borderRadius: "none", border: ".4rem solid #d9d9d9", maxWidth: "90%", margin: "2rem auto", padding: ".5rem", display: "flex", gap: "5px"}}>
                <Box sx={{bgcolor: "#909090", padding: "0 .8rem", color: "white"}}>USD</Box>
                <input type="number" id="inputPrice" />
            </Box>
        </div>
    )
}

export default InputPrice