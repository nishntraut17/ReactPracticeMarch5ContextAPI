import React, { createContext } from "react";
import Component1 from "./Component1";
// import Component2 from "./Component2";
import "./styles.css";

const BioData = createContext();

export default function App() {
  const obj = {
    name: "nishant",
    age: 21
  };
  return (
    <BioData.Provider value={obj}>
      <Component1 />
    </BioData.Provider>
  );
}

export { BioData };
