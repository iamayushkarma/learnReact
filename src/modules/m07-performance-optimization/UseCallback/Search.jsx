import React, { useCallback, useState } from "react";
import SearchInput from "./Input";

function Search() {
  const user = ["Romen", "John", "Nick", "Pedri", "Rodri"];
  const [users, setUsers] = useState(user);

  const search = useCallback(
    (text) => {
      const result = user.filter((u) =>
        u.toLowerCase().includes(text.toLowerCase()),
      );
      setUsers(result);
    },
    [users],
  );
  const shuffleUsers = () => {
    const shuffled = [...users].sort(() => Math.random() - 0.5);
    setUsers(shuffled);
  };

  return (
    <div className="w-40">
      <div className="flex gap-3">
        <button onClick={shuffleUsers}>Shuffle</button>
        <SearchInput onChange={search} />
      </div>
      <div className="flex flex-col items-start mt-2">
        {users.map((item) => {
          return (
            <div key={item} className="mt-1">
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Search;
