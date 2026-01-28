import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((prev) => prev + 1);
  }
  function decrement() {
    setCount((prev) => prev - 1);
  }
  return (
    <div className="flex flex-row items-center gap-5 justify-center">
      <button onClick={decrement}>-</button>
      <span className="w-5">{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default Counter;
