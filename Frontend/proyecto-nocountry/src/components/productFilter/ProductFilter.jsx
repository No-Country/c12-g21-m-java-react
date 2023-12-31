import { FormGroup, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import RangeSlider from "../rangeSlider/RangeSlider";

const ProductFilter = ({ setOptions }) => {
  const [selectedHouseRoom, setSelectedHouseRoom] = useState();
  const [selectedCategory, setSelectedCategory] = useState();
  const [selectedCondition, setSelectedCondition] = useState();

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
      .catch()
}, []);

  useEffect(() => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      houseRoom: selectedHouseRoom ? parseInt(selectedHouseRoom) : null,
      category: selectedCategory ? parseInt(selectedCategory) : null,
      condition: selectedCondition ? parseInt(selectedCondition) : null,
    }));
  }, [selectedHouseRoom, selectedCategory, selectedCondition, setOptions]);

  return (
    <div style={{paddingLeft: "2em"}}>
    <h5>Filtrar por:</h5>
      <b>Precio</b>

      <RangeSlider setOptions={setOptions} />
      <b>Habitación</b>
      <FormGroup>
        <RadioGroup
          aria-label="house-room"
          name="houseRoom"
          value={selectedHouseRoom ? selectedHouseRoom : null}
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
          <FormControlLabel value={null} control={<Radio />} label="Todos" />
        </RadioGroup>
      </FormGroup>

      <b>Categoría</b>
      <FormGroup>
        <RadioGroup
          aria-label="category"
          name="category"
          value={selectedCategory ? selectedCategory : null}
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
          <FormControlLabel value={null} control={<Radio />} label="Todos" />
        </RadioGroup>
      </FormGroup>

      <b>Condición</b>
      <FormGroup>
        <RadioGroup
          aria-label="condition"
          name="condition"
          value={selectedCondition ? selectedCondition : null}
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
          <FormControlLabel value={null} control={<Radio />} label="Todos" />
        </RadioGroup>
      </FormGroup>
    </div>
  );
};

export default ProductFilter;
