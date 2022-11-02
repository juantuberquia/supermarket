import React from "react";
import Contador from "../Contador/Contador";
import "./ItemDetail.css";
import AddToCart from "../AddToCart/AddToCart";

const ItemDetail = ({ image, tags, price }) => {
  return (
    <div className="container-detail-product">
      <img src={image} alt="product-id" />
      <p>{tags}</p>
      <p>$ {price}</p>
      <div>
        <Contador />
        <AddToCart AddToCart="Agregar al carrito" />
      </div>
    </div>
  );
};

export default ItemDetail;
