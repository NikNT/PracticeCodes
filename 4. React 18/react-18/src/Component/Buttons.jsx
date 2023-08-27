import React, { useContext } from "react";
import { CountState } from "../App";

const Buttons = () => {
  const { countDispatch } = useContext(CountState);
  return (
    <>
      <button onClick={() => countDispatch("increment")}>Increment</button>
      <button onClick={() => countDispatch("decrement")}>Decrement</button>
      <button onClick={() => countDispatch("reset")}>Reset</button>
      <br />
      <br />
    </>
  );
};

export default Buttons;
