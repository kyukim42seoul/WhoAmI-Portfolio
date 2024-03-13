import styles from "./FilteredList.module.css";
import Item from "./Item";
import { Filter, Todo } from "./TodoList.tsx";

interface Props {
  items: Todo[];
  filter: Filter;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const FilteredList = ({ items, filter, setTodos }: Props) => {
  const filterItems = (items: Todo[], filter: Filter) => {
    if (filter === "All") {
      return items;
    } else if (filter === "Todo") {
      return items.filter((item) => item.status === false);
    } else {
      return items.filter((item) => item.status === true);
    }
  };

  const filteredItems = filterItems(items, filter);

  return (
    <div>
      <ul className={styles.list}>
        {filteredItems.map((item: Todo) => {
          return (
            <Item
              key={item.id}
              uid={item.id}
              status={item.status}
              text={item.text}
              setTodos={setTodos}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default FilteredList;
