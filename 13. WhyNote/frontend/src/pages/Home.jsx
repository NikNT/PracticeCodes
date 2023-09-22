import React from "react";
import GetNotes from "../components/GetNotes";
import PostNote from "../components/PostNote";

const Home = () => {
  return (
    <>
      <h1>WhyNote</h1>
      <GetNotes />
      <PostNote />
    </>
  );
};

export default Home;
