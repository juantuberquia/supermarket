import { React, useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./DetailSummary.css";

const DetailSummary = ({ tags, price, total, image, idProduct }) => {
  const { deleteProduct } = useContext(CartContext);

  const deleteItem = () => {
    deleteProduct(idProduct);
  };
  return (
    <div>
      <div className="container-image-detail">
        <img alt="img-cart" src={image} />
      </div>
      <p className="name-detail">{tags} </p>
      <p className="quantity-product"> Cantidad: {total} </p>
      <button onClick={deleteItem} className="button-link bg-secondary">
        Eliminar producto
      </button>
    </div>
  );
};

export default DetailSummary;
