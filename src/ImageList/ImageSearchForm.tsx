import { useState } from "react";
import styles from "./ImageSearchForm.module.css";
//import { BASE_URL } from "../constants.ts";

const BASE_URL = import.meta.env.VITE_REQ_BASE_URL;
console.log(`URL: ${BASE_URL}`, BASE_URL);

interface Props {
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

const ImageSearchForm = ({ setQuery }: Props) => {
  const [searchParam, setSearchParam] = useState<string>("");
  const [photoCount, setPhotoCount] = useState("");

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const seacrhURL =
      BASE_URL + "search?query=" + searchParam + "&per_page=" + photoCount;
    if (searchParam && photoCount) {
      setQuery(seacrhURL);
    }
    setSearchParam("");
    setPhotoCount("");
  };

  return (
    <form className={styles["search-form"]} onSubmit={onSubmitHandler}>
      <input
        placeholder="Type keyword please"
        value={searchParam}
        onChange={(e) => {
          setSearchParam(e.target.value);
        }}
      />
      <input
        placeholder="Set count please"
        value={photoCount}
        onChange={(e) => {
          setPhotoCount(e.target.value);
        }}
      />
      <button>SEARCH</button>
    </form>
  );
};

export default ImageSearchForm;
