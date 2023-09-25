import React, { useState } from "react";
import styles from "./styles/NoteCard.module.css";

const ReadMore = ({ noteTitle, noteDescription }) => {
  const [modal, setModal] = useState(false);
  return (
    <>
      {modal ? (
        <div className={styles.readMoreCard}>
          <h3>{noteTitle}</h3>
          <p>{noteDescription}</p>
          <button onClick={() => setModal(!modal)}>Close</button>
        </div>
      ) : (
        <button className={styles.readMore} onClick={() => setModal(!modal)}>
          Read More
        </button>
      )}
    </>
  );
};

export default ReadMore;
