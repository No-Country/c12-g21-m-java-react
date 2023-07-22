import { Button } from "@mui/material";
import React from "react";
import "./itemDetail-style.css";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../../features/productSlice";
import { Link, useNavigate } from "react-router-dom";
import BasicModal from "../../basicModal/BasicModal";

const ItemDetail = ({ item }) => {
  const [favorite, setFavorite] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(state => state.user)
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const handleFavorite = () => {
    if (favorite === false) {
      setFavorite(true);
      dispatch(increment());
    } else {
      setFavorite(false);
      dispatch(decrement());
    }
  };

  const handleAuthenticate = () => {
    user.logueado? navigate(`/acordar-compra/${item.idProduct}`) : setOpen(true)
  }
  return (
    <div className="detail-component m-5">
      <BasicModal open={open} setOpen={setOpen} message={"No se encuentra logueado"} />

      <div className="detail-container">
        <div className="detail-img-container">
          <img
            src={item.photos[0].imagePath}
            alt="img 1"
          />
        </div>
        <div className="detail-data-container">
          <div className="detail-product-container">
            <div className="detail-product">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <p>${item.price}</p>
              <div className="d-flex justify-content-between">
                <Button variant='outlined'>Ambiente: {item.categoryHouseRooms.title}</Button>
                <Button variant='outlined'>Categoría: {item.categoryProduct.title}</Button>
                <Button variant='outlined'>Condición: {item.categoryStatus.title}</Button>
              </div>
            </div>
            <div className="card_product-favorite" onClick={handleFavorite}>
              {favorite == false ? (
                <StarBorderIcon sx={{ fontSize: 40 }}></StarBorderIcon>
              ) : (
                <StarIcon sx={{ fontSize: 40 }}></StarIcon>
              )}
            </div>
          </div>
          <div className="detail-owner-container">
            <div className="detail-owner-data">
              <h2>Vendedor</h2>
              <p>Nombre y apellido: {item.user.userPerson.firstName} {item.user.userPerson.lastName}</p>
              <p>Puntuación: </p>
              <p>Cantidad de ventas: </p>
              <Button variant="contained">Reseñas del vendedor</Button>
            </div>
            <div className="detail-owner-button">

                <Button variant="contained" onClick={handleAuthenticate}>
                  Acordar compra con el vendedor
              </Button>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default ItemDetail;
