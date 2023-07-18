import { FormGroup, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const ProductFilter = ({ setOptions }) => {
  const [selectedHouseRoom, setSelectedHouseRoom] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCondition, setSelectedCondition] = useState("");

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

  useEffect(() => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      houseRoom: selectedHouseRoom,
      category: selectedCategory,
      condition: selectedCondition,
    }));
  }, [selectedHouseRoom, selectedCategory, selectedCondition, setOptions]);

  return (
    <div>
      <h3 className="filtro-title">Filtrar por:</h3>

      {/* houseRoom */}
      <h5>Habitación</h5>
      <FormGroup>
        <RadioGroup
          aria-label="house-room"
          name="houseRoom"
          value={selectedHouseRoom}
          onChange={handleHouseRoomChange}
        >
          {categoryHouseRoomsList.map((categoryHouseRoom) => (
            <FormControlLabel
              key={categoryHouseRoom.idCategoryHouseRooms}
              value={categoryHouseRoom.idCategoryHouseRooms}
              control={<Radio />}
              label={categoryHouseRoom.title}
            />
          ))}
          <FormControlLabel value="" control={<Radio />} label="Todos" />
        </RadioGroup>
      </FormGroup>

      {/* category */}
      <h5>Categoría</h5>
      <FormGroup>
        <RadioGroup
          aria-label="category"
          name="category"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          {categoryProductList.map((categoryProduct) => (
            <FormControlLabel
              key={categoryProduct.idCategoryProduct}
              value={categoryProduct.idCategoryProduct}
              control={<Radio />}
              label={categoryProduct.title}
            />
          ))}
          <FormControlLabel value="" control={<Radio />} label="Todos" />
        </RadioGroup>
      </FormGroup>

      {/* condition */}
      <h5>Condición</h5>
      <FormGroup>
        <RadioGroup
          aria-label="condition"
          name="condition"
          value={selectedCondition}
          onChange={handleConditionChange}
        >
          {categoryStatusList.map((category) => (
            <FormControlLabel
              key={category.idCategoryStatus}
              value={category.idCategoryStatus}
              control={<Radio />}
              label={category.title}
            />
          ))}
          <FormControlLabel value="" control={<Radio />} label="Todos" />
        </RadioGroup>
      </FormGroup>
    </div>
  );
};

export default ProductFilter;
