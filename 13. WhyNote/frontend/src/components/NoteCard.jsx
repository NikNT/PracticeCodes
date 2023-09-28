import React, { useState } from "react";
import DeleteNote from "./DeleteNote";
import styles from "./styles/NoteCard.module.css";
import PostNote from "./PostNote";
import deleteIcon from "../assets/delete.svg";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const ExpandedNote = ({ note, onClose }) => {
  return (
    <div className={styles.container}>
      <div className={styles.openedNote}>
        <h3 className={styles.title}>{note.title}</h3>
        <p className={styles.description}>{note.description}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

const NoteCard = ({ notes }) => {
  const [selectedNote, setSelectedNote] = useState(null);

  const handleReadMoreClick = (note) => {
    setSelectedNote(note);
  };

  const handleCloseClick = () => {
    setSelectedNote(null);
  };

  return (
    <>
      <PostNote />
      {selectedNote && (
        <ExpandedNote note={selectedNote} onClose={handleCloseClick} />
      )}
      <div className={styles.notes}>
        {notes &&
          notes.map((note) => (
            <div className={styles.card} key={note._id}>
              <h3 className={styles.title}>{note.title}</h3>
              <p className={styles.description}>
                {note.description.length > 150
                  ? `${note.description.slice(0, 250)} ...`
                  : note.description}
              </p>
              {note.description.length > 300 && (
                <button
                  className={styles.readMore}
                  onClick={() => handleReadMoreClick(note)}
                >
                  Read More
                </button>
              )}
              <hr />
              <div className={styles.dateAndDelete}>
                <span>
                  {formatDistanceToNow(new Date(note.createdAt), {
                    addSuffix: true,
                  })}
                </span>
                <DeleteNote noteId={note._id} icon={deleteIcon} />
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default NoteCard;
