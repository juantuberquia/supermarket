import { React, useContext } from "react";
import { CartContext } from "../context/CartContext";
import DetailSummary from "./DetailSummary";
import { Link } from "react-router-dom";
import "./DetailSummary.css";

const SummaryCart = () => {
  const { productCart, totalPrice, deleteAll } = useContext(CartContext);

  const emptyCart = () => {
    deleteAll();
  };

  return (
    <>
      <div className="container-detail-product">
        {productCart.map((product) => (
          <DetailSummary
            key={product.idProduct}
            tags={product.tags}
            total={product.count}
            image={product.image}
            idProduct={product.idProduct}
          />
        ))}
      </div>

      {totalPrice ? (
        <div className="mt-5 mx-auto w-75">
          <p className="price-detail"> Total: $ {totalPrice}</p>
          <div className="d-flex justify-content-between">
            <button onClick={emptyCart} className="bg-danger  style-button">
              Vaciar Carrito
            </button>
            <Link
              aria-current="page"
              to={"/checkout"}
              className="bg-success style-button"
            >
              Finalizar compra
            </Link>
          </div>
        </div>
      ) : (
        <p> No haz agregado productos </p>
      )}
    </>
  );
};

export default SummaryCart;
