import React from "react";
function Title() {
  console.log("Rendering Title");
  return <h1>Callback Hook Example</h1>;
}

export default React.memo(Title);
