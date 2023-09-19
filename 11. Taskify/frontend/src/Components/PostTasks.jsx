import React, { useState } from "react";
import { useTasksContext } from "../Hooks/useTasksContext";

const PostTasks = () => {
  const { dispatch } = useTasksContext();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const task = {
    title,
    description,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(`Title : ${title} | Description : ${description}`);

    const response = await fetch("/api/tasks", {
      method: "POST",
      body: JSON.stringify(task),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (!response.ok) {
      console.log("Error Sending Data");
    }

    if (response.ok) {
      setTitle("");
      setDescription("");
      console.log("New Task Added", json);
      dispatch({
        type: "CREATE_TASK",
        payload: json,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add a New Task</h3>
      <label>
        <strong> Title: </strong>
      </label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label>
        <strong> Description: </strong>
      </label>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button>Add Task</button>
    </form>
  );
};

export default PostTasks;
