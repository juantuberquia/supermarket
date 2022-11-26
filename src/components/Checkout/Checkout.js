import { React, useContext } from "react";
import Form from "../Form/Form";
import { CartContext } from "../context/CartContext";
import DetailSummary from "../SummaryCart/DetailSummary";
import SuccesOrder from "../SuccesOrder/SuccesOrder";

const Checkout = () => {
  const { productCart, totalPrice, totalProducts, orderIdProduct, deleteAll } =
    useContext(CartContext);

  if (orderIdProduct) {
    deleteAll([]);
    return <SuccesOrder idOrder={orderIdProduct} />;
  }

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
      ) : (
        <p> No hay productos en el carrito </p>
      )}
    </>
  );
};

export default Checkout;
