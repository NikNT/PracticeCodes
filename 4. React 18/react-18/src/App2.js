// import { createContext } from "react";
import "./App.css";
// import ComponentC from "./Components/ComponentC";
// import Counter1 from "./Components/Counter1";
// import CounterTwo from "./Components/CounterTwo";
import CounterThree from "./Components/CounterThree";

// export const UserContext = createContext();
// export const ChannelContext = createContext();

function App() {
  return (
    // <div className="App">
    //   <UserContext.Provider value={"Nikhil Tanwar"}>
    //     <ChannelContext.Provider value={"FrontendMechanix"}>
    //       <ComponentC />
    //     </ChannelContext.Provider>
    //   </UserContext.Provider>
    // </div>

    <div className="App">
      {/* <Counter1 /> */}
      {/* <CounterTwo /> */}
      <CounterThree />
    </div>
  );
}

export default App;
