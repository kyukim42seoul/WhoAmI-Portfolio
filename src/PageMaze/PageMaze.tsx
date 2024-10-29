// Component for testing move prev/next page feature

//import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const PageMaze = () => {
  return (
    <div>
      <p>I'm first page</p>
      <button
        onClick={() => {
          const navigate = useNavigate();
          navigate("/second-page");
        }}
      >
        next
      </button>
    </div>
  );
};
