import React, { useReducer } from "react";

const CounterTwo = () => {
  const initialState = {
    firstCounter: 0,
    secondCounter: 10,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return {
          ...state,
          firstCounter: state.firstCounter + action.value,
        };
      case "decrement":
        return {
          ...state,
          firstCounter: state.firstCounter - action.value,
        };
      case "increment2":
        return {
          ...state,
          secondCounter: state.secondCounter + action.value,
        };
      case "decrement2":
        return {
          ...state,
          secondCounter: state.secondCounter - action.value,
        };
      case "reset":
        return initialState;
      default:
        return initialState;
    }
  };
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1>FirstCount: {count.firstCounter}</h1>
      <h1>SecondCount: {count.secondCounter}</h1>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        Increment 5
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
        Decrement 5
      </button>
      <button onClick={() => dispatch({ type: "increment2", value: 2 })}>
        Increment C2
      </button>
      <button onClick={() => dispatch({ type: "decrement2", value: 2 })}>
        Decrement C2
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  );
};

export default CounterTwo;
