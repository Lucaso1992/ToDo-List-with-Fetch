import React, { useState, useEffect } from "react";

const Mylist = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  useEffect(() => {}, []);

  return (
    <div className="d-flex flex-column align-items-center">
      <h1>ToDo-List</h1>
      <ul className="list-inline">
        <li>
          <input
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                setTodos(todos.concat(inputValue));
                setInputValue("");
              }
            }}
            placeholder="What to do now?"
          ></input>
        </li>
        {todos.map((item, index) => (
          <li>
            {item}{" "}
            <button
              type="button"
              className="btn btn-primary"
              onClick={() =>
                setTodos(
                  todos.filter((t, currentIndex) => index != currentIndex)
                )
              }
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Mylist;
