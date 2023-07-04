import './ventas-style.css';

const Ventas = () => {
  return (
    <div className='ventasMain'>
      <div className='tituloVentasContainer'>
        <h2 className="tituloPaginaVentas">Lorem, ipsum dolor sit amet</h2>
      </div>
      <div className="containerVentaProducto">
        <button className="btnVentaProducto">Vender mi producto</button>
      </div>
      <div className="consejosContainer">
        <div className="consejosLeft">
          <h3>Consejos de venta para vos</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nostrum obcaecati modi cumque veritatis harum, quos eum necessitatibus quas iure odit corrupti consectetur sint molestiae beatae magni a natus. Velit.</p>
        </div>
        <div className="consejosRight">
          <img src="https://emprendedor.com/wp-content/uploads/2021/08/20190527193725-online.jpeg" alt="venta exitosa" />
        </div>
      </div>
    </div>
  )
}

export default Ventas