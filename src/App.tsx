import TodoList from "./TodoList/TodoList.tsx";
import ImageList from "./ImageList/ImageList.tsx";

import styles from "./App.module.css";
import { Login } from "./Login/Login.tsx";
import { Test } from "./Test/Test.tsx";

const App = () => {
  return (
    <div className={styles.container}>
      <h2>Hello Portfolio</h2>
      <TodoList />
      <ImageList />
      <Login />
      <Test />
    </div>
  );
};

export default App;
