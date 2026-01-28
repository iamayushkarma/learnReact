import React from "react";

function ButtonComponent({ onClick }) {
  return (
    <div>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default ButtonComponent;
