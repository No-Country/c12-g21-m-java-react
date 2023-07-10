import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Card from '../../components/Card/Card';
import '../ventas/ventas-style.css'
import { Container } from "react-bootstrap";

const Ventas = () => {
  return (
    <Container maxWidth="md">
      <div className="title">
        <h2>Lorem, ipsum dolor sit amet</h2>
      </div>
      <div className="btn-venta-container">
        <Link to="/vender"><Button variant="contained">VENDER MI PRODUCTO</Button></Link>
      </div>
      <div className="consejo-venta">
        <Card title={"Consejos de venta para vos"}
          description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa quaerat esse quo quae, earum officiis mollitia repellendus cupiditate dolorem sunt, iusto autem id. Consequuntur ipsum amet aliquam excepturi debitis modi."}
          img={'https://emprendedor.com/wp-content/uploads/2021/08/20190527193725-online.jpeg'} />
      </div>
    </Container>
  )
}

export default Ventas