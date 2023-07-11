import './compras-style.css'
import ItemListContainer from '../../components/itemListContainer/ItemListContainer';
import ProductFilter from '../../components/productFilter/ProductFilter';
import ProductOrder from '../../components/productOrder/ProductOrder';
import { useEffect, useState } from 'react';

const Compras = () => {

  const products = [
    { title: "Mesada Marmol", description: "Lorem ipsum, dolor sit amet", price: 1500, img: "", id: 1, category: "Mesadas", ambient: "Living", condition: "Buena" },
    { title: "Mesada de Granito", description: "Lorem ipsum, dolor sit amet", price: 2500, img: "", id: 2, category: "Mesadas", ambient: "Living", condition: "Muy buena" },
    { title: "Alfombra", description: "Lorem ipsum, dolor sit amet", price: 3500, img: "", id: 3, category: "Accesorios", ambient: "Living", condition: "Excelente" },
    { title: "Lámpara de pie", description: "Lorem ipsum, dolor sit amet", price: 4500, img: "", id: 4, category: "Accesorios", ambient: "Dormitorio", condition: "Buena" },
    { title: "Sofá 2 cuerpos", description: "Lorem ipsum, dolor sit amet", price: 5500, img: "", id: 5, category: "Muebles", ambient: "Living", condition: "Muy buena" },
    { title: "Mesa de comedor", description: "Lorem ipsum, dolor sit amet", price: 6500, img: "", id: 6, category: "Muebles", ambient: "Comedor", condition: "Excelente" },
    { title: "Cama 2 plazas", description: "Lorem ipsum, dolor sit amet", price: 7500, img: "", id: 7, category: "Muebles", ambient: "Dormitorio", condition: "Buena" },
    { title: "Sillón de cuero", description: "Lorem ipsum, dolor sit amet", price: 8500, img: "", id: 8, category: "Muebles", ambient: "Living", condition: "Muy buena" },
    { title: "Mesita de luz", description: "Lorem ipsum, dolor sit amet", price: 9500, img: "", id: 10, category: "Muebles", ambient: "Dormitorio", condition: "Excelente" },
    { title: "Silla de madera", description: "Lorem ipsum, dolor sit amet", price: 10500, img: "", id: 9, category: "Muebles", ambient: "Comedor", condition: "Buena" },
  ]

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