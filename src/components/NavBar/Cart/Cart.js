import React from "react";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  return (
    <div className="content-icon-cart">
      <Link to="/cart">
        <img src="/assets/cart.svg" alt="icon-cart" />
      </Link>
    </div>
  );
};

export default Cart;
