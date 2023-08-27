import React, { useContext } from "react";
import { CountState } from "../App";
import Buttons from "./Buttons";

const ComponentA = () => {
  const { countState } = useContext(CountState);
  return (
    <>
      ComponentA : {countState}
      <Buttons />
    </>
  );
};

export default ComponentA;
