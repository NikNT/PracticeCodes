import React, { useContext } from "react";
import { NoteContext } from "../global/Context";
import { ToastContainer, toast } from "react-toastify";

const DeleteNote = ({ noteId, icon }) => {
  const { dispatch } = useContext(NoteContext);
  const notification = () => {
    toast.success("Deleted Successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
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
      notification();
    } catch (err) {
      console.error("Error in Deleting Note: ", err);
    }
  };
  return (
    <img
      src={icon}
      alt="Delete Icon"
      onClick={() => handleDelete(noteId)}
      style={{
        cursor: "pointer",
      }}
    />
  );
};

export default DeleteNote;
