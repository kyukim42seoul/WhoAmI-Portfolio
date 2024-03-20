import { useState } from "react";
import styles from "./ImageList.module.css";
import SearchImages from "./SearchImages.tsx";
import ImageSearchForm from "./ImageSearchForm.tsx";

const ImageList = () => {
  const [query, setQuery] = useState("");

  return (
    <div className={styles.container}>
      <h3>Image List</h3>
      <ImageSearchForm setQuery={setQuery} />
      <div className={styles["img-container"]}>
        {query !== "" ? <SearchImages query={query} /> : <p>Nothing...</p>}
      </div>
    </div>
  );
};

export default ImageList;
