import React from "react";

function UserCard({ name = "John", age = "25", email = "john@email.com" }) {
  return (
    <div className="w-70 h-96 bg-gray-800 rounded-2xl flex flex-col p-1">
      <div className="w-11/12 h-1/2 bg-gray-700 rounded-2xl mt-3 mx-auto"></div>
      <div>{name}</div>
      <div>{age}</div>
      <div>{email}</div>
    </div>
  );
}

export default UserCard;
