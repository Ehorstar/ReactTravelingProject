import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../CSS/Booking.css";
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
    <input
      className="search-input"
      type="text"
      placeholder="Paris..."
      value={text}
      onChange={(e) => setText(e.target.value)}
      onKeyDown={keyDownHandler}
    />
  );
};

export default Search;
