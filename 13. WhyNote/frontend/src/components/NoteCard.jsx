import React, { useState } from "react";
import DeleteNote from "./DeleteNote";
import styles from "./styles/NoteCard.module.css";
import PostNote from "./PostNote";
import deleteIcon from "../assets/delete.svg";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
// import { motion, AnimatePresence } from "framer-motion";

const NoteCard = ({ notes }) => {
  // const [selectedId, setSelectedId] = useState(null);
  return (
    <>
      <PostNote />
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
                <button className={styles.readMore}>Read More</button>
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
