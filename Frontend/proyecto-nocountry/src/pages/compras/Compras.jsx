import "./compras-style.css";
import ItemListContainer from "../../components/itemListContainer/ItemListContainer";
import ProductFilter from "../../components/productFilter/ProductFilter";
import ProductOrder from "../../components/productOrder/ProductOrder";
import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Grid, useMediaQuery, Drawer, Box } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";

export default function Compras() {
  const [options, setOptions] = useState({
    houseRoom: null,
    category: null,
    condition: null,
    priceFrom: null,
    priceTo: null,
    idCity: null,
  });
  const isMobile = useMediaQuery("(max-width: 768px)");

  const [order, setOrder] = useState(2);
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [open, setOpen] = useState(isMobile ? false : true);

  useEffect(() => {
    const { category, houseRoom, condition, priceFrom, priceTo, idCity } =
      options;
    const url =
      "https://c12-21-m-java-react-ecommerce.onrender.com/products/search/filters";

    axios
      .post(url, {
        idCategoryHouseRooms: houseRoom,
        idCategoryProduct: category,
        idCategoryStatus: condition,
        priceFrom: priceFrom,
        priceTo: priceTo,
        idCity: idCity,
      })
      .then((response) => {
        const data = response.data;
        if (order == 0) {
          data.sort((a, b) => a.price - b.price);
        } else if (order == 1) {
          data.sort((a, b) => b.price - a.price);
        }
        setProductsFiltered(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [options, order]);

  return (
    <>
      <Container>
        <div className="banner-container">
          <div className="banner"></div>
        </div>

        {isMobile ? (
          <>
            <Box
              sx={{
                m: "1rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <FilterListIcon
                style={{ cursor: "pointer", marginLeft: "1em" }}
                onClick={() => setOpen((prevState) => !prevState)}
              />

              <ProductOrder order={order} setOrder={setOrder} />
            </Box>

            <Drawer open={open} anchor="left" onClose={() => setOpen(false)}>
              <ProductFilter setOptions={setOptions} />
            </Drawer>

            <Box sx={{ mb: 10, mt: 3 }}>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <ItemListContainer products={productsFiltered} />
                </Grid>
              </Grid>
            </Box>
          </>
        ) : (
          <>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <ProductOrder order={order} setOrder={setOrder} />
              </Grid>
            </Grid>
            <Box sx={{ mb: 10, mt: 3 }}>
              <Grid container spacing={4}>
                <Grid item xs={6} md={2}>
                  <ProductFilter setOptions={setOptions} />
                </Grid>
                <Grid item xs={6} md={10}>
                  <ItemListContainer products={productsFiltered} />
                </Grid>
              </Grid>
            </Box>
          </>
        )}
      </Container>
    </>
  );
}
