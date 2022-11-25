import { React, useState, createContext } from "react";

export const CartContext = createContext();

const CartProvider = (props) => {
  let { children } = props;
  const [productCart, setProductCart] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  // funcion suma item del producto
  const setValueCart = (count, tags, price, idProduct, image) => {
    countProducts(count);

    const isInInside = (idProduct) => {
      return productCart.some((item) => item.idProduct === idProduct);
    };

    // validar si el producto esta agregado
    if (isInInside(idProduct)) {
      productCart.forEach((item) => {
        if (item.idProduct === idProduct) {
          setProductCart([...productCart], (item.count = count + item.count));
        }
      });
    } else {
      setProductCart([
        ...productCart,
        { count, tags, price, idProduct, image },
      ]);
    }
  };

  //funcion para eliminar un solo producto
  const deleteProduct = (idProduct) => {
    const newSetProduct = productCart.filter(
      (product) => product.idProduct !== idProduct
    );
    setProductCart(newSetProduct);
    updateItems(newSetProduct);
  };

  // funcion actualiza total item products
  const updateItems = (productCart) => {
    let newTotalCount = 0,
      newTotalPrice = 0;

    productCart.forEach((item) => {
      newTotalCount = item.count + newTotalCount;
      newTotalPrice = item.price + newTotalPrice;
    });
    setTotalProducts(newTotalCount);
    setTotalPrice(newTotalPrice);
  };

  //funcion para precio total del carrito
  const summaryPrice = (price) => {
    setTotalPrice(price + totalPrice);
  };

  // funcion borrar todo
  const deleteAll = () => {
    setProductCart([]);
    setTotalProducts();
    setTotalPrice();
  };

  //funcion para sumar unidades totales del carrito
  const countProducts = (countProducts) => {
    setTotalProducts(totalProducts + countProducts);
    localStorage.setItem("totalProducts", totalProducts);
  };

  return (
    <CartContext.Provider
      value={{
        productCart,
        setValueCart,
        totalProducts,
        deleteProduct,
        summaryPrice,
        totalPrice,
        deleteAll,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
