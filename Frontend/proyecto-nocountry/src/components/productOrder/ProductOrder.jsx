import React from 'react';
import SelectSmall from '../menuFilter/SelectSmall';

const ProductOrder = ({ order, setOrder }) => {
  
  return (
      <SelectSmall
        order={order}
        setOrder={setOrder}
      />
  );
};

export default ProductOrder;
