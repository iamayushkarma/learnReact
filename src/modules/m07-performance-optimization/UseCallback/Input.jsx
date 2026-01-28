import { memo } from "react";

function SearchInput({ onChange }) {
  console.log("Input rendered");

  return (
    <div>
      <input
        className="w-90 h-10 p-2 rounded-lg border border-gray-50"
        name="input"
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default memo(SearchInput);
