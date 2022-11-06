import { React, useContext, useState } from "react";
import Contador from "../Contador/Contador";
import "./ItemDetail.css";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({ image, tags, price }) => {
  const [count, setCount] = useState(1);

  const { productCart, setValueCart } = useContext(CartContext);

  const captureValues = () => {
    console.log("entra");
    setValueCart(count, tags, price);
  };

  return (
    <div className="container-detail-product">
      <img src={image} alt="product-id" />
      <p>{tags} </p>
      <p>$ {price}</p>
      <div>
        <Contador setCount={setCount} count={count} />
        <button onClick={captureValues}>agregar al carrito</button>
      </div>
    </div>
  );
};

export default ItemDetail;
