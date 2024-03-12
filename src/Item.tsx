import styles from "./Item.module.css";

const Item = ({ checked, text, setChecked }) => {
  console.log("text: ", text);
  return (
    <li className={checked ? styles.done : ""}>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked((prev) => !prev)}
      />
      {text}
    </li>
  );
};

export default Item;
