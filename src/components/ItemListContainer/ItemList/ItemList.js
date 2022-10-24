import React from "react";
import { useState, useEffect } from "react";
import Item from "../Item/Item";
import { v4 as uuidv4 } from "uuid";

const ItemList = () => {
  const [collectionImage, setcollectionImage] = useState([]);

  useEffect(() => {
    const showImagesBarber = async () => {
      /* obtener imagenes de la api pixabay */
      let search = "supermarket";
      const key = "14166181-a93322c4f13390a817f56b032";
      const imgsForPage = 5;

      const response = await fetch(
        `https://pixabay.com/api/?key=${key}&q=${search}&per_page=${imgsForPage}`
      );
      const res = await response.json();
      let valor = res.hits;
      setcollectionImage(...valor);

      console.log(collectionImage);
      console.log(res.hits);
    };

    showImagesBarber();

    return () => {};
  }, []);

  // setTimeout(() => {
  //

  // }, 2000);

  return (
    <div>
      {collectionImage.map((item) => (
        <Item key={uuidv4()} image={item.previewURL} />
      ))}
    </div>
  );
};

export default ItemList;
