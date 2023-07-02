import Card from '../../components/Card/Card';
import React, { useRef } from 'react';

import './compras-style.css'

const Compras = () => {

  const filaRef = useRef(null);

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

  return (
    <div className="container">
      <div className="title-container">
        <h1>Lorem ipsum, dolor sit amet</h1>
      </div>
      <Card title={"Consejos de compra para vos"}
        description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa quaerat esse quo quae, earum officiis mollitia repellendus cupiditate dolorem sunt, iusto autem id. Consequuntur ipsum amet aliquam excepturi debitis modi."}
        img={'https://www.unclaimedfurnitureupstate.com/wp-content/uploads/2023/03/Living-Room-Category-Page-Photo.webp'}
        />
      <div className="destacados-contenedor mt-5">
        <h2>Destacados</h2>
        <div className="contenedor-principal">
          <button role="button" id="flecha-izquierda" onClick={scrollIzquierda} className="flecha-izquierda">{"<"}</button>
          <div ref={filaRef} className="contenedor-carousel">
            <div className="imagen">
              <img src='https://mint.com.uy/wp-content/uploads/2022/09/Cuadros-1.jpg' alt=''></img>
            </div>
            <div className="imagen">
              <img src='https://mint.com.uy/wp-content/uploads/2022/09/Cuadros-1.jpg' alt=''></img>
            </div>
            <div className="imagen">
              <img src='https://mint.com.uy/wp-content/uploads/2022/09/Cuadros-1.jpg' alt=''></img>
            </div>
            <div className="imagen">
              <img src='https://mint.com.uy/wp-content/uploads/2022/09/Cuadros-1.jpg' alt=''></img>
            </div>
            <div className="imagen">
              <img src='https://mint.com.uy/wp-content/uploads/2022/09/Cuadros-1.jpg' alt=''></img>
            </div>
            <div className="imagen">
              <img src='https://mint.com.uy/wp-content/uploads/2022/09/Cuadros-1.jpg' alt=''></img>
            </div>
            <div className="imagen">
              <img src='https://mint.com.uy/wp-content/uploads/2022/09/Cuadros-1.jpg' alt=''></img>
            </div>
            <div className="imagen">
              <img src='https://mint.com.uy/wp-content/uploads/2022/09/Cuadros-1.jpg' alt=''></img>
            </div>
            <div className="imagen">
              <img src='https://mint.com.uy/wp-content/uploads/2022/09/Cuadros-1.jpg' alt=''></img>
            </div>
            <div className="imagen">
              <img src='https://mint.com.uy/wp-content/uploads/2022/09/Cuadros-1.jpg' alt=''></img>
            </div>
            <div className="imagen">
              <img src='https://mint.com.uy/wp-content/uploads/2022/09/Cuadros-1.jpg' alt=''></img>
            </div>
          </div>

          <button role="button" onClick={scrollDerecha} id="flecha-derecha" className="flecha-derecha">{">"}</button>
        </div>

      </div>
    </div>
  )
};

export default Compras;
