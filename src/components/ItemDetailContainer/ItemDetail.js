import { React, useContext, useState, Fragment, useEffect } from "react";
import Contador from "../Contador/Contador";
import "./ItemDetail.css";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({ image, tags, price, idProduct }) => {
  const [count, setCount] = useState(1);
  const [priceFormated, setPriceFormated] = useState();

  const { setValueCart, summaryPrice } = useContext(CartContext);

  const formatPrice = (price) => {
    const formatCOP = { style: "currency", currency: "COP" };
    const numberFormat = new Intl.NumberFormat("es-CO", formatCOP);
    setPriceFormated(numberFormat.format(price));
  };

  useEffect(() => {
    formatPrice(price);
  }, [price]);

  const captureValues = () => {
    setValueCart(count, tags, price, idProduct, image);
    summaryPrice(price);
  };

  return (
    <>
      <div className="container-image-detail">
        <img src={image} alt="product-id" />
      </div>
      <p className="name-detail">{tags} </p>
      <p className="price-detail"> {priceFormated}</p>
      <div>
        <Contador setCount={setCount} count={count} />
        <button onClick={captureValues} className="button-link">
          Agregar al carrito
        </button>
      </div>
    </>
  );
};

export default ItemDetail;
