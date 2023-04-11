import React from "react";

const ClickHandler = () => {
  const clickHandler = (event, count = 1) => {
    console.log("Button Clicked", count, event);
  };

  return (
    <div>
      <button onClick={clickHandler}>Click</button>
      <button onClick={(event) => clickHandler(5, event)}>Click 5</button>
    </div>
  );
};

export default ClickHandler;
