import React from "react";
import Contador from "../Contador/Contador";
import "./ItemDetail.css";

const ItemDetail = ({ image, tags, price }) => {
  return (
    <div className="container-detail-product">
      <img src={image} alt="product-id" />
      <p>{tags}</p>
      <p>$ {price}</p>
      <Contador />
    </div>
  );
};

export default ItemDetail;
