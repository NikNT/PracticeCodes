import { TaskContext } from "../Context/TaskContext";
import { useContext } from "react";

export const useTasksContext = () => {
  const context = useContext(TaskContext);

  if (!context) {
    throw Error("Context out of Bounds!");
  }

  return context;
};
