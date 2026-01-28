import React, { useState } from "react";

function StateWithObject() {
  const [user, setUser] = useState({
    name: "Messi",
    age: 38,
    club: "Inter Miami",
  });

  function changeProperties() {
    setUser({
      ...user,
      name: "Ronaldo",
    });
  }
  return (
    <div>
      <div>{user.name}</div>
      <div>{user.age}</div>
      <div>{user.club}</div>
      <button onClick={changeProperties}>Click me!</button>
    </div>
  );
}

export default StateWithObject;
