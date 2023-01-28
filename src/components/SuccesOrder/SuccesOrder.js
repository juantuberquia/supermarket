import React from "react";

const SuccesOrder = ({ idOrder }) => {
  return (
    <div>
      <h1 className="alert alert-primary text-center">
        Tu ha Compra ha sido exitosa !!
      </h1>
      <p className="h4 title-greeting text-center">
        {" "}
        Numero de compra es: {idOrder}{" "}
      </p>
    </div>
  );
};

export default SuccesOrder;
