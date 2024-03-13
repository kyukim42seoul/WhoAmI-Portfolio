import React from "react";

import styles from "./Item.module.css";
import { Todo, createTodo } from "./TodoList.tsx";

interface Props {
  uid: string;
  status: boolean;
  text: string;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const replaceElement = (
  prevArray: Array<Todo>,
  targetIndex: number,
  newElement: Todo
) => {
  return [
    ...prevArray.slice(0, targetIndex),
    newElement,
    ...prevArray.slice(targetIndex + 1),
  ];
};

const removeElement = (prevArray: Array<Todo>, targetIndex: number) => {
  return [
    ...prevArray.slice(0, targetIndex),
    ...prevArray.slice(targetIndex + 1),
  ];
};

const Item = ({ uid, status, text, setTodos }: Props) => {
  return (
    <li className={`${status ? styles.done : ""} ${styles.line}`}>
      <input
        type="checkbox"
        checked={status}
        onChange={() => {
          setTodos((prev) => {
            const targetIndex = prev.findIndex((item) => item.id === uid);
            const newTodo: Todo = createTodo(
              prev[targetIndex].text,
              !prev[targetIndex].status
            );
            return replaceElement(prev, targetIndex, newTodo);
          });
        }}
      />
      {text}
      <button
        className={styles["remove-btn"]}
        onClick={() => {
          setTodos((prev) => {
            const targetIndex = prev.findIndex((item) => item.id === uid);
            return removeElement(prev, targetIndex);
          });
        }}
      >
        x
      </button>
    </li>
  );
};

export default Item;
