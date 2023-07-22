import { Link, useNavigate } from "react-router-dom";
import Card from "../../components/Card/Card";
import "./home-style.css";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { MyButton } from "../../assets/styles";


const Home = () => {


  const navigate = useNavigate();
  const filaRef = useRef(null);
  const [products, setProducts] = useState([]);
  const scrollDerecha = () => {
    const offsetWidth = filaRef.current.offsetWidth;
    const scrollOffset = offsetWidth + filaRef.current.scrollLeft;
    filaRef.current.scrollTo({
      left: scrollOffset,
      behavior: "smooth",
      block: "nearest",
    });
  };

  const scrollIzquierda = () => {
    const offsetWidth = filaRef.current.offsetWidth;
    const scrollOffset = filaRef.current.scrollLeft - offsetWidth;
    filaRef.current.scrollTo({
      left: scrollOffset,
      behavior: "smooth",
      block: "nearest",
    });
  };

  const user = useSelector((state) => state.user);

  const handleAuthenticate = () => {
    user.logueado ? navigate("/vender") : navigate("/login");
  };

  useEffect(() => {
    axios.get('https://c12-21-m-java-react-ecommerce.onrender.com/products/highlight').
      then((response) => setProducts(response.data))
      .catch(error => console.log(error))
  }, []);
  return (
    <div className="home-container">
      <div className="container">
        <div className="options-container">
          <div className="options-button-container">
            <Link to="/compras" >
              <MyButton>
                Quiero comprar
              </MyButton>
            </Link>
            <MyButton
              onClick={handleAuthenticate}
            >
              Quiero vender
            </MyButton>
          </div>

        </div>
        <Card
          title={"Creemos en las segundas oportunidades.Re House"}
          description={
            "Los muebles que necesitas para tu casa, a un solo click."
          }
          img={
            "https://hips.hearstapps.com/hmg-prod/images/index-online-642dd244cbcfe.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*"
          }
        />
        <Card
          title={"¿Cómo elegir el mejor mueble para vos?"}
          description={
            "Primero que nada, mira bien las medidas del espacio que tenés para poner tu mueble..."
          }
          img={
            "https://www.unclaimedfurnitureupstate.com/wp-content/uploads/2023/03/Living-Room-Category-Page-Photo.webp"
          }
        />
        <div className="destacados-contenedor mt-5">
          <h2>Destacados</h2>
          <div className="contenedor-principal">
            <button
              role="button"
              id="flecha-izquierda"
              onClick={scrollIzquierda}
              className="flecha-izquierda"
            >
              {"<"}
            </button>
            <div ref={filaRef} className="contenedor-carousel">
              {products.map((element) => (

                <Link
                  to={`/detail/${element.idProduct}`}
                  key={element.idProduct}
                  className="imagen link"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  {console.log(element)}
                  <h4>{element.title}</h4>
                  <img
                    src={element.photos[0]?.imagePath}
                    alt=""
                  />
                </Link>
              ))}
            </div>

            <button
              role="button"
              onClick={scrollDerecha}
              id="flecha-derecha"
              className="flecha-derecha"
            >
              {">"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
