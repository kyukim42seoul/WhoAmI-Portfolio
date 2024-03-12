import styles from "./Navigation.module.css";

const Navigation = ({ setFilter }) => {
  return (
    <div className="nav-container">
      <nav style={{ marginBottom: "8px" }}>
        <ul style={{ display: "flex", gap: "16px" }}>
          <li className={styles["nav-link"]} onClick={() => setFilter("All")}>
            <a>All</a>
          </li>
          <li className={styles["nav-link"]} onClick={() => setFilter("Todo")}>
            <a>Todo</a>
          </li>
          <li
            className={styles["nav-link"]}
            onClick={() => setFilter("Complete")}
          >
            <a>Done</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
