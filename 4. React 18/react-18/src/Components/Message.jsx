import React, { useState } from "react";

const Message = () => {
  const [message, setMessage] = useState("Welcome Visitor!");
  return (
    <div>
      <h1>{message}</h1>
      <button onClick={() => setMessage("Thanks for Sub!")}>Sub!</button>
    </div>
  );
};

export default Message;
