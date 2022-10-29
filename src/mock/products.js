export const products = [
  {
    id: 1,
    descuento: 5,
    title: "Ron",
    price: 80000,
    stock: 20,
    category: "licores",
    img: "https://ibb.co/8sRzdzJ",
  },
  {
    id: 2,
    descuento: 50,
    title: "Carne de res",
    price: 11000,
    stock: 30,
    category: "carnes",
    img: "https://ibb.co/sw065vY",
  },
  {
    id: 3,
    descuento: 30,
    title: "Pan dulce",
    price: 3000,
    stock: 7,
    category: "panaderia",
    img: "https://ibb.co/qrGfHRY",
  },
];

export const getProducts = (categoryName) => {
  return new Promise((res, rej) => {
    const prodFiltrados = products.filter(
      (prod) => prod.category === categoryName
    );
    const ref = categoryName ? prodFiltrados : products;
    setTimeout(() => {
      res(ref);
    }, 500);
  });
};
