import React from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { dataBase } from "../../services/firebaseConfig";

const ItemDetailContainer = () => {
  let { id } = useParams();

  const [productId, setProductId] = useState([]);

  const key = "14166181-a93322c4f13390a817f56b032";

  // useEffect(() => {
  //   const getProductId = async () => {
  //     const response = await fetch(
  //       `https://pixabay.com/api/?key=${key}&id=${id}`
  //     );
  //     const res = await response.json();
  //     setProductId(res.hits);
  //   };

  //   getProductId();
  // }, [id]);

  useEffect(() => {
    const collectionProducts = collection(dataBase, "products");

    getDocs(collectionProducts)
      .then((res) => {
        const products = res.docs.map((product) => {
          let getProduct;

          if (product.id === id) {
            getProduct = id;
          }
          return {
            id: getProduct,
            ...product.data(),
          };
        });

        products.forEach((item) => {
          if (item.id) {
            setProductId([item]);
          }
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div>
      {productId.map((product) => (
        <ItemDetail
          key={product.id}
          image={product.image}
          tags={product.tags}
          price={product.price}
          idProduct={product.id}
        />
      ))}
    </div>
  );
};

export default ItemDetailContainer;
