import React, { useState, useTransition } from "react";

function UseTransition() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [isPendind, startTransation] = useTransition();

  const handleChange = (e) => {
    setInput(e.target.value);
    startTransation(() => {
      const l = [];
      for (let i = 0; i < 20000; i++) {
        l.push(e.target.value);
      }
      setList(l);
    });
  };
  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        name="input"
        className="w-full px-3 py-2 bg-[#0d1117] border border-[#30363d] rounded-md text-white text-sm text-left focus:outline-none focus:border-blue-500"
        id="search"
      />
      {isPendind
        ? "loading..."
        : list.map((item, index) => {
            return (
              <li className="list-none" key={index}>
                {item}
              </li>
            );
          })}
    </div>
  );
}

export default UseTransition;
