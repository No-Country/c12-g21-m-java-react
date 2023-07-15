/* eslint-disable react/prop-types */
import { useState } from "react";
import { Box, Button, Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const BtnExaminarLocal = ({ onFileChange }) => {
  const [selectedFiles, setSelectedFiles] = useState([]); // Variable de estado para almacenar las imágenes seleccionadas

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
      </Box>
    </div>
  );
};

export default BtnExaminarLocal;
