import { useState } from "react";
import styles from "./ImageList.module.css";
import SearchImages from "./SearchImages.tsx";
import ImageSearchForm from "./ImageSearchForm.tsx";

const ImageList = () => {
  const [query, setQuery] = useState("");

  return (
    <div className={styles.container}>
      <h3>Image List</h3>
      <p> 키워드와 수를 입력받아 Pexels 에서 가져오는 페이지 </p>
      <ImageSearchForm setQuery={setQuery} />
      <div className={styles["img-container"]}>
        {query !== "" ? <SearchImages query={query} /> : <p>Nothing...</p>}
      </div>
    </div>
  );
};

export default ImageList;
