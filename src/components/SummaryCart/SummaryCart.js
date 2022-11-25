import { React, useContext } from "react";
import { CartContext } from "../context/CartContext";
import DetailSummary from "./DetailSummary";
import { Link } from "react-router-dom";

const SummaryCart = () => {
  const { productCart, totalPrice, deleteAll } = useContext(CartContext);

  const emptyCart = () => {
    deleteAll();
  };

  return (
    <div>
      {productCart.map((product) => (
        <DetailSummary
          key={product.idProduct}
          tags={product.tags}
          total={product.count}
          image={product.image}
          idProduct={product.idProduct}
        />
      ))}

      {totalPrice ? (
        <div>
          <p> total: $ {totalPrice}</p>
          <button onClick={emptyCart}>Vaciar Carrito</button>
          <Link aria-current="page" to={"/checkout"}>
            Ir a checkout
          </Link>
        </div>
      ) : (
        <p> No haz agregado productos </p>
      )}
    </div>
  );
};

export default SummaryCart;
