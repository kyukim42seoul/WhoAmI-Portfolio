import { useState } from "react";
import styles from "./TodoList.module.css";

import Navigation from "./Navigation";
import FilteredList from "./FilteredList";

const TodoList = () => {
  const [Todos, setTodos] = useState([{}]);
  const [filter, setFilter] = useState(["All", "Todo", "Done"]);
  const [inputText, setInputText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newId = Math.random();
    const newTodo = { id: newId, text: inputText, checked: false };
    setTodos((prev) => {
      const newTodos = [...prev, newTodo];
      return newTodos;
    });
    setInputText("");
  };

  return (
    <div>
      <Navigation setFilter={setFilter} />
      <FilteredList items={Todos} filter={filter} setTodos={setTodos} />
      <div className="add-container">
        <form onSubmit={handleSubmit}>
          <input
            value={inputText}
            onChange={(e) => {
              setInputText(e.target.value);
            }}
            placeholder="What should I do?"
          />
          <button onClick={() => {}}>ADD</button>
        </form>
      </div>
    </div>
  );
};

export default TodoList;
