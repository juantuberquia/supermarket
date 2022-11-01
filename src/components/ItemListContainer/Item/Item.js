import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ image, tags, price, id }) => {
  return (
    <div className="card">
      <a href="/#" className="anchor">
        <img src={image} alt="supermarket" className="img-product" />
      </a>
      <div className="card-img-top">
        <h5 className="card-title"> {tags}</h5>
        <p className="card-text text-muted"> $ {price} </p>
      </div>
      <Link to={`/item/${id}`}> Ver Detalle</Link>
    </div>
  );
};

export default Item;
