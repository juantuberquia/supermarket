import React from "react";

const DetailSummary = ({ tags, price, total }) => {
  return (
    <div>
      <div>
        <img alt="img-cart" src="" />
        <p>{tags} </p>
        <p>{total} </p>
        <button> Eliminar </button>
      </div>
    </div>
  );
};

export default DetailSummary;
