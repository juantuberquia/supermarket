import React from "react";
import { useState, useEffect } from "react";
import Item from "../Item/Item";
// import { v4 as uuidv4 } from "uuid";

const ItemList = () => {
  const [collectionImage, setcollectionImage] = useState([]);

  useEffect(() => {
    const getDataImage = async () => {
      /* obtener imagenes de la api pixabay */
      let search = "supermarket";
      const key = "14166181-a93322c4f13390a817f56b032";
      const imgsForPage = 8;

      const response = await fetch(
        `https://pixabay.com/api/?key=${key}&q=${search}&per_page=${imgsForPage}`
      );
      const res = await response.json();
      setcollectionImage(res.hits);
    };

    getDataImage();

    return () => {};
  }, []);

  // setTimeout(() => {
  // }, 2000);

  console.log(collectionImage);

  return (
    <div className="card-deck">
      {collectionImage.map((item) => (
        <Item
          key={item.id}
          image={item.largeImageURL}
          tags={item.tags}
          price={item.imageHeight}
        />
      ))}
    </div>
  );
};

export default ItemList;
