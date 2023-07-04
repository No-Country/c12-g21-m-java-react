import { Button } from "@mui/material";
import Card from '../../components/Card/Card';
import '../ventas/ventas-style.css'

const Ventas = () => {
  return (
    <div className='ventas-main'>
      <div className="title">
        <h2>Lorem, ipsum dolor sit amet</h2>
      </div>
      <div className="btn-venta-container">
        <Button variant="contained" disableElevation>VENDER MI PRODUCTO</Button>
      </div>
      <div className="consejo-venta">
        <Card title={"Consejos de venta para vos"}
          description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa quaerat esse quo quae, earum officiis mollitia repellendus cupiditate dolorem sunt, iusto autem id. Consequuntur ipsum amet aliquam excepturi debitis modi."}
          img={'https://emprendedor.com/wp-content/uploads/2021/08/20190527193725-online.jpeg'} />
      </div>
    </div>
  )
}

export default Ventas