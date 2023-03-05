import React, { useContext } from "react";
import { BioData } from "./App";

const Component3 = (props) => {
  const obj = useContext(BioData);
  return (
    <>
      <h1>
        {" "}
        Hello from {obj.name} , age: {obj.age}
      </h1>
    </>
  );
};

export default Component3;
