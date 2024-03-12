import Item from "./Item";

const FilteredList = ({ items, filter, setTodos }) => {
  console.log(items);
  const filterItems = (items, filter) => {
    if (filter === "All") {
      return items;
    } else if (filter === "Todo") {
      return items.filter((item) => item.checked === false);
    } else {
      return items.filter((item) => item.checked === true);
    }
  };

  const filteredItems = filterItems(items, filter);

  return (
    <div>
      <ul>
        {filteredItems.map((item, index) => (
          <Item
            key={index}
            id={item.id}
            checked={item.checked}
            text={item.text}
            setTodos={setTodos}
          />
        ))}
      </ul>
    </div>
  );
};

export default FilteredList;
