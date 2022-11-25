import { React, useContext, useState } from "react";
import Contador from "../Contador/Contador";
import "./ItemDetail.css";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({ image, tags, price, idProduct }) => {
  const [count, setCount] = useState(1);

  const { setValueCart, summaryPrice } = useContext(CartContext);

  const captureValues = () => {
    setValueCart(count, tags, price, idProduct, image);
    summaryPrice(price);
  };

  return (
    <div className="container-detail-product">
      <img src={image} alt="product-id" />
      <p>{tags} </p>
      <p>$ {price}</p>
      <div>
        <Contador setCount={setCount} count={count} />
        <button onClick={captureValues}>Agregar al carrito</button>
      </div>
    </div>
  );
};

export default ItemDetail;
