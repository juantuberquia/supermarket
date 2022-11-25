import React from "react";
import { useState, useEffect } from "react";
import Item from "../Item/Item";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { dataBase } from "../../../services/firebaseConfig";

const ItemList = () => {
  const [collectionImage, setcollectionImage] = useState([]);

  let { id } = useParams();
  console.log(id);

  const key = "14166181-a93322c4f13390a817f56b032";
  const imgsForPage = 8;

  // carga todos los productos, cuando esta en el home
  // useEffect(() => {
  //   if (id === undefined) {
  //     id = "supermercado";

  //     const getAllCatalog = async () => {
  //       const response = await fetch(
  //         `https://pixabay.com/api/?key=${key}&q=${id}&per_page=${imgsForPage}`
  //       );
  //       const res = await response.json();
  //       setcollectionImage(res.hits);
  //     };
  //     getAllCatalog();
  //   }
  // }, [id]);

  // falta la carga de catrgorias, ver detalle (id) producto

  useEffect(() => {
    const collectionProducts = collection(dataBase, "products");

    getDocs(collectionProducts)
      .then((res) => {
        const products = res.docs.map((product) => {
          // console.log(product.data());
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

  // trae los productos segun la categoria
  // useEffect(() => {
  //   const getDataImage = async () => {
  //     /* obtener imagenes de la api pixabay */

  //     const response = await fetch(
  //       `https://pixabay.com/api/?key=${key}&q=${id}&per_page=${imgsForPage}`
  //     );
  //     const res = await response.json();
  //     setcollectionImage(res.hits);
  //   };

  //   getDataImage();

  //   return () => {};
  // }, [id]);

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

  return (
    <div className="card-deck">
      {collectionImage.map((item) => (
        <Item
          key={item.id}
          image={item.image}
          tags={item.tags}
          price={item.price}
          id={item.id}
        />
      ))}
    </div>
  );
};

export default ItemList;
