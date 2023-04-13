import React, { useState } from "react";

const Form = () => {
  const [initialUserName, setUserName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form Data is ${initialUserName}`);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          name="username"
          id="username"
          value={initialUserName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
