import React, { useReducer, useState } from "react";
import { usePracticeContext } from "./context/practiceContext";
import ChildComponent from "./ChildComponent";

function ParentContext() {
  const { setValue } = usePracticeContext();
  const [user, setUser] = useState();
  const [password, setPassword] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    setValue(user);
    setUser("");
    setPassword("");
  }
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="mx-auto w-full max-w-sm space-y-3 rounded-lg border border-zinc-800 bg-zinc-950 p-4 text-zinc-100"
      >
        <input
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          placeholder="Username"
          className="w-full rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm outline-none
               placeholder:text-zinc-500 focus:border-zinc-600"
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm outline-none
               placeholder:text-zinc-500 focus:border-zinc-600"
        />

        <button
          type="submit"
          className="w-full rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm
               hover:bg-zinc-800"
        >
          Login
        </button>
      </form>

      <ChildComponent />
    </div>
  );
}

export default ParentContext;
