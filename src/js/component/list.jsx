import React, { useState } from "react";

const Mylist = () => {
  const [input, setInput] = useState([]);
  const validateInput = () => {
    if (input === input.length) useState.push(input);
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <h1>ToDo-List</h1>
      <input
        type="text"
        placeholder="Escribe aquí..."
        onChange={(e) => setInput(e.target.value)}
        value={input}
        onKeyDown={validateInput}
      />
      <span>
        <button>Press Enter</button>
      </span>
    </div>
  );
};

export default Mylist;
