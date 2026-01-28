import React, { useId } from "react";

function Input({ label, ...rest }) {
  const uid = useId();
  const inputId = `input-${uid}`;
  return (
    <div className="flex flex-col">
      <label htmlFor={inputId}>{label}</label>
      <input
        className="w-90 h-10 p-2 rounded-lg border border-gray-50"
        id={inputId}
        {...rest}
      />
    </div>
  );
}

export default Input;
