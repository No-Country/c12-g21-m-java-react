import './compras-style.css'
import ItemListContainer from '../../components/itemListContainer/ItemListContainer';
import ProductFilter from '../../components/productFilter/ProductFilter';
const Compras = () => {

  


  return (
    <div className='compras-container'>
      <div className="container">
        <div className="title-container">
          <h1>Lorem ipsum, dolor sit amet</h1>
        </div>
        <div className='row'>
          <div className='filtro col-md-2'>
            <ProductFilter/>
          </div>
      
          <div className='product-container col-md-10'>
            <ItemListContainer/>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Compras;
