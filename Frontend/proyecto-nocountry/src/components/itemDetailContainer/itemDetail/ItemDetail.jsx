/* eslint-disable react/prop-types */
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
// import "./itemDetail-style.css";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../../features/productSlice";
import { useNavigate } from "react-router-dom";
import BasicModal from "../../basicModal/BasicModal";
import axios from "axios";

const ItemDetail = ({ item }) => {
  const [favorite, setFavorite] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleFavorite = () => {
    if (favorite === false) {
      setFavorite(true);
      dispatch(increment());
    } else {
      setFavorite(false);
      dispatch(decrement());
    }
  };

  const URL = "https://c12-21-m-java-react-ecommerce.onrender.com/sales/create";

  const handleSaleCreate = () => {
    const currentDate = new Date();
    const messageDateTime = currentDate.toISOString();
    user.logueado
      ? axios
          .post(
            URL,
            {
              saleDate: messageDateTime,
              status: "RESERVADO",
              amount: item.price,
              idUserBuyer: { idUser: user.idUser },
              rating: null,
              details: [
                {
                  product: {
                    idProduct: item.idProduct,
                  },
                  quantity: 1,
                },
              ],
            },
            {
              headers: {
                Authorization: `Bearer ${user.jwtToken}`,
              },
            }
          )
          .then((response) => {
            navigate(`/acordar-compra/${response.data.idSale}`);
          })
          .catch((error) => {
            console.log(error);
          })
      : setOpen(true);
  };

  return (
    <>
      <BasicModal
        open={open}
        setOpen={setOpen}
        message={"No se encuentra logueado"}
      />
      <Card sx={{ maxWidth: 345, p: "2rem", m: "2rem" }}>
        {/* <Button sx={{ onClick: { handleFavorite } }}>
          {favorite == false ? (
            <StarBorderIcon sx={{ fontSize: 20 }}></StarBorderIcon>
          ) : (
            <StarIcon sx={{ fontSize: 20 }}></StarIcon>
          )}
        </Button> */}
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            "& > :not(style) + :not(style)": { marginLeft: "10px" },
          }}
        >
          <Button variant="outlined">{item.categoryHouseRooms.title}</Button>
          <Button variant="outlined">{item.categoryProduct.title}</Button>
          <Button variant="outlined">{item.categoryStatus.title}</Button>
        </Box>
        <CardMedia
          sx={{ height: 140, margin: "1rem", objectFit: "cover" }}
          image={item.photos[0].imagePath}
          title={item.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            ${item.price}
          </Typography>
          <Typography variant="body2">{item.description}</Typography>
        </CardContent>
        <CardActions style={{ justifyContent: "flex-end" }}>
          <Button variant="contained" onClick={handleSaleCreate}>
            Lo quiero
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default ItemDetail;
