import { Box, Link } from "@mui/material";

const linkCat = <Link
    component="button"
    variant="body2"
    onClick={() => {
        console.info("Link categoria");
    }}> Seleccione categoría </Link>

const InputLink = () => {
    return (
        <div id='inputLink'>
            <Box component="form" sx={{ borderRadius: "none", border: ".4rem solid #d9d9d9", maxWidth: "90%", margin: "2rem auto", padding: ".3rem" }}>
                <Box component="text">
                    {linkCat}
                </Box>
            </Box>
        </div>
    )
}

export default InputLink