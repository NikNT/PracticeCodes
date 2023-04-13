import React from "react";

const NameList = () => {
  const names = ["Alpha", "Bravo", "Charlie", "Delta", "Echo"];
  return (
    <div>
      {names.map((name) => (
        <h2 key={name}>{name}</h2>
      ))}
    </div>
  );
};

export default NameList;
