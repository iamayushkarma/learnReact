import React, { useState } from "react";

function StateWithArrays() {
  const [list, setList] = useState([
    { id: 1, text: "Run", done: false },
    { id: 2, text: "Work", done: false },
    { id: 3, text: "Sleep", done: false },
  ]);

  function addTodo() {
    const newTodo = { id: Date.now(), text: "Dream" };
    setList([...list, newTodo]);
  }
  function deleteItem(id) {
    setList(list.filter((list) => list.id != id));
  }
  function toggleComplete(id) {
    setList(
      list.map((list) => {
        if (list.id == id) {
          return { ...list, done: !list.done };
        }
        return list;
      }),
    );
  }

  return (
    <div>
      <ul className="space-y-5">
        {list.map((list) => {
          return (
            <>
              <li className="gap-3 flex items-center" key={list.id}>
                <span className={`${list.done ? "line-through" : "none"}`}>
                  {list.text}
                </span>
                <button
                  onClick={() => toggleComplete(list.id)}
                  type="checkbox "
                >
                  {list.done ? "Undo" : "Done"}
                </button>
                <button
                  className="cursor-pointer"
                  onClick={() => deleteItem(list.id)}
                >
                  Delete
                </button>
              </li>
            </>
          );
        })}
      </ul>
      <button className="mt-5" onClick={addTodo}>
        Add todo
      </button>
    </div>
  );
}

export default StateWithArrays;
