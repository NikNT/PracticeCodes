import React from "react";
import DeleteNote from "./DeleteNote";
import styles from "./styles/NoteCard.module.css"; // Import the CSS module
import PostNote from "./PostNote";
import deleteIcon from "../assets/delete.svg";

const NoteCard = ({ notes }) => {
  return (
    <>
      <PostNote />
      <div className={styles.notes}>
        {notes &&
          notes.map((note) => (
            <div className={styles.card} key={note._id}>
              <h3 className={styles.title}>{note.title}</h3>
              <p className={styles.description}>{note.description}</p>
              <DeleteNote noteId={note._id} icon={deleteIcon} />
            </div>
          ))}
      </div>
    </>
  );
};

export default NoteCard;
