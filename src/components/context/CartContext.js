import { React, useState, createContext } from "react";

export const CartContext = createContext();

const CartProvider = (props) => {
  let { children } = props;
  const [productCart, setProductCart] = useState([]);

  const setValueCart = (count, tags, price, idProduct) => {
    //***  VALIDATES FUNCTIONS*** //

    const isInInside = (idProduct) => {
      return productCart.some((item) => item.idProduct === idProduct);
    };

    // validar si el producto esta agregado
    if (isInInside(idProduct)) {
      let valor = productCart.map((item) => {
        if (item.idProduct === idProduct) {
          setProductCart([...productCart], (item.count = count + item.count));
        }
      });
    }
    // agrega producto
    else {
      setProductCart([...productCart, { count, tags, price, idProduct }]);
    }
  };

  //funcion para eliminar un solo producto

  //funcion para sumar total $ del carrito
  // este seria con use efect

  //funcion para sumar unidades totales del carrito (CartWidget)

  return (
    <CartContext.Provider value={{ productCart, setValueCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
