import React, { useReducer, useState } from "react";

function UseReducer() {
  function reducer(todos, action) {
    switch (action.type) {
      case "add-todo": {
        return [...todos, addTodo(action.payload.name)];
      }
      case "toggle-completion": {
        return todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return { ...todo, complete: !todo.complete };
          }
          return todo;
        });
      }
      case "delete-todo": {
        return todos.filter((todo) => {
          return todo.id !== action.payload.id;
        });
      }
      default:
        return todos;
    }
  }

  const [input, setInput] = useState("");
  const [todos, dispatch] = useReducer(reducer, []);

  function addTodo(name) {
    return { id: Date.now(), name: name, complete: false };
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!input.trim()) {
      return;
    }
    dispatch({ type: "add-todo", payload: { name: input } });
    setInput("");
  }

  return (
    <div className="w-80 rounded-xl h-102 border border-gray-700 p-3 box-border">
      <div className="flex flex-col items-center justify-center w-full">
        <form className="flex gap-2" onSubmit={handleSubmit}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="p-2 text-white border rounded-lg border-gray-700 rounded-r-0!"
          />
          <button className="text-white bg-blue-500!">+</button>
        </form>
        <div className="text-white mt-5 w-11/12 gap-1 flex flex-col">
          {todos.map((todo) => {
            return <AddTodo key={todo.id} todo={todo} dispatch={dispatch} />;
          })}
        </div>
      </div>
    </div>
  );
}

function AddTodo({ todo, dispatch }) {
  return (
    <div className="px-3 py-2 border-b flex items-center justify-between border-b-gray-400">
      <div className="flex items-center justify-center gap-2">
        <input
          checked={todo.complete}
          onClick={() =>
            dispatch({ type: "toggle-completion", payload: { id: todo.id } })
          }
          type="checkbox"
        />
        <div
          className={`${todo.complete ? "line-through text-gray-500" : ""} text-xl`}
        >
          {todo.name}
        </div>
      </div>
      <button
        onClick={() =>
          dispatch({ type: "delete-todo", payload: { id: todo.id } })
        }
        className="bg-red-500!"
      >
        Delete
      </button>
    </div>
  );
}

export default UseReducer;
