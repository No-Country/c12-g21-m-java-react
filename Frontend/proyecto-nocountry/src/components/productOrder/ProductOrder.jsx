import React from 'react';
import SelectSmall from '../menuFilter/SelectSmall';

const ProductOrder = ({ order, setOrder }) => {
  
  return (
    <div className='w-100 border my-3'>
      <SelectSmall
        order={order}
        setOrder={setOrder}
      />
    </div>
  );
};

export default ProductOrder;
