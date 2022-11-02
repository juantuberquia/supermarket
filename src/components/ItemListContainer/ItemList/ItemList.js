import React from "react";
import { useState, useEffect } from "react";
import Item from "../Item/Item";
import { useParams } from "react-router-dom";

const ItemList = () => {
  const [collectionImage, setcollectionImage] = useState([]);

  let { id } = useParams();

  const key = "14166181-a93322c4f13390a817f56b032";
  const imgsForPage = 8;

  // carga todos los productos, cuando esta en el home
  useEffect(() => {
    if (id === undefined) {
      id = "supermercado";

      const getAllCatalog = async () => {
        const response = await fetch(
          `https://pixabay.com/api/?key=${key}&q=${id}&per_page=${imgsForPage}`
        );
        const res = await response.json();
        setcollectionImage(res.hits);
      };
      getAllCatalog();
    }
  }, [id]);

  // trae los productos segun la categoria
  useEffect(() => {
    const getDataImage = async () => {
      /* obtener imagenes de la api pixabay */

      const response = await fetch(
        `https://pixabay.com/api/?key=${key}&q=${id}&per_page=${imgsForPage}`
      );
      const res = await response.json();
      setcollectionImage(res.hits);
    };

    getDataImage();

    return () => {};
  }, [id]);

  return (
    <div className="card-deck">
      {collectionImage.map((item) => (
        <Item
          key={item.id}
          image={item.largeImageURL}
          tags={item.tags}
          price={item.imageHeight}
          id={item.id}
        />
      ))}
    </div>
  );
};

export default ItemList;
