import React, { useRef, useState } from "react";

function UseRef() {
  const [time, setTime] = useState(0);
  const timerRef = useRef(null);

  console.log("Ref log", timerRef.current);

  function start() {
    if (timerRef.current !== null) return;

    timerRef.current = setInterval(() => {
      setTime((t) => t + 10);
    }, 10);
  }
  function stop() {
    if (timerRef.current === null) return;
    clearInterval(timerRef.current);
    timerRef.current = null;
  }
  function reset() {
    stop();
    setTime(0);
  }

  const seconds = Math.floor(time / 1000);
  const milliseconds = time % 1000; // 0..999
  return (
    <div>
      <div>
        <span className="text-3xl">
          {seconds}.{String(milliseconds).padStart(3, "0")}
        </span>
        <div className="flex gap-3 mt-5">
          <button onClick={start}>start</button>
          <button onClick={reset}>reset</button>
          <button onClick={stop}>stop</button>
        </div>
      </div>
    </div>
  );
}

export default UseRef;
