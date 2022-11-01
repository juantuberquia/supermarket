import React from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const ItemDetailContainer = () => {
  let { id } = useParams();
  const [productId, setProductId] = useState([]);

  const key = "14166181-a93322c4f13390a817f56b032";

  useEffect(() => {
    const getProductId = async () => {
      const response = await fetch(
        `https://pixabay.com/api/?key=${key}&id=${id}`
      );
      const res = await response.json();
      setProductId(res.hits);
    };

    getProductId();
  }, [id]);

  return (
    <div>
      {productId.map((product) => (
        <ItemDetail
          key={product.id}
          image={product.largeImageURL}
          tags={product.tags}
          price={product.imageHeight}
        />
      ))}
    </div>
  );
};

export default ItemDetailContainer;
