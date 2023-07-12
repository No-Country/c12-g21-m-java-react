import { Box, Link } from "@mui/material";

const linkEstado = <Link
    component="button"
    variant="body2"
    onClick={() => {
        console.info("Link estado de producto");
    }}> Seleccione estado del producto </Link>

const InputLinkEstado = () => {
    return (
        <div>
            <Box component="form" sx={{ borderRadius: "none", border: ".4rem solid #d9d9d9", maxWidth: "90%", margin: "2rem auto", padding: ".3rem" }}>
                <Box component="text">
                    {linkEstado}
                </Box>
            </Box>
        </div>
    )
}

export default InputLinkEstado