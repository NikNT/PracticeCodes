import React, { useState, useContext } from "react";
import { NoteContext } from "../global/Context";
import styles from "./styles/PostNote.module.css";
import add from "../assets/add.svg";
import close from "../assets/close.svg";

const PostNote = () => {
  const { dispatch } = useContext(NoteContext);
  const [note, setNote] = useState({
    title: "",
    description: "",
  });
  const [modal, setModal] = useState(false);

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
      }
    } catch (err) {
      console.error("Error fetching notes: ", err);
    }
  };

  return (
    <>
      {modal ? (
        <div className={styles.form} onClick={() => setModal(!modal)}>
          <img src={add} alt="Add Icon" />
          <p>Add Note</p>
        </div>
      ) : (
        <div className={styles.noteModalContainer}>
          <form onSubmit={handleSubmit} className={styles.noteModal}>
            <div>
              <input
                type="text"
                name="title"
                value={note.title}
                onChange={(e) => setNote({ ...note, title: e.target.value })}
                placeholder="Title"
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
                placeholder="Description"
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
      )}
    </>
  );
};

export default PostNote;
