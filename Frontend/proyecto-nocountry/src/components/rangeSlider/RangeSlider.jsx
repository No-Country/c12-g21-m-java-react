import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

// Función para formatear el valor del precio
function valuetext(value) {
  return `$${value}`;
}

// Rango mínimo y máximo de precios
const MIN_PRICE = 0;
const MAX_PRICE = 100000;


// eslint-disable-next-line react/prop-types
export default function PriceRangeSlider({ setOptions }) {
  const [value, setValue] = useState([MIN_PRICE, MAX_PRICE]);

  useEffect(() => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      priceFrom: value[0] ? parseInt(value[0]) : MIN_PRICE,
      priceTo: value[1] ? parseInt(value[1]) : MAX_PRICE,
    }));
  }, [value, setOptions]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <Box sx={{ width: 150, mt: 2, mb: 5 }}>
      <Slider
        getAriaLabel={() => "Price range"}
        value={value}
        onChange={handleChange}
        valueLabelFormat={valuetext}
        min={MIN_PRICE}
        max={MAX_PRICE}
      />
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
        <span>{valuetext(value[0])}</span>
        <span>{valuetext(value[1])}</span>
      </Box>
    </Box>
  );
}
