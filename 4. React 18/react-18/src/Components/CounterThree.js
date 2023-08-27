import React, { useReducer } from "react";

const CounterThree = () => {
  //   const initialState = {
  //     firstCounter: 0,
  //     secondCounter: 10,
  //   };

  const initialState = 0;

  const reducer = (state, action) => {
    switch (action) {
      case "increment":
        return state + 1;
      case "decrement":
        return state - 1;
      //   case "increment2":
      //     return { ...state, secondCounter: state.secondCounter + action.value };
      //   case "decrement2":
      //     return { ...state, secondCounter: state.secondCounter - action.value };
      case "reset":
        return initialState;
      default:
        return initialState;
    }
  };

  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);

  return (
    <>
      <h1> Count : {count} </h1>
      <h1>SecondCounter: {countTwo}</h1>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatchTwo("increment")}>Increment2</button>
      <button onClick={() => dispatchTwo("decrement")}>Decrement2</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
      <button onClick={() => dispatchTwo("reset")}>Reset</button>
    </>
  );
};

export default CounterThree;
