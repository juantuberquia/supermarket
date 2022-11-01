import React from "react";
import Contador from "../Contador/Contador";

const ItemDetail = ({ image, tags, price }) => {
  return (
    <div>
      <img src={image} alt="product-id" />
      <p>{tags}</p>
      <p>$ {price}</p>
      <Contador />
    </div>
  );
};

export default ItemDetail;
