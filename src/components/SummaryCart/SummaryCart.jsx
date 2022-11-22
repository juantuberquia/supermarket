import { React, useContext } from "react";
import { CartContext } from "../context/CartContext";
import DetailSummary from "./DetailSummary";

const SummaryCart = () => {
  const { productCart } = useContext(CartContext);

  console.log(productCart);

  return (
    <div>
      {productCart.map((product) => (
        <DetailSummary
          key={product.idProduct}
          tags={product.tags}
          total={product.count}
        />
      ))}
    </div>
  );
};

export default SummaryCart;
