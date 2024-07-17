import React from "react";
function Button({ text, cb }) {
  console.log("Rendering ", text);
  return <button onClick={cb}>Increase {text}</button>;
}

export default React.memo(Button);
