import React, { useContext } from "react";
import { CountState } from "../App";
import Buttons from "./Buttons";

const ComponentF = () => {
  const { countState } = useContext(CountState);
  return (
    <>
      ComponentF : {countState}
      <Buttons />
    </>
  );
};

export default ComponentF;
