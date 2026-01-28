import React from "react";
import UserCard from "./UserCard";
import ButtonComponent from "./ButtonComponent";
import Input from "./Input";
import PropType from "./PropTypes";

function ParentComponent() {
  const handleClick = () => {
    alert("button clicked!");
  };
  return (
    <div className="w-full h-svh flex items-center justify-center">
      {/* <UserCard name="John" age={25} email="john@email.com" /> */}
      {/* <ButtonComponent onClick={handleClick} /> */}
      {/* <Input label="Email" type="email" placeholder="Enter email" required /> */}
      <PropType name="Ronaldo" age="15" />
    </div>
  );
}

export default ParentComponent;
