import React, { useEffect, useState } from "react";
import { useTasksContext } from "../Hooks/useTasksContext";

const GetTasks = () => {
  const { tasks, dispatch } = useTasksContext();
  const [showModal, setShowModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [updatedTaskData, setUpdatedTaskData] = useState({
    title: "",
    description: "",
  });

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

  const handleEdit = async (taskId) => {
    console.log("Task ID to Edit: ", taskId);
    setSelectedTask(taskId);
    setShowModal(true);
  };

  const hideModal = () => {
    setSelectedTask(null);
    setShowModal(false);
  };

  const updateContent = async (taskId) => {
    try {
      const response = await fetch("/api/tasks/" + taskId, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedTaskData),
      });
      const json = await response.json();
      if (response.ok) {
        dispatch({
          type: "UPDATE_TASK",
          payload: json,
        });
        setUpdatedTaskData({
          title: "",
          description: "",
        });
        setShowModal(false);
      }
    } catch (err) {
      console.log("Error in updating: ", err);
    }
  };

  return (
    <>
      <h3>List of Tasks</h3>
      {tasks.map((task) => (
        <p key={task._id}>
          <p>
            <strong> Title </strong> : {task.title}
          </p>
          {task.description && (
            <p>
              {" "}
              <strong> Description: </strong>
              {task.description}{" "}
            </p>
          )}
          <button onClick={() => handleEdit(task._id)}>Edit ✅</button>
          <button onClick={() => handleDelete(task._id)}>Delete 🗑️</button>
          <br />
          {showModal && selectedTask === task._id && (
            <div>
              <label htmlFor="updatedtitle">Update Task: </label>
              <input
                type="text"
                name="updatedtitle"
                onChange={(e) =>
                  setUpdatedTaskData({
                    ...updatedTaskData,
                    title: e.target.value,
                  })
                }
                value={updatedTaskData.title}
              />

              {task.description && (
                <>
                  <label htmlFor="updateddescription">
                    Update Description:{" "}
                  </label>
                  <input
                    type="text"
                    name="updateddescription"
                    onChange={(e) =>
                      setUpdatedTaskData({
                        ...updatedTaskData,
                        description: e.target.value,
                      })
                    }
                    value={updatedTaskData.description}
                  />
                </>
              )}

              <button onClick={() => updateContent(task._id)}>Update </button>
              <button onClick={() => hideModal(task._id)}>Cancel ❌</button>
            </div>
          )}
          <hr />
        </p>
      ))}
    </>
  );
};

export default GetTasks;
