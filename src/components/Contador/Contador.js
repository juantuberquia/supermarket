import React from "react";
import "./Contador.css";

const Contador = ({ setCount, count }) => {
  const rest = () => {
    if (rest) {
      setCount(count - 1);
    }
  };

  const sum = () => {
    setCount(count + 1);
  };

  return (
    <div className="container-count">
      <button onClick={rest} disabled={count === 0}>
        -
      </button>
      <p>{count}</p>
      <button onClick={sum}> + </button>
    </div>
  );
};

export default Contador;
