import React, { useEffect, useState } from "react";

const GetTasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch("/api/tasks");
        const result = await response.json();
        setTasks(result);
      } catch (err) {
        console.log(err);
      }
    };

    fetchTasks();
  }, []);

  return (
    <>
      <h3>List of Tasks</h3>
      {tasks.map((task) => (
        <p key={task._id}>
          <p> Title : {task.title} </p>
          <p> Description: {task.description} </p>
          <hr />
        </p>
      ))}
    </>
  );
};

export default GetTasks;
