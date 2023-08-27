import React, { useContext } from "react";
import { CountState } from "../App";
import Buttons from "./Buttons";

const ComponentD = () => {
  const { countState } = useContext(CountState);
  return (
    <>
      ComponentD : {countState}
      <Buttons />
    </>
  );
};

export default ComponentD;
