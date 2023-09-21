import React, { useEffect, useState } from "react";
import { useTasksContext } from "../Hooks/useTasksContext";
import "./GetTasks.css";

const GetTasks = () => {
  const { tasks, dispatch } = useTasksContext();
  const [showModal, setShowModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [updatedTaskData, setUpdatedTaskData] = useState({
    title: "",
    description: "",
  });
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 5;

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch("/api/tasks");
      const result = await response.json();
      console.log("Length of JSON", result.length);
      setTotalPages(Math.ceil(result.length / itemsPerPage));
      console.log("Total Pages", totalPages);

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
    if ((updatedTaskData.title || updatedTaskData.description) === "") {
      return alert("Fill in the required fields");
    }

    try {
      const updatedData = {};

      if (updatedTaskData.title !== "") {
        updatedData.title = updatedTaskData.title;
      }

      if (updatedTaskData.description !== "") {
        updatedData.description = updatedTaskData.description;
      }
      const response = await fetch("/api/tasks/" + taskId, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
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
      <h1 className="tasks-heading">Task List</h1>
      <div className="task-list">
        {tasks.map((task) => (
          <div key={task._id} className="task-card">
            <p>
              <strong> Title: </strong> {task.title}
            </p>
            {task.description && (
              <p>
                <strong> Description: </strong> {task.description}
              </p>
            )}
            <div className="button-container">
              <button onClick={() => handleEdit(task._id)}>Edit ✍🏽</button>
              <button onClick={() => handleDelete(task._id)}>Delete ❌</button>
            </div>
            <br />
            {showModal && selectedTask === task._id && (
              <div className="modal">
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
                <label htmlFor="updateddescription">
                  {task.description ? "Update" : "Add"} Description:
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
                <div className="button-container">
                  <button onClick={() => updateContent(task._id)}>
                    Update{" "}
                  </button>
                  <button onClick={() => hideModal(task._id)}>Cancel ❌</button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default GetTasks;
