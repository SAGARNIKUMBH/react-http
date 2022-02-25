import React, { useState, useEffect } from "react";

const ValueFrom = () => {
  const [value1, setValue1] = useState("VALUE1");
  const [value2, setValue2] = useState("VALUE2");
  const [value3, setValue3] = useState("VALUE3");

  useEffect(() => {
    console.log("effect");
  }, [value1]);

  const clickHandler1 = () => {
    setValue1((value1) => value1 + "VALUE1");
  };

  const clickHandler2 = () => {
    setValue2((value2) => value2 + "VALUE2");
  };

  const clickHandler3 = () => {
    setValue3((value3) => value3 + "VALUE3");
  };
  return (
    <div>
      <button onClick={clickHandler1}>value1</button>
      <button onClick={clickHandler2}>value2</button>
      <button onClick={clickHandler3}>value3</button>
    </div>
  );
};

export default ValueFrom;
