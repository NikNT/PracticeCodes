import React, { useContext } from "react";
import { NoteContext } from "../global/Context";

const DeleteNote = ({ noteId }) => {
  const { dispatch } = useContext(NoteContext);
  const handleDelete = async (noteId) => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/notes/${noteId}`,
        {
          method: "DELETE",
        }
      );

      const json = await response.json();

      if (response.ok) {
        dispatch({
          type: "DELETE_NOTE",
          payload: json,
        });
      }
      console.log("Deleted: ", json);
    } catch (err) {
      console.error("Error in Deleting Note: ", err);
    }
  };
  return <button onClick={() => handleDelete(noteId)}>❌</button>;
};

export default DeleteNote;
