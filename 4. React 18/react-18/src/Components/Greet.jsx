import React from "react";

const Greet = (props) => {
  return (
    <div>
      <h1>I am {props.myName}</h1>
      <h2>{props.children}</h2>
    </div>
  );
};

// const Greet = () => <h1>Greet</h1>;

export default Greet;
