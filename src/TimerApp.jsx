import React, { useEffect, useRef, useState } from "react";

function TimerApp({ init }) {
  const [count, setCount] = useState(0);
  const timeRef = useRef(null);
  useEffect(() => {
    return pause();
  }, []);
  const start = () => {
    if (timeRef.current !== null) return;
    timeRef.current = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
  };

  const pause = () => {
    clearInterval(timeRef.current);
    timeRef.current = null;
  };
  const reset = () => {
    pause();
    setCount(0);
  };
  return (
    <div>
      <h1>Timer App</h1>
      <div>
        <h2>Timer: {count}</h2>
        <button onClick={start}>Start</button>
        <button onClick={pause}>Pause</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default TimerApp;
