// 테스트 후에 컴포넌트 다 지워둘 것

import { useState } from "react";
import styles from "./Test.module.css";

export const Test = () => {
  const [urlHint, setUrlHint] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onClickHandler = async () => {
    const url = "http://127.0.0.1:3000/" + urlHint;
    setIsLoading(true);
    await fetch(url);
    setIsLoading(false);
  };

  return (
    <div className={styles.container}>
      <h3>Test</h3>
      <input
        value={urlHint}
        onChange={(e) => {
          setUrlHint(e.target.value);
        }}
      />
      <button onClick={onClickHandler}>TEST</button>
      {isLoading ? <p>is loading...</p> : <p>done!</p>}
    </div>
  );
};
