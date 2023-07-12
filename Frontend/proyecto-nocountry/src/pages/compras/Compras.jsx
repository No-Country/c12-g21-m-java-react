import './compras-style.css'
import ItemListContainer from '../../components/itemListContainer/ItemListContainer';
import ProductFilter from '../../components/productFilter/ProductFilter';
import ProductOrder from '../../components/productOrder/ProductOrder';
import { useEffect, useState } from 'react';
import { products } from '../../database/products';

const Compras = () => {

 

  const [options, setOptions] = useState({
    category: '',
    ambient: '',
    condition: ''
  })

  const [order, setOrder] = useState(2)

  const [productsFiltered, setProductsFiltered] = useState(products)


  useEffect(() => {
    let productosFiltrados = products
    console.log(options)
    if (options.ambient !== '' && options.ambient !== 'Todos') {
      productosFiltrados = productosFiltrados.filter(
        (product) => product.ambient === options.ambient
      );
    }
    if (options.category !== '' && options.category !== 'Todos') {
      productosFiltrados = productosFiltrados.filter(
        (product) => product.category === options.category
      );
    }
    if (options.condition !== '' && options.condition !== 'Todos') {
      productosFiltrados = productosFiltrados.filter(
        (product) => product.condition === options.condition
      );
    }
    if (order == 0) {
      productosFiltrados.sort((a, b) => a.price - b.price);
    } else if (order == 1) {
      productosFiltrados.sort((a, b) => b.price - a.price);
    }
    setProductsFiltered(productosFiltrados)
    console.log(productsFiltered);
  }, [options, order]);

  return (
    <div className="compras-container">
      <div className="container">
        <div className="title-container">
          <h1>Lorem ipsum, dolor sit amet</h1>
        </div>
        <ProductOrder order={order} setOrder={setOrder}/>
        <div className="row">
          <div className="filtro col-md-2">
            <ProductFilter options={options} setOptions={setOptions} />
          </div>
          <div className="product-container col-md-10">
            <ItemListContainer products={productsFiltered} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compras;