import React, { useState, useEffect } from "react";

const HelloShow = () => {
  const [value, setValue] = useState(false);

  setTimeout(() => {
    console.log("request sent");
  }, 2000);

  useEffect(() => {
    console.log("effect");
    return () => {
      console.log("clean Up");
    };
  }, [value]);

  const ClickHandler = () => {
    setValue((value) => !value);
  };
  return (
    <div>
      <h1>{value ? "Sagar" : "Hello"}</h1>
      <button onClick={ClickHandler}>Click Me</button>
    </div>
  );
};

export default HelloShow;
