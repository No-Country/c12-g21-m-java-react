import { FormGroup, FormControlLabel, Checkbox } from '@mui/material'
import './compras-style.css'
import CardProduct from '../../components/CardProduct/CardProduct';

const Compras = () => {

  const items = [
    { title: "Producto", description: "Lorem ipsum, dolor sit amet", price: 500, img: "" },
    { title: "Producto", description: "Lorem ipsum, dolor sit amet", price: 500, img: "" },
    { title: "Producto", description: "Lorem ipsum, dolor sit amet", price: 500, img: "" },
    { title: "Producto", description: "Lorem ipsum, dolor sit amet", price: 500, img: "" },
    { title: "Producto", description: "Lorem ipsum, dolor sit amet", price: 500, img: "" },
    { title: "Producto", description: "Lorem ipsum, dolor sit amet", price: 500, img: "" },
    { title: "Producto", description: "Lorem ipsum, dolor sit amet", price: 500, img: "" },
    { title: "Producto", description: "Lorem ipsum, dolor sit amet", price: 500, img: "" },
    { title: "Producto", description: "Lorem ipsum, dolor sit amet", price: 500, img: "" },
    { title: "Producto", description: "Lorem ipsum, dolor sit amet", price: 500, img: "" },
  ]


  return (
    <div className='compras-container'>
      <div className="container">
        <div className="title-container">
          <h1>Lorem ipsum, dolor sit amet</h1>
        </div>
        <div className='row'>
          <div className='filtro col-2'>
            <h2 className='filtro-title'>Filtrar por:</h2>
            <FormGroup>
              <FormControlLabel control={<Checkbox />} label="Categoría" />
              <FormControlLabel control={<Checkbox />} label="Ambiente" />
              <FormControlLabel control={<Checkbox />} label="Tipo de mueble" />
              <FormControlLabel control={<Checkbox />} label="Estado" />
            </FormGroup>
          </div>

          <div className='product-container col-10'>
            {items.map((item, indice) => {
              return <CardProduct title={item.title} price={item.price} description={item.description} img={item.img} key={indice} />
            })}
          </div>
        </div>
      </div>
    </div>
  )
};

export default Compras;
