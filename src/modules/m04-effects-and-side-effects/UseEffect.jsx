import React, { useEffect, useState } from "react";

function UseEffect() {
  const [tabs, setTabs] = useState("posts");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${tabs}`)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, [tabs]);
  return (
    <div className="select-none">
      <div className="flex gap-2 items-center justify-center">
        <button onClick={() => setTabs("posts")}>Posts</button>
        <button onClick={() => setTabs("users")}>User</button>
        <button onClick={() => setTabs("comments")}>Comments</button>
      </div>

      <div className="mt-5">{tabs}</div>

      <div>
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="p-3 border border-gray-700 rounded mb-2"
            >
              <h3>{item.title || item.name || item.email}</h3>
              <p>{item.body || item.email || item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UseEffect;
