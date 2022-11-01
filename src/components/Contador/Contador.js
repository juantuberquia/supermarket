import React from "react";
import { useState } from "react";

const Contador = () => {
  const [count, setCount] = useState(1);

  const rest = () => {
    if (rest) {
      console.log("entra res else");
      setCount(count - 1);
    }
  };

  const sum = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={rest} disabled={count === 0}>
        -
      </button>
      <p>{count}</p>
      <button onClick={sum}> + </button>
    </div>
  );
};

export default Contador;
