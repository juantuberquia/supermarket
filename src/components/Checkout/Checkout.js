import { React, useContext } from "react";
import Form from "../Form/Form";
import { CartContext } from "../context/CartContext";
import DetailSummary from "../SummaryCart/DetailSummary";

const Checkout = () => {
  const { productCart, totalPrice, totalProducts } = useContext(CartContext);
  return (
    <>
      {totalPrice ? (
        <div>
          <Form />
          {productCart.map((product) => (
            <DetailSummary
              key={product.idProduct}
              tags={product.tags}
              total={product.count}
              image={product.image}
              idProduct={product.idProduct}
            />
          ))}
          <p>precio:{totalPrice} </p>
          <p>productos : {totalProducts}</p>
        </div>
      ) : null}
    </>
  );
};

export default Checkout;
