import React from "react";
import "./Item.css";

const Item = ({ image, tags, price }) => {
  return (
    <div className="card">
      <a href="/#" className="anchor">
        <img src={image} alt="supermarket" className="img-product" />
      </a>
      <div className="card-img-top">
        <h5 className="card-title"> {tags}</h5>
        <p className="card-text text-muted"> Precio : {price} </p>
      </div>
    </div>
  );
};

export default Item;
