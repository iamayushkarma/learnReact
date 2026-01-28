import React, { useState } from "react";
import Helper from "./Helper";

function ReactMemo() {
  const [count, setCount] = useState(0);
  function increment() {
    console.log("Log form increment");

    setCount((v) => v + 1);
  }
  return (
    <div>
      <div>{count}</div>
      <button className="mt-4" onClick={increment}>
        Click me
      </button>
      <Helper number={50000} />
    </div>
  );
}

export default ReactMemo;
