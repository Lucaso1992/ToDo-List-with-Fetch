import React, { useState } from "react";

const Mylist = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="d-flex flex-column align-items-center">
      <h1>ToDo-List</h1>
      <ul>
        <li>
          <input
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                setTodos(todos.concat(inputValue));
              }
            }}
            placeholder="What to do now?"
          ></input>
        </li>
        {todos.map((t) => (
          <li>{t}</li>
        ))}
      </ul>
      <span>
        <button>Press Enter</button>
      </span>
    </div>
  );
};

export default Mylist;
