import { React, useContext } from "react";
import { CartContext } from "../context/CartContext";

const DetailSummary = ({ tags, price, total, image, idProduct }) => {
  const { deleteProduct } = useContext(CartContext);

  const deleteItem = () => {
    deleteProduct(idProduct);
  };
  return (
    <div>
      <div>
        <img alt="img-cart" src={image} />
        <p>{tags} </p>
        <p>{total} </p>
        <button onClick={deleteItem}> Eliminar </button>
      </div>
    </div>
  );
};

export default DetailSummary;
