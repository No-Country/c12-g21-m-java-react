import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Box,
  Container,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Typography,
  Button,
  TextField,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import BtnExaminarLocal from "../../components/buttons/BtnExaminarLocal";
import axios from "axios";
import { Toaster, toast } from "sonner";

export default function Vender() {
  const [selectedHouseRoom, setSelectedHouseRoom] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedCondition, setSelectedCondition] = useState(null);
  const [photos, setPhotos] = useState([]);
  const user = useSelector((state) => state.user);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleHouseRoomChange = (event) => {
    setSelectedHouseRoom(event.target.value);
    setProductData((prevData) => ({
      ...prevData,
      categoryHouseRooms: { idCategoryHouseRooms: event.target.value },
    }));
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setProductData((prevData) => ({
      ...prevData,
      categoryProduct: { idCategoryProduct: event.target.value },
    }));
  };

  const handleConditionChange = (event) => {
    setSelectedCondition(event.target.value);
    setProductData((prevData) => ({
      ...prevData,
      categoryStatus: { idCategoryStatus: event.target.value },
    }));
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
    price: 0,
    colour: "blanco",
    active: true,
    highlight: false,
    categoryHouseRooms: { idCategoryHouseRooms: selectedHouseRoom },
    categoryProduct: { idCategoryProduct: selectedCategory },
    categoryStatus: { idCategoryStatus: selectedCondition },
    city: { idCity: user.idCity },
    user: { idUser: user.idUser },
    photos: photos,
  });

  const handleChange = (event) => {
    console.log(event.target);
    const { name, value } = event.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(productData);
  };

  const handleChangePrice = (event) => {
    const { name, value } = event.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: parseInt(value),
    }));
  };

  // Función para restablecer el estado inicial de los campos
  const resetForm = () => {
    setSelectedHouseRoom(null);
    setSelectedCategory(null);
    setSelectedCondition(null);
    setPhotos([]);
    setSelectedFiles([]);
    setProductData({
      title: "",
      description: "",
      price: 0,
      colour: "blanco",
      active: true,
      highlight: false,
      categoryHouseRooms: { idCategoryHouseRooms: null },
      categoryProduct: { idCategoryProduct: null },
      categoryStatus: { idCategoryStatus: null },
      city: { idCity: user.idCity },
      user: { idUser: user.idUser },
      photos: [],
    });
  };

  // Publica el producto //
  const handlePublicar = async (event) => {
    event.preventDefault();

    if (photos.length === 0) {
      toast.error("Debes subir al menos una foto del producto");
      return;
    }

    const url =
      "https://c12-21-m-java-react-ecommerce.onrender.com/products/saveProduct";

    axios
      .post(url, { ...productData })
      .then((response) => {
        console.log("Respuesta del servidor:", response.data);
        toast.success("Se subió el producto con éxito");
        resetForm();
      })
      .catch((error) => {
        console.error("Error al hacer la petición:", error);
        toast.error("Hubo un error al subir el producto");
      });
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div>
      <Container maxWidth="md">
        <Box
          sx={{ marginTop: isMobile ? "2rem" : "4rem", textAlign: "center" }}
        >
          <Typography variant={isMobile ? "h4" : "h2"}>
            Vende tus productos usados de forma simple
          </Typography>
        </Box>
        <Box
          component="form"
          onSubmit={handlePublicar}
          sx={{ padding: isMobile ? "0.5rem" : "3rem" }}
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
            type="number"
            value={productData.price}
            onChange={handleChangePrice}
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
          <BtnExaminarLocal
            onFileChange={handleChange}
            setPhotos={setPhotos}
            setProductData={setProductData}
            selectedFiles={selectedFiles}
            setSelectedFiles={setSelectedFiles}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              margin: "1rem",
            }}
          >
            <Button type="submit" variant="contained" size="large">
              Publicar
            </Button>
          </Box>
        </Box>
      </Container>
      <Toaster richColors position="bottom-right" />
    </div>
  );
}
