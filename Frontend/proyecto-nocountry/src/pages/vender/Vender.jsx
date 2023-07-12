import { CssBaseline, Box, Container } from '@mui/material'
import InputLink from '../../components/inputs/InputLink'
import InputText from '../../components/inputs/InputText'
import InputLinkEstado from '../../components/inputs/InputLinkEstado'
import InputPrice from '../../components/inputs/InputPrice'
import BtnExaminarLocal from '../../components/buttons/BtnExaminarLocal'
import BtnPublicar from '../../components/buttons/BtnPublicar'

const Vender = () => {
    return (
        <div>
            <CssBaseline>
                <Container maxWidth="lg">
                    <Box sx={{bgcolor: "#d9d9d9", padding: "3rem", textAlign: "center"}}>
                        <h2>Vende tus productos usados de forma simple</h2>
                    </Box>
                    <Box sx={{ padding: "1rem 5rem"}}>
                        <label htmlFor="text">Tipo de producto: </label>
                        <InputLink/>
                        <label htmlFor="text">Ubicación del producto: </label>
                        <InputText /> <hr />
                        <label htmlFor="text">Título: </label>
                        <InputText />
                        <label htmlFor="text">Descripción del producto: </label>
                        <InputText />
                        <label htmlFor="text">Estado del producto: </label>
                        <InputLinkEstado/>
                        <label htmlFor="text">Precio: </label>
                        <InputPrice/>
                        <label htmlFor="text">Imágenes</label>
                        <BtnExaminarLocal/>
                        <BtnPublicar/>
                    </Box>
                </Container>
            </CssBaseline>
        </div>
    )
}

export default Vender