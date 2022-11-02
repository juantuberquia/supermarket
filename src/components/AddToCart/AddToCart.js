import React from "react";
import { Link } from "react-router-dom";
import "./AddToCart.css";

const AddToCart = ({ AddToCart }) => {
  return <Link className="button-link add-to-cart">{AddToCart}</Link>;
};

export default AddToCart;
