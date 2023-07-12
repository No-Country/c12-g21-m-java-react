import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Card from '../../components/Card/Card';
import '../ventas/ventas-style.css'
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useState } from "react";
import BasicModal from "../../components/basicModal/BasicModal";

const Ventas = () => {
  const user = useSelector(state => state.user)
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const handleAuthenticate = () => {
    user.logueado ? navigate("/vender") : setOpen(true)
  }
  return (
    <Container maxWidth="md">
      <div className="title">
        <h2>Lorem, ipsum dolor sit amet</h2>
      </div>
      <div className="btn-venta-container d-flex flex-column">
        <BasicModal open={open} setOpen={setOpen} message={"No se encuentra logueado"} />
        <Button onClick={handleAuthenticate} variant="contained">VENDER MI PRODUCTO</Button>
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