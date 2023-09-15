import { createContext, useReducer } from "react";
import { taskReducer } from "./TaskReducer";

export const TaskContext = createContext();

export const TaskContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, { tasks: [] });

  return (
    <TaskContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};
