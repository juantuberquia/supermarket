import { React, useContext } from "react";
import { Link } from "react-router-dom";
import "./Cart.css";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
  const { totalProducts } = useContext(CartContext);

  return (
    <div className="content-icon-cart">
      <Link to="/cart">
        {totalProducts ? totalProducts : null}
        <img src="/assets/cart.svg" alt="icon-cart" />
      </Link>
    </div>
  );
};

export default Cart;
