import { useState } from "react";
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
// import InputLink from "../../components/inputs/InputLink";
//import InputText from "../../components/inputs/InputText";
// import InputLinkEstado from "../../components/inputs/InputLinkEstado";
//import InputPrice from "../../components/inputs/InputPrice";
import BtnExaminarLocal from "../../components/buttons/BtnExaminarLocal";
import { postProduct } from "../../firebase/functions";

const Vender = () => {
  const [productData, setProductData] = useState({
    ambient: "",
    category: "",
    condition: "",
    datetime: "",
    description: "",
    img: [],
    location: "",
    price: "",
    title: "",
    userId: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevProductData) => ({
      ...prevProductData,
      [name]: value,
    }));
  };

  const handlePublicar = async (e) => {
    e.preventDefault();

    const requiredFields = [
      "ambient",
      "category",
      "condition",
      "location",
      "title",
      "description",
      "price",
    ];
    const missingFields = requiredFields.filter((field) => !productData[field]);

    if (missingFields.length > 0) {
      console.log("Faltan campos requeridos: ", missingFields);
      return;
    }

    console.log("Producto a publicar:", productData);

    const success = await postProduct(productData);

    if (success) {
      console.log("Producto publicado exitosamente");

      setProductData({
        ambient: "",
        category: "",
        condition: "",
        datetime: "",
        description: "",
        img: [],
        location: "",
        price: "",
        title: "",
        userId: "",
      });
    } else {
      console.log("Hubo un error al publicar producto");
    }
  };

  // const handleFileChange = (files) => {
  //   // Aquí actualizamos el estado productData para incluir las imágenes seleccionadas
  //   setProductData((prevProductData) => ({
  //     ...prevProductData,
  //     img: files,
  //   }));
  // };

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
              value={productData.ambient}
              onChange={handleChange}
              required
            >
              <MenuItem value="Living">Living</MenuItem>
              <MenuItem value="Comedor">Comedor</MenuItem>
              <MenuItem value="Dormitorio">Dormitorio</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth variant="outlined" sx={{ margin: "0.5rem 0" }}>
            <InputLabel htmlFor="category">Seleccionar categoría</InputLabel>
            <Select
              label="Seleccionar categoría"
              name="category"
              value={productData.category}
              onChange={handleChange}
              required
            >
              <MenuItem value="Muebles">Muebles</MenuItem>
              <MenuItem value="Accesorios">Accesorios</MenuItem>
              <MenuItem value="Mesadas">Mesadas</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth variant="outlined" sx={{ margin: "0.5rem 0" }}>
            <InputLabel htmlFor="condition">Seleccionar condición</InputLabel>
            <Select
              label="Seleccionar condición"
              name="condition"
              value={productData.condition}
              onChange={handleChange}
              required
            >
              <MenuItem value="Buena">Buena</MenuItem>
              <MenuItem value="Muy buena">Muy buena</MenuItem>
              <MenuItem value="Excelente">Excelente</MenuItem>
            </Select>
          </FormControl>
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
          <hr />
          {/* <BtnExaminarLocal onFileChange={handleFileChange} /> */}
          <BtnExaminarLocal />
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
};

export default Vender;
