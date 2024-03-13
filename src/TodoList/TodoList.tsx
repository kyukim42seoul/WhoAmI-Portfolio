import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./TodoList.module.css";

import Navigation from "./Navigation.tsx";
import FilteredList from "./FilteredList.tsx";
import AddTodo from "./AddTodo.tsx";

export type Todo = {
  id: string;
  text: string;
  status: boolean;
};

export type Filter = "All" | "Todo" | "Done";

export const createTodo = (text: string, status: boolean) => {
  const newId = uuidv4();
  return {
    id: newId,
    text: text,
    status: status,
  };
};

const TodoList = () => {
  const [Todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<Filter>("All");
  const [inputText, setInputText] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo: Todo = createTodo(inputText, false);
    setTodos((prev) => {
      const newTodos = [...prev, newTodo];
      return newTodos;
    });
    setInputText("");
  };

  return (
    <div className={styles.container}>
      <Navigation setFilter={setFilter} />
      <FilteredList items={Todos} filter={filter} setTodos={setTodos} />
      <AddTodo
        handleSubmit={handleSubmit}
        inputText={inputText}
        setInputText={setInputText}
      />
    </div>
  );
};

export default TodoList;
