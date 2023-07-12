import { CssBaseline, Container } from "@mui/material"
import CardProfile from "../../components/Card/CardProfile"
import CardPubliGroup from "../../components/groups/CardPubliGroup"
import CardProdVendidosGroup from "../../components/groups/CardProdVendidosGroup"
import CardCalificacion from "../../components/Card/CardCalificacion"
import "../productosVendidos/productosVendidos.css"

const ProductosVendidos = () => {
    return (
        <div>
            <CssBaseline>
                <Container maxWidth="xl" sx={{padding: "4rem 0"}}>
                    <CardProfile/> <hr />
                    <h5 className="h5">Mis productos publicados</h5>
                    <CardPubliGroup/> <hr />
                    <h5 className="h5">Mis prodcutos vendidos</h5>
                    <CardProdVendidosGroup/> <hr />
                    <h5 className="h5">Calificaciones recibidas</h5>
                    <CardCalificacion/>
                </Container>
            </CssBaseline>
        </div>
    )
}

export default ProductosVendidos