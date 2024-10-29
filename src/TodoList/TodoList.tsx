import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import AddTodo from "./AddTodo.tsx";
import FilteredList from "./FilteredList.tsx";
import Navigation from "./Navigation.tsx";
import styles from "./TodoList.module.css";

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
    if (inputText) {
      const newTodo: Todo = createTodo(inputText, false);
      setTodos((prev) => {
        const newTodos = [...prev, newTodo];
        return newTodos;
      });
    }
    setInputText("");
  };

  return (
    <div className={styles.container}>
      <h3>Todo List</h3>
      <p> 할 일을 추가, 삭제, 필터링 할 수 있는 페이지 </p>
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
