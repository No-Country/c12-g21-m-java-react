//import './compras-style.css';
import ItemListContainer from "../../components/itemListContainer/ItemListContainer";
import ProductFilter from "../../components/productFilter/ProductFilter";
import ProductOrder from "../../components/productOrder/ProductOrder";
import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Grid } from "@mui/material";

export default function Compras() {
  const [options, setOptions] = useState({
    houseRoom: 0,
    category: 0,
    condition: 0,
    priceFrom: 0,
    priceTo: 0,
    idCity: 0,
  });

  const [order, setOrder] = useState(2);
  const [productsFiltered, setProductsFiltered] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { category, houseRoom, condition, priceFrom, priceTo, idCity } =
          options;

        const url =
          "https://c12-21-m-java-react-ecommerce.onrender.com/products/search/filters";

        const response = await axios.post(url, {
          params: {
            idCategoryHouseRooms: houseRoom,
            idCategoryProduct: category,
            idCategoryStatus: condition,
            priceFrom: priceFrom,
            priceTo: priceTo,
            idCity: idCity,
          },
        });

        const data = response.data;

        console.log(data);

        if (order === 0) {
          data.sort((a, b) => a.price - b.price);
        } else if (order === 1) {
          data.sort((a, b) => b.price - a.price);
        }

        setProductsFiltered(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [options, order]);

  return (
    <>
      <Container>
        <ProductOrder order={order} setOrder={setOrder} />
        <Grid container spacing={2}>
          <Grid item xs={6} md={2}>
            <ProductFilter setOptions={setOptions} />
          </Grid>
          <Grid item xs={6} md={10}>
            <ItemListContainer products={productsFiltered} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
