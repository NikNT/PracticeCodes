import React, { useState, useContext } from "react";
import { NoteContext } from "../global/Context";
import styles from "./styles/PostNote.module.css";
import add from "../assets/add.svg";
// import close from "../assets/close.svg";
import { toast } from "react-toastify";

const PostNote = () => {
  const { dispatch } = useContext(NoteContext);
  const [note, setNote] = useState({
    title: "",
    description: "",
  });
  const [modal, setModal] = useState(false);
  const notification = () => {
    toast.success("Note Added!", {
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
        setModal(!modal);
        notification();
      }
    } catch (err) {
      console.error("Error fetching notes: ", err);
    }
  };

  return (
    <>
      {modal ? (
        <div className={styles.noteModalContainer}>
          <form onSubmit={handleSubmit} className={styles.noteModal}>
            <div>
              <input
                type="text"
                name="title"
                value={note.title}
                onChange={(e) => setNote({ ...note, title: e.target.value })}
                placeholder="Title | Required"
                className={styles.input}
              />
            </div>
            <div>
              <input
                type="text"
                name="description"
                value={note.description}
                onChange={(e) =>
                  setNote({ ...note, description: e.target.value })
                }
                placeholder="Description | Optional"
                className={styles.description}
              />
            </div>
            <div className={styles.button}>
              <button
                type="submit"
                className={styles.postButton}
                disabled={note.title === "" && true}
              >
                Post
              </button>
              <button
                type="button"
                onClick={() => setModal(!modal)}
                className={styles.cancelButton}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div
          className={`${styles.form} ${styles.addNote}`}
          onClick={() => setModal(!modal)}
        >
          <img src={add} alt="Add Icon" />
          <p>Add Note</p>
        </div>
      )}
    </>
  );
};

export default PostNote;
