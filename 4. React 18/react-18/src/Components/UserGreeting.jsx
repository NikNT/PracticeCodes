import React, { useState } from "react";

const UserGreeting = () => {
  const [isLoggedIn, loggedIn] = useState(false);
  return (
    <div>
      <h1>Hi{isLoggedIn && " Nik"}</h1>
      <button onClick={() => loggedIn(true)}>
        Log {isLoggedIn ? " Out" : " In"}
      </button>
    </div>
  );
};

export default UserGreeting;
