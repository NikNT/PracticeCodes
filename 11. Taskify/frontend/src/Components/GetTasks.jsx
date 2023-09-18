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

  const handleDelete = async (taskId) => {
    const response = await fetch("/api/tasks/" + taskId, {
      method: "DELETE",
    });

    const json = await response.json();

    if (response.ok) {
      dispatch({
        type: "DELETE_TASK",
        payload: json,
      });
    }

    console.log("Deleted Task", json);
  };

  const handleUpdate = async (taskId) => {
    console.log(taskId);
  };

  return (
    <>
      <h3>List of Tasks</h3>
      {tasks.map((task) => (
        <p key={task._id}>
          <p>
            <strong> Title </strong> : {task.title}
          </p>
          {task.description && <p> Description: {task.description} </p>}
          <button onClick={() => handleUpdate(task._id)}>Update ✅</button>
          <button onClick={() => handleDelete(task._id)}>Delete 🗑️</button>
          <hr />
        </p>
      ))}
    </>
  );
};

export default GetTasks;
