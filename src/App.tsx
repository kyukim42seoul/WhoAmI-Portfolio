import TodoList from "./TodoList/TodoList.tsx";
import ImageList from "./ImageList/ImageList.tsx";

import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.container}>
      <h2>Hello Portfolio</h2>
      <TodoList />
      <ImageList />
    </div>
  );
};

export default App;
