import React, { useState, useContext } from "react";
import { NoteContext } from "../global/Context";

const PostNote = () => {
  const { dispatch } = useContext(NoteContext);
  const [note, setNote] = useState({
    title: "",
    description: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      title: note.title,
      description: note.description,
    };
    try {
      const response = await fetch("http://localhost:3001/api/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const json = await response.json();

      if (response.ok) {
        setNote({ title: "", description: "" });
        dispatch({
          type: "POST_NOTE",
          payload: json,
        });
      }
    } catch (err) {
      console.error("Error fetching notes: ", err);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3>Add a Note</h3>
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
