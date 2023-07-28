import "./item-style.css";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <div className="item-component my-3">
      <Link
        to={`/detail/${item.idProduct}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <div className="item-img-container">
          <img
            className="item-img"
            src={item.photos[0] ? item.photos[0].imagePath : ""}
            alt="producto"
          ></img>
        </div>
        <div className="item-text">
          <div className="d-flex justify-content-between">
            <h3>{item.title}</h3>
            <h4>${item.price}</h4>
          </div>
          <p>{item.description}</p>
        </div>
      </Link>
    </div>
  );
};

export default Item;
