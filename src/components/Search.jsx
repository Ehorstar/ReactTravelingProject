import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "../CSS/Tours.module.css";

const Search = () => {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const keyDownHandler = (e) => {
    if (e.key !== "Enter") return;

    const value = text.trim();

    if (!value) {
      navigate("/listpage");
      return;
    }

    navigate(value ? `/search?q=${value}` : "/listpage");
    setText("");
  };

  return (
    <div className={styles.search}>
      <input
        className={styles["search-input"]}
        type="text"
        placeholder="🔍Paris..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={keyDownHandler}
      />
    </div>
  );
};

export default Search;
