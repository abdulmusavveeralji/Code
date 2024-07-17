import React, { useReducer } from "react";

const initialValue = 0;
const reduce = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialValue;
    default:
      return state;
  }
};
function CountReducer() {
  const [count, dispatch] = useReducer(reduce, initialValue);
  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>decrement</button>
      <button onClick={() => dispatch("reset")}>reset</button>
    </div>
  );
}

export default CountReducer;
