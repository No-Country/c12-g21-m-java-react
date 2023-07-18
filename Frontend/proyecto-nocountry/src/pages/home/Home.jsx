import { Button } from "@mui/material"
import { Link } from "react-router-dom";
import Card from "../../components/Card/Card";
import './home-style.css'
import { useEffect, useRef, useState } from 'react';
import { getProducts } from "../../firebase/functions";

const Home = () => {
  
  const filaRef = useRef(null);
  const [products, setProducts] = useState([])
  const scrollDerecha = () => {
    const offsetWidth = filaRef.current.offsetWidth;
    const scrollOffset = offsetWidth + filaRef.current.scrollLeft;
    filaRef.current.scrollTo({
      left: scrollOffset,
      behavior: 'smooth',
      block: 'nearest',
    });
  };

  const scrollIzquierda = () => {
    const offsetWidth = filaRef.current.offsetWidth;
    const scrollOffset = filaRef.current.scrollLeft - offsetWidth;
    filaRef.current.scrollTo({
      left: scrollOffset,
      behavior: 'smooth',
      block: 'nearest',
    });
  };

  useEffect(() => {
    getProducts().then(items => setProducts(items))
  }, [])
  return (
    <div className="home-container">
      <div className="container">
        <div className="options-container">
          <Link to="/ventas" className="options-button-container"><Button variant="contained" className="options-button" >QUIERO VENDER</Button></Link>
          <Link to="/compras" className="options-button-container"><Button variant="contained" className="options-button">QUIERO COMPRAR</Button></Link>
        </div>
        <Card title={"Creemos en las segundas oportunidades."}
          description={"Los muebles que necesitas para tu casa, a un solo click"}
          img={"https://hips.hearstapps.com/hmg-prod/images/index-online-642dd244cbcfe.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*"}
        />
        <Card title={"¿Cómo elegir el mejor mueble para vos?"}
          description={"Primero que nada, mira bien las medidas del espacio que tenés para poner tu mueble..."}
          img={'https://www.unclaimedfurnitureupstate.com/wp-content/uploads/2023/03/Living-Room-Category-Page-Photo.webp'}
        />
        <div className="destacados-contenedor mt-5">
          <h2>Destacados</h2>
          <div className="contenedor-principal">
            <button role="button" id="flecha-izquierda" onClick={scrollIzquierda} className="flecha-izquierda">{"<"}</button>
            <div ref={filaRef} className="contenedor-carousel">
              {products.map((element) => (
                <Link to={`/detail/${element.id}`} key={element.id} className="imagen link" style={{ textDecoration: "none", color: 'black' }}>
                  <h4>{element.title}</h4>
                    <img src="https://mint.com.uy/wp-content/uploads/2022/09/Cuadros-1.jpg" alt="" />
                </Link>
              ))}
            </div>

            <button role="button" onClick={scrollDerecha} id="flecha-derecha" className="flecha-derecha">{">"}</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home