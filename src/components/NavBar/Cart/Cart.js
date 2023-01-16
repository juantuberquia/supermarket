import { React, useContext } from "react";
import { Link } from "react-router-dom";
import "./Cart.css";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
  const { totalProducts } = useContext(CartContext);

  return (
    <div className="content-icon-cart">
      <Link to="/cart">
        <span className="quantity-badge">
          {totalProducts ? totalProducts : null}
        </span>
        <img src="/assets/cart.svg" alt="icon-cart" />
      </Link>
    </div>
  );
};

export default Cart;
