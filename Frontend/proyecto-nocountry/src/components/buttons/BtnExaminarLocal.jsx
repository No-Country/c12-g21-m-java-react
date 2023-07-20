/* eslint-disable react/prop-types */
import { useState } from "react";
import { Box, Button, Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios";
const BtnExaminarLocal = ({ onFileChange, setPhotos, setProductData, photos }) => {
  const [selectedFiles, setSelectedFiles] = useState([]); // Variable de estado para almacenar las imágenes seleccionadas
  const [showButtons, setShowButtons] = useState(true)
  const handleUploadFiles = async () => {
    if (selectedFiles.length > 0) {
      selectedFiles.map(file => {
        axios.post('https://c12-21-m-java-react-ecommerce.onrender.com/products/upload', {
          multipartFile: file
        },
          {
            headers: {
              'Content-Type': 'multipart/form-data' // Asegúrate de establecer el encabezado adecuado para archivos
            }
          }
        )
          .then(response => {
            const imageUrl = response.data.url;
            setPhotos(prevPhotos => [...prevPhotos, {imagePath: imageUrl, first: true}]);
            setProductData((prevData) => ({
              ...prevData,
              "photos": [{imagePath: imageUrl, first: true}],
            }));
            setShowButtons(false)
          })
          .catch(error => {
            console.log(error)
          })
      })

    }

  }
  const handleFileChange = (e) => {

    const files = Array.from(e.target.files); 
    setSelectedFiles((prevSelectedFiles) => [...prevSelectedFiles, ...files]); // Actualizar la variable de estado con las imágenes seleccionadas
    onFileChange([...selectedFiles, ...files]); // Pasar las imágenes seleccionadas al componente padre
  };

  return (
    <div>
      <Box
        sx={{
          height: 270,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p>Añadir hasta 6 fotografías</p>
        <Box
          sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
        >
          {selectedFiles.map((file, index) => (
            <Avatar
              key={index}
              src={URL.createObjectURL(file)}
              alt={`Imagen ${index + 1}`}
              sx={{ width: 100, height: 100, margin: "0.5rem" }}
            />
          ))}
        </Box>
        <label htmlFor="examinar">
          <Button
            variant="contained"
            component="span"
            startIcon={<SearchIcon />}
            sx={{ mb: "2rem" }}
          >
            SUBIR FOTOS
          </Button>

          <input
            type="file"
            name="examinar"
            id="examinar"
            hidden
            multiple // Permitir seleccionar múltiples archivos
            onChange={handleFileChange}
          />

        </label>
        {showButtons ?
          <div>
            <Button
              variant="contained"
              component="span"
              startIcon={<DeleteIcon />}
              onClick={() => setSelectedFiles([])}
              sx={{ mb: "2rem" }}
            >
              ELIMINAR FOTOS
            </Button>
            <Button
              variant="contained"
              component="span"
              sx={{ mb: "2rem" }}
              onClick={handleUploadFiles}
            >
              ACEPTAR
            </Button>
          </div>
          : ""}
      </Box>
    </div>
  );
};

export default BtnExaminarLocal;
