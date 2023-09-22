import React, { useContext, useEffect } from "react";
import { NoteContext } from "../global/Context";
import DeleteNote from "./DeleteNote";

const Home = () => {
  const { notes, dispatch } = useContext(NoteContext);
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/notes");
        const data = await response.json();

        if (response.ok) {
          dispatch({
            type: "GET_ALL_NOTES",
            payload: data,
          });
          console.log("Returned Data ", data);
        }
      } catch (err) {
        console.error("Error getting data: ", err);
      }
    };

    fetchNotes();
  }, [dispatch]);
  return (
    <>
      <h2>NotesList</h2>
      {notes &&
        notes.map((note) => (
          <li key={note._id}>
            {note.title} | {note.description}
            <DeleteNote noteId={note._id} />
          </li>
        ))}
    </>
  );
};

export default Home;
