import React from "react";
import { useState, useEffect } from "react";
import Item from "../Item/Item";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { dataBase } from "../../../services/firebaseConfig";
import NotFound from "../../notFound/NotFound";

const ItemList = () => {
  const [collectionImage, setcollectionImage] = useState([]);
  const [path, setPath] = useState(false);

  let { id } = useParams();

  // carga productos del home
  useEffect(() => {
    const collectionProducts = collection(dataBase, "products");

    getDocs(collectionProducts)
      .then((res) => {
        const products = res.docs.map((product) => {
          return {
            id: product.id,
            ...product.data(),
          };
        });
        setcollectionImage(products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  // carga categoria
  useEffect(() => {
    const collectionProducts = collection(dataBase, "products");
    getDocs(collectionProducts)
      .then((res) => {
        const products = res.docs.map((product) => {
          return {
            id: product.id,
            ...product.data(),
          };
        });
        checkPath();
        products.forEach((item) => {
          if (item.category === id) {
            setcollectionImage([item]);
          }
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  let paths = {
    verduras: "verduras",
    licores: "licores",
    carnes: "carnes",
  };

  const checkPath = () => {
    let { verduras, licores, carnes } = paths;
    if (
      id === verduras ||
      id === licores ||
      id === carnes ||
      id === undefined
    ) {
      setPath(false);
    } else {
      setPath(true);
    }
  };

  return (
    <div className="card-deck">
      {path ? (
        <NotFound name="categoria" />
      ) : (
        <>
          {collectionImage.map((item) => (
            <Item
              key={item.id}
              image={item.image}
              tags={item.tags}
              price={item.price}
              id={item.id}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default ItemList;
