import './compras-style.css'
import ItemListContainer from '../../components/itemListContainer/ItemListContainer';
import ProductFilter from '../../components/productFilter/ProductFilter';
import ProductOrder from '../../components/productOrder/ProductOrder';
import { useEffect, useState } from 'react';
import { getFilteredProducts, getProducts } from '../../firebase/functions';
/* import { products } from '../../database/products';
 */
const Compras = () => {



  const [options, setOptions] = useState({
    category: '',
    ambient: '',
    condition: ''
  })

  const [order, setOrder] = useState(2)

  const [productsFiltered, setProductsFiltered] = useState([])
  useEffect(() => {
    let productosFiltrados;

    const fetchData = async () => {
      try {
        if (options.ambient !== '' && options.ambient !== 'Todos') {
          productosFiltrados = await getFilteredProducts('ambient', options.ambient)

        } else
          if (options.category !== '' && options.category !== 'Todos') {
            productosFiltrados = await getFilteredProducts('category', options.category)

          } else
            if (options.condition !== '' && options.condition !== 'Todos') {
              productosFiltrados = await getFilteredProducts('condition', options.condition)

            } else {
              productosFiltrados = await getProducts()


            }
        if (order == 0) {
          productosFiltrados.sort((a, b) => a.price - b.price);
        } else if (order == 1) {
          productosFiltrados.sort((a, b) => b.price - a.price);
        }
        setProductsFiltered(productosFiltrados)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [options, order]);

  return (
    <div className="compras-container">
      <div className="container">
        <div className="title-container">
          <h1>Lorem ipsum, dolor sit amet</h1>
        </div>
        <ProductOrder order={order} setOrder={setOrder} />
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