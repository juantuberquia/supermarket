import React from "react";

const Item = ({ image }) => {
  // if (Object.keys(collectionImage).length === 0) return null;

  return (
    <article>
      <img src={image} alt="supermarket" />
    </article>
  );
};

export default Item;
