import { React, useState, createContext } from "react";

export const CartContext = createContext();

const CartProvider = (props) => {
  let { children } = props;
  const [productCart, setProductCart] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);

  // funcion suma item del producto
  const setValueCart = (count, tags, price, idProduct) => {
    countProducts(count);
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
    } else {
      setProductCart([...productCart, { count, tags, price, idProduct }]);
    }
  };

  //funcion para eliminar un solo producto

  //funcion para sumar total $ del carrito
  // este seria con use efect

  //funcion para sumar unidades totales del carrito
  const countProducts = (countProducts) => {
    let valorStorage, totalProducts;

    if (localStorage?.getItem("totalProducts")) {
      valorStorage = JSON.parse(localStorage?.getItem("totalProducts"));
      totalProducts = valorStorage + countProducts;
      localStorage.setItem("totalProducts", totalProducts);
      setTotalProducts(totalProducts);
    } else {
      localStorage.setItem("totalProducts", countProducts);
      setTotalProducts(JSON.parse(localStorage?.getItem("totalProducts")));
    }
  };

  return (
    <CartContext.Provider value={{ productCart, setValueCart, totalProducts }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
