import React, { useState } from "react";
import DeleteNote from "./DeleteNote";
import styles from "./styles/NoteCard.module.css";
import PostNote from "./PostNote";
import deleteIcon from "../assets/delete.svg";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const ExpandedNote = ({ note, onClose }) => {
  return (
    <div className={styles.openedNote}>
      <h3 className={styles.title}>{note.title}</h3>
      <p className={styles.description}>{note.description}</p>
      <button onClick={onClose} className={styles.readMore}>
        Close
      </button>
    </div>
  );
};

const NoteCard = ({ notes }) => {
  const [selectedNote, setSelectedNote] = useState(null);
  const [isExpandedNoteOpen, setIsExpandedNoteOpen] = useState(false);

  const handleReadMoreClick = (note) => {
    setSelectedNote(note);
    setIsExpandedNoteOpen(true);
  };

  const handleCloseClick = () => {
    setSelectedNote(null);
    setIsExpandedNoteOpen(false);
  };

  return (
    <>
      <PostNote />
      <div className={styles.notes}>
        {selectedNote && (
          <ExpandedNote note={selectedNote} onClose={handleCloseClick} />
        )}
        {notes &&
          notes.map((note) => (
            <div
              className={`${styles.card} ${
                isExpandedNoteOpen ? styles.blurredBackground : ""
              }  `}
              key={note._id}
            >
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
