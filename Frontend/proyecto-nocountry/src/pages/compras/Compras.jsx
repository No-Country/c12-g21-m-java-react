import './compras-style.css';
import ItemListContainer from "../../components/itemListContainer/ItemListContainer";
import ProductFilter from "../../components/productFilter/ProductFilter";
import ProductOrder from "../../components/productOrder/ProductOrder";
import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Grid, useMediaQuery, Button, Drawer } from "@mui/material";
import FilterListIcon from '@mui/icons-material/FilterList';
export default function Compras() {
  const [options, setOptions] = useState({
    houseRoom: null,
    category: null,
    condition: null,
    priceFrom: null,
    priceTo: null,
    idCity: null,
  });
  const isMobile = useMediaQuery("(max-width: 899px)");

  const [order, setOrder] = useState(2);
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [open, setOpen] = useState(isMobile ? false : true)

  useEffect(() => {

    const { category, houseRoom, condition, priceFrom, priceTo, idCity } =
      options;
    const url =
      "https://c12-21-m-java-react-ecommerce.onrender.com/products/search/filters";

    axios.post(url, {
      idCategoryHouseRooms: houseRoom,
      idCategoryProduct: category,
      idCategoryStatus: condition,
      priceFrom: priceFrom,
      priceTo: priceTo,
      idCity: idCity,
    })
      .then(response => {
        const data = response.data;
        if (order == 0) {
          data.sort((a, b) => a.price - b.price);
        } else if (order == 1) {
          data.sort((a, b) => b.price - a.price);
        }
        setProductsFiltered(data);
      })
      .catch(err => {
        console.log(err)
      })
  }, [options, order]);

  return (
    <>
      <Container>
        <div className="banner-container">
          <div className='banner'></div>
        </div>

        <Grid container spacing={2}>
          {isMobile ?
            <>
              <div className='w-100 border m-3 d-flex align-items-center'>

                <div style={{ cursor: "pointer", marginLeft: "1em" }} onClick={() => setOpen((prevState) => !prevState)}>
                  <FilterListIcon />
                </div>
                <ProductOrder order={order} setOrder={setOrder} />

              </div>
              <Grid item xs={6} md={2}>
                <Drawer open={open} anchor="left" onClose={() => setOpen(false)}>
                  <ProductFilter setOptions={setOptions} />
                </Drawer>
              </Grid>
            </> :
            <>
              <div className='w-100 border my-3 d-flex align-items-center'>
                <ProductOrder order={order} setOrder={setOrder} />
              </div>
              <Grid item xs={6} md={2}>
                <ProductFilter setOptions={setOptions} />
              </Grid>
            </>

          }

          <Grid item xs={20} md={10}>
            <ItemListContainer products={productsFiltered} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
