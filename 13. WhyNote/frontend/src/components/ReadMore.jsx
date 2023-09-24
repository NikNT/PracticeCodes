import React from "react";
import styles from "./styles/NoteCard.module.css";

const ReadMore = ({ noteTitle, noteDescription }) => {
  return (
    <button
      className={styles.readMore}
      onClick={() => console.log(noteTitle | noteDescription)}
    >
      Read More
    </button>
  );
};

export default ReadMore;
