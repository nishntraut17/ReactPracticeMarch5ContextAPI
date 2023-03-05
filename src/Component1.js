import React from "react";
import Component2 from "./Component2";

const Component1 = (props) => {
  return (
    <>
      <Component2 name={props.name} />
    </>
  );
};

export default Component1;
