/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { Box, Button, Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";

const BtnExaminarLocal = ({
  onFileChange,
  setPhotos,
  setProductData,
  selectedFiles,
  setSelectedFiles,
}) => {
  const handleUploadFiles = async () => {
    if (selectedFiles.length > 0) {
      selectedFiles.map((file) => {
        axios
          .post(
            "https://c12-21-m-java-react-ecommerce.onrender.com/products/upload",
            {
              multipartFile: file,
            },
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          )
          .then((response) => {
            const imageUrl = response.data.url;
            setPhotos((prevPhotos) => [
              ...prevPhotos,
              { imagePath: imageUrl, first: true },
            ]);
            setProductData((prevData) => ({
              ...prevData,
              photos: [{ imagePath: imageUrl, first: true }],
            }));
          })
          .catch((error) => {
            console.log(error);
          });
      });
    }
  };
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles((prevSelectedFiles) => [...prevSelectedFiles, ...files]);
    onFileChange([...selectedFiles, ...files]);
  };

  useEffect(() => {
    handleUploadFiles();
  }, [selectedFiles]);

  return (
    <div>
      <Box
        sx={{
          height: "13rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p>Añadir foto del producto</p>
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
        
        <Box>
        <label htmlFor="examinar">
          <Button
            variant="contained"
            component="span"
            startIcon={<SearchIcon />} 
            sx={{m: "1rem"}}          
          >
            SUBIR FOTOS
          </Button>

          <input
            type="file"
            name="examinar"
            id="examinar"
            hidden
            multiple
            onChange={handleFileChange}
          />
          <Button>
            <DeleteIcon onClick={() => setSelectedFiles([])} />
          </Button>
        </label>
        </Box>        
      </Box>
    </div>
  );
};

export default BtnExaminarLocal;
