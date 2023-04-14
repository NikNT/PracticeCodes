import React, { useState, useTransition } from "react";
import NAMES from "../Components/data.json";

const Transition = () => {
  const [query, setQuery] = useState("");
  const [inputVal, setInputVal] = useState("");
  const [isPending, startTransition] = useTransition();
  const handleChange = (event) => {
    event.preventDefault();
    setInputVal(event.target.value);
    startTransition(() => setQuery(event.target.value));
  };

  const filteredNames = NAMES.filter((NAME) => {
    return NAME.firstname.includes(query) || NAME.lastname.includes(query);
  });

  return (
    <div>
      <input type="text" onChange={handleChange} value={inputVal} />
      {isPending && <h2>Updating Lists</h2>}
      {filteredNames.map((NAME) => (
        <div>
          <h1 key={NAME.id}>
            {NAME.firstname} {NAME.lastname}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default Transition;
