import React, { useState } from "react";

const Mylist = () => {
  const [input, setInput] = useState([]);
  const validateInput = () => {
    if (input === input.length) useState.push(input);
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button onClick={validateInput}></button>
    </div>
  );
};

export default Mylist;
