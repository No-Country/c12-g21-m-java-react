import { Box } from "@mui/material";
import "../inputs/inputs.css"

const InputText = () => {
    return (
        <div id='inputText'>
            <Box component="form" sx={{borderRadius: "none", border: ".4rem solid #d9d9d9", maxWidth: "90%", margin: "2rem auto", padding: ".3rem"}}>
                <input type="text" id="inputText" />
            </Box>
        </div>
    )
}

export default InputText