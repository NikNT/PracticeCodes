import React from "react";
import Child from "./Child";

const Parent = () => {
  const greetParent = (name) => {
    alert(`Hello Parent from ${name}`);
  };
  return <Child greetHandler={greetParent} />;
};

export default Parent;
