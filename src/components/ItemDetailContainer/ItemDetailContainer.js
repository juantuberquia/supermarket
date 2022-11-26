import React from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { dataBase } from "../../services/firebaseConfig";
import NotFound from "../notFound/NotFound";

const ItemDetailContainer = () => {
  let { id } = useParams();

  const [productId, setProductId] = useState([]);
  const [checkUrl, setCheckUrl] = useState(false);

  // carga producto id especifico
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
        filterCollectionId(products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const filterCollectionId = (products) => {
    let collectionProduct = products.filter((item) => item.id !== undefined);

    if (!collectionProduct.length) {
      setCheckUrl(true);
    } else {
      setCheckUrl(false);
      setProductId(collectionProduct);
    }
  };

  return (
    <div>
      {checkUrl ? (
        <NotFound name="producto" />
      ) : (
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
      )}
    </div>
  );
};

export default ItemDetailContainer;
