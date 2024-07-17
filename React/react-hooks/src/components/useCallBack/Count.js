import React from "react";
function Count({ text, count }) {
  console.log("Rendering ", text);
  return (
    <h1>
      The {text} is : {count}
    </h1>
  );
}

export default React.memo(Count);
