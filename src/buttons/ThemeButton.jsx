import React, { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";
import "./Buttons.css";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";

const ThemeButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <button onClick={toggleTheme} className="btn-icon">
        {theme === "light" ? <MoonOutlined /> : <SunOutlined />}
      </button>
    </div>
  );
};

export default ThemeButton;
