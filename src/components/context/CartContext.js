import { React, useState, createContext } from "react";

export const CartContext = createContext();

const CartProvider = (props) => {
  const [productCart, setProductCart] = useState(["11"]);

  const setValueCart = (count, tags, price) => {
    setProductCart(count, tags, price);

    console.log(productCart);
  };

  let { children } = props;

  return (
    <CartContext.Provider value={{ productCart, setValueCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
