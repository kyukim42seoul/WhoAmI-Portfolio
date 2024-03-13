import { FormEventHandler } from "react";

interface Props {
  handleSubmit: FormEventHandler<HTMLFormElement>;
  inputText: string;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
}

const AddTodo = ({ handleSubmit, inputText, setInputText }: Props) => {
  return (
    <div className="add-container">
      <form onSubmit={handleSubmit}>
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
