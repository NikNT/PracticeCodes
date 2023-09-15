import React, { useEffect } from "react";
import { useTasksContext } from "../Hooks/useTasksContext";

const GetTasks = () => {
  // const [tasks, setTasks] = useState([]);
  const { tasks, dispatch } = useTasksContext();

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch("/api/tasks");
      const result = await response.json();

      if (response.ok) {
        dispatch({
          type: "SET_TASKS",
          payload: result,
        });
        console.log(result);
      }
    };

    fetchTasks();
  }, [dispatch]);

  return (
    <>
      <h3>List of Tasks</h3>
      {tasks.map((task) => (
        <p key={task._id}>
          <p>
            <strong> Title </strong> : {task.title}
          </p>
          {task.description && <p> Description: {task.description} </p>}
          <hr />
        </p>
      ))}
    </>
  );
};

export default GetTasks;
