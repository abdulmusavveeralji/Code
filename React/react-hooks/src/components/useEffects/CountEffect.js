import React, { useEffect, useState } from "react";

function CountEffect() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  useEffect(() => {
    console.log("Button clicked");
    document.title = `Button clicked ${count} times`;
  }, [count]);
  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setCount(count + 1)}>Click : {count}</button>
    </div>
  );
}

export default CountEffect;
