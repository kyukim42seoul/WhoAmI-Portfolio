import styles from "./Navigation.module.css";
import { Filter } from "./TodoList";

interface Props {
  setFilter: React.Dispatch<React.SetStateAction<Filter>>;
}

const Navigation = ({ setFilter }: Props) => {
  return (
    <div className="nav-container">
      <nav className={styles["nav-wrapper"]}>
        <ul className={styles["nav-list"]}>
          <li className={styles["nav-link"]} onClick={() => setFilter("All")}>
            <a>All</a>
          </li>
          <li className={styles["nav-link"]} onClick={() => setFilter("Todo")}>
            <a>Todo</a>
          </li>
          <li className={styles["nav-link"]} onClick={() => setFilter("Done")}>
            <a>Done</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
