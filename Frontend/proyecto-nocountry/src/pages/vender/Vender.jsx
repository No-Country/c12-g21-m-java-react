import { useEffect, useState } from "react";
import {
  CssBaseline,
  Box,
  Container,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Typography,
  Button,
  TextField,
} from "@mui/material";
import BtnExaminarLocal from "../../components/buttons/BtnExaminarLocal";
import axios from "axios";

export default function Vender() {
  const [selectedHouseRoom, setSelectedHouseRoom] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCondition, setSelectedCondition] = useState("");
  const [photos, setPhotos] = useState([]);

  
  const handleHouseRoomChange = (event) => {
    setSelectedHouseRoom(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleConditionChange = (event) => {
    setSelectedCondition(event.target.value);
  };

  const [categoryStatusList, setCategoryStatusList] = useState([]);
  const [categoryProductList, setCategoryProductList] = useState([]);
  const [categoryHouseRoomsList, setCategoryHouseRoomsList] = useState([]);

  useEffect(() => {
    const statusUrl =
      "https://c12-21-m-java-react-ecommerce.onrender.com/categoryStatus/list";
    const productUrl =
      "https://c12-21-m-java-react-ecommerce.onrender.com/categoryProduct/list";
    const roomsUrl =
      "https://c12-21-m-java-react-ecommerce.onrender.com/categoryHouseRooms/list";

    axios
      .all([axios.get(statusUrl), axios.get(productUrl), axios.get(roomsUrl)])
      .then(
        axios.spread((statusResponse, productResponse, roomsResponse) => {
          const statusData = statusResponse.data;
          const productData = productResponse.data;
          const roomsData = roomsResponse.data;

          setCategoryStatusList(statusData);
          setCategoryProductList(productData);
          setCategoryHouseRoomsList(roomsData);
        })
      )
      .catch((error) => {
        console.error("Error al hacer la solicitud:", error);
      });
  }, []);

  const [productData, setProductData] = useState({
    title: "",
    description: "",
    price: "",
    colour: "",
    active: "",
    highlight: "",
    idCategoryHouseRooms: selectedHouseRoom,
    idCategoryProduct: selectedCategory,
    idCategoryStatus: selectedCondition,
    idCity: "",
    idUserSeller: "",
    photos: photos,
  });



  const handleChange = (event) => {
    const { name, value } = event.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(productData)
  };



  // Publica el producto //
  const handlePublicar = async (event) => {
    setProductData((prevData) => ({
      ...prevData,
      "photos": photos,
    }));
    event.preventDefault();
    const url =
      "https://c12-21-m-java-react-ecommerce.onrender.com/products/saveProduct";

    axios
      .post(url, productData)
      .then((response) => {
        console.log("Respuesta del servidor:", response.data);
      })
      .catch((error) => {
        console.error("Error al hacer la petición:", error);
      });
  };

  return (
    <div>
      <CssBaseline />
      <Container maxWidth="md">
        <Box sx={{ margin: "2rem", textAlign: "center" }}>
          <Typography variant="h2">
            Vende tus productos usados de forma simple
          </Typography>
        </Box>
        <Box
          component="form"
          onSubmit={handlePublicar}
          sx={{ padding: "1rem 5rem" }}
        >
          <FormControl fullWidth variant="outlined" sx={{ margin: "0.5rem 0" }}>
            <InputLabel htmlFor="ambient">Seleccionar ambiente</InputLabel>
            <Select
              label="Seleccionar ambiente"
              name="ambient"
              value={selectedHouseRoom}
              onChange={handleHouseRoomChange}
              required
            >
              {categoryHouseRoomsList.map((categoryHouseRoom) => (
                <MenuItem
                  key={categoryHouseRoom.idCategoryHouseRooms}
                  value={categoryHouseRoom.idCategoryHouseRooms}
                >
                  {categoryHouseRoom.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth variant="outlined" sx={{ margin: "0.5rem 0" }}>
            <InputLabel htmlFor="category">Seleccionar categoría</InputLabel>
            <Select
              label="Seleccionar categoría"
              name="category"
              value={selectedCategory}
              onChange={handleCategoryChange}
              required
            >
              {categoryProductList.map((categoryProduct) => (
                <MenuItem
                  key={categoryProduct.idCategoryProduct}
                  value={categoryProduct.idCategoryProduct}
                >
                  {categoryProduct.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth variant="outlined" sx={{ margin: "0.5rem 0" }}>
            <InputLabel htmlFor="condition">Seleccionar condición</InputLabel>
            <Select
              label="Seleccionar condición"
              name="condition"
              value={selectedCondition}
              onChange={handleConditionChange}
              required
            >
              {categoryStatusList.map((categoryStatus) => (
                <MenuItem
                  key={categoryStatus.idCategoryStatus}
                  value={categoryStatus.idCategoryStatus}
                >
                  {categoryStatus.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            fullWidth
            variant="outlined"
            label="Título"
            name="title"
            value={productData.title}
            onChange={handleChange}
            sx={{ margin: "0.5rem 0" }}
            required
          />
          <TextField
            required
            fullWidth
            variant="outlined"
            label="Precio $"
            name="price"
            value={productData.price}
            onChange={handleChange}
            inputProps={{
              inputMode: "numeric",
              pattern: "[0-9]*",
            }}
          />
          <TextField
            fullWidth
            variant="outlined"
            label="Descripción del producto"
            name="description"
            value={productData.description}
            onChange={handleChange}
            multiline
            rows={4}
            sx={{ margin: "0.5rem 0" }}
            required
          />
          <hr />
          <TextField
            fullWidth
            variant="outlined"
            label="Ubicación del producto"
            name="location"
            value={productData.location}
            onChange={handleChange}
            sx={{ margin: "0.5rem 0" }}
            required
          />
          <hr />
          <BtnExaminarLocal onFileChange={handleChange} setPhotos={setPhotos} />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "5rem",
            }}
          >
            <Button type="submit" variant="contained" size="large">
              Publicar
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
