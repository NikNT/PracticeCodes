import React, { useState } from "react";

const PostNote = () => {
  const [note, setNote] = useState({
    title: "",
    description: "",
  });

  const handleSubmit = async (e) => {
    const data = {
      title: note.title,
      description: note.description,
    };
    e.preventDefault();
    const response = await fetch("http://localhost:3001/api/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    console.log(response.data);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          name="title"
          value={note.title}
          onChange={(e) => setNote({ ...note, title: e.target.value })}
        />

        <label htmlFor="description">Description: </label>
        <input
          type="text"
          name="description"
          value={note.description}
          onChange={(e) => setNote({ ...note, description: e.target.value })}
        />

        <button type="submit">Post</button>
      </form>
    </>
  );
};

export default PostNote;
