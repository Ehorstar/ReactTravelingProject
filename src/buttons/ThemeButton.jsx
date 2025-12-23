import React, { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import button from "../CSS/Button.module.css";

const ThemeButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <button onClick={toggleTheme} className={button.button}>
        {theme === "light" ? <MoonOutlined /> : <SunOutlined />}
      </button>
    </div>
  );
};

export default ThemeButton;
