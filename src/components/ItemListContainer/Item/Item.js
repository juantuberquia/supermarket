import React from "react";

const Item = ({ collectionImage }) => {
  // if (Object.keys(collectionImage).length === 0) return null;

  return (
    <article>
      <img src={collectionImage} alt="supermarket" />
    </article>
  );
};

export default Item;
