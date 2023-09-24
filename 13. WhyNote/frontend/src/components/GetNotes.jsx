import React, { useContext, useEffect } from "react";
import { NoteContext } from "../global/Context";
import NoteCard from "./NoteCard";

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
      <NoteCard notes={notes} />
    </>
  );
};

export default Home;
