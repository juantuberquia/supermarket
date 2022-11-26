import React from "react";

const SuccesOrder = ({ idOrder }) => {
  return (
    <div>
      <h1 className="alert alert-primary">Tu ha Compra ha sido exitosa !!</h1>
      <p> Numero de compra es: {idOrder} </p>
    </div>
  );
};

export default SuccesOrder;
