import { Button } from "@mui/material"
import { Link } from "react-router-dom";
import Card from "../../components/Card/Card";
import './home-style.css'

const Home = () => {
  return (
    <div className="container">
      <div className="options-container">
        <Link to="/ventas"><Button  variant="contained" className="options-button">QUIERO VENDER</Button></Link>
        <Link to="/compras"><Button variant="contained"  className="options-button">QUIERO COMPRAR</Button></Link>
      </div>
      <Card title={"Lorem ipsum dolor sit amet consectetur adipisicing elit."} 
      description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quibusdam dignissimos neque unde quasi, voluptatum recusandae dolore ducimus magnam alias ab. Ea qui atque odio molestias aut labore quam quos!"}
        img={"https://hips.hearstapps.com/hmg-prod/images/index-online-642dd244cbcfe.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*"}
      />
    </div>
  )
}

export default Home