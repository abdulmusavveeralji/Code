import React, { useState } from "react";

function HookCounterTwo() {
  const initalState = 0;
  const [count, setCount] = useState(initalState);

  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevState) => prevState + 1);
    }
  };
  return (
    <div>
      <p>count : {count}</p>
      <button onClick={() => setCount(initalState)}>Reset</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={incrementFive}>Increment by 5</button>
    </div>
  );
}

export default HookCounterTwo;
