import { createContext, useReducer } from "react";
import "./App.css";
import ComponentA from "./Component/ComponentA";
import ComponentD from "./Component/ComponentD";
import ComponentF from "./Component/ComponentF";

export const CountState = createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return initialState;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <CountState.Provider
      value={{
        countState: count,
        countDispatch: dispatch,
      }}
    >
      <div className="App">
        <h1> Count : {count} </h1>
        <ComponentA />
        <ComponentD />
        <ComponentF />
      </div>
    </CountState.Provider>
  );
}

export default App;
