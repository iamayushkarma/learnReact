import React from "react";

function ReactCreateElement() {
  // React.createElement(type, {...prop}, ...children)
  // type -> "div", "span", "button" HTML tags inside a string

  // props -> its an object contains
  //  + className, id, style
  //  + event handlers, click events, keep it 'null' if you don't want to give any thing

  // ...children
  //  + Everything after props becomes children.
  //  + Children can be:
  //     + strings/numbers: "Hello", 5
  //     + other React elements
  //     + arrays of elements
  //     + null/false/true (render nothing)

  const nestedElement = React.createElement("div", null, "Its a nested div!");
  const element = React.createElement(
    "div",
    { className: "main" },
    nestedElement,
  );
  return <div>{element}</div>;
}

export default ReactCreateElement;
