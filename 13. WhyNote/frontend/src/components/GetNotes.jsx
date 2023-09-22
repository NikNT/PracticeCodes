import React, { useEffect, useState } from "react";

const Home = () => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/notes");
        const data = await response.json();
        console.log(data);
        setNotes(data);
      } catch (err) {
        console.error("Error getting data: ", err);
      }
    };

    fetchNotes();
  }, []);
  return (
    <>
      <h1>NotesList</h1>
      {notes &&
        notes.map((note) => (
          <li>
            {note.title} | {note.description}
          </li>
        ))}
    </>
  );
};

export default Home;
