import React from "react";

const Child = (props) => {
  return (
    <div>
      <button onClick={() => props.greetHandler("Child")}>Greet Parent</button>
    </div>
  );
};

export default Child;
