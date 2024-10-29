import { useEffect, useState } from "react";
import Images from "./Images.tsx";
//import { API_KEY } from "../constants.ts";
import styles from "./SearchImages.module.css";

const API_KEY = import.meta.env.VITE_PHOTO_KEY;
console.log(`KEYS: ${API_KEY}`, API_KEY);

interface Props {
  query: string;
}

const SearchImages = ({ query }: Props) => {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getPhotos = async (query: string) => {
    setIsLoading(true);
    const res = await fetch(query, {
      headers: {
        Authorization: API_KEY,
      },
    });
    const resJSON = await res.json();
    console.log(`response : ${resJSON}`, resJSON);
    setPhotos(resJSON.photos);
    setIsLoading(false);
  };

  useEffect(() => {
    getPhotos(query);
  }, [query]);

  return (
    <>
      <div className={styles["loading-wrapper"]}>
        {isLoading ? <span>Loading...</span> : null}
      </div>
      <Images photos={photos} />
    </>
  );
};

export default SearchImages;
