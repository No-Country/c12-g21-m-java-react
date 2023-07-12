import { Box, Button } from "@mui/material"

const BtnExaminarLocal = () => {
    return (
        <div>
            <Box className="fotoContainer" sx={{height: 270, backgroundColor: '#d9d9d9'}} >
                <p>Añadir hasta 6 fotografías</p>
                <Button>
                    <p>EXAMIMAR</p>
                    <input type="file" name="examinar" id="examinar" />
                </Button>
            </Box>
        </div>
    )
}

export default BtnExaminarLocal