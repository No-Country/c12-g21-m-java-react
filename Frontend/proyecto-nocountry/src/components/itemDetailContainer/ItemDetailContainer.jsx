import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./itemDetail/ItemDetail";
import Spinner from "../spinner/Spinner";
import axios from "axios";

const ItemDetailContainer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://c12-21-m-java-react-ecommerce.onrender.com/products/${id}`)
      .then((response) => {
        setItem(response.data);
      });
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div
      className="position-absolute d-flex justify-content-center  w-100"
      style={{ left: 0 }}
    >
      {isLoading ? (
        <div className="mt-5">
          <Spinner />
        </div>
      ) : (
        <div className="container d-flex justify-content-center">
          <ItemDetail item={item} key={item.id} />
        </div>
      )}
    </div>
  );
};

export default ItemDetailContainer;
