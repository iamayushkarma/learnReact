import React, { useMemo, useState } from "react";

function UseMemo() {
  const [incrementOne, setIncrementOne] = useState(0);
  const [incrementTwo, setIncrementTwo] = useState(0);

  const isEven = useMemo(() => {
    let i = 0;
    while (i <= 900000000) {
      i++;
    }
    return incrementOne % 2 == 0;
  }, [incrementOne]);
  return (
    <div className="flex gap-5 items-center justify-center select-none">
      <button onClick={() => setIncrementOne((val) => val + 1)}>
        increment one: {incrementOne}
      </button>
      <span>{isEven ? "Even" : "Odd"}</span>
      <button className="" onClick={() => setIncrementTwo((val) => val + 1)}>
        increment two: {incrementTwo}
      </button>
    </div>
  );
}

export default UseMemo;
