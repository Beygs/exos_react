import React, { useState } from "react";

const Form = () => {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value.toLowerCase());
  };

  return (
    <input type="text" value={text} onChange={handleChange} />
  );
};

export default Form;
