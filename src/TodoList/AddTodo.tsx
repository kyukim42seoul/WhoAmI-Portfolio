import { FormEventHandler } from "react";
import styles from "./AddTodo.module.css";

interface Props {
  handleSubmit: FormEventHandler<HTMLFormElement>;
  inputText: string;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
}

const AddTodo = ({ handleSubmit, inputText, setInputText }: Props) => {
  return (
    <div className={styles["add-container"]}>
      <form className={styles["add-form"]} onSubmit={handleSubmit}>
        <input
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
          }}
          placeholder="What should I do?"
        />
        <button>ADD</button>
      </form>
    </div>
  );
};

export default AddTodo;
