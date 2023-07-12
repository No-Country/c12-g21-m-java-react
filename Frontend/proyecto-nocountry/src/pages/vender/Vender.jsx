import { CssBaseline, Box, Container } from '@mui/material'
import InputLink from '../../components/inputs/inputLink'
import InputText from '../../components/inputs/inputText'
import InputLinkEstado from '../../components/inputs/InputLinkEstado'
import InputPrice from '../../components/inputs/InputPrice'

const Vender = () => {
    return (
        <div>
            <CssBaseline>
                <Container maxWidth="lg">
                    <Box sx={{bgcolor: "#d9d9d9", padding: "3.5rem", textAlign: "center"}}>
                        <h2>Vende tus productos usados de forma simple</h2>
                    </Box>
                    <Box sx={{bgcolor: "#cfe8fc", height: "100vh"}}>
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
                    </Box>
                </Container>
            </CssBaseline>
        </div>
    )
}

export default Vender