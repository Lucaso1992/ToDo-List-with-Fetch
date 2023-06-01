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
        placeholder="Escribe aquí..."
        onChange={(e) => setInput(e.target.value)}
        value={input}
        onKeyDown={validateInput}
      />
      <span>Press Enter</span>
    </div>
  );
};

export default Mylist;
