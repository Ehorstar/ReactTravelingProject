import { useContext } from "react";
import I18nContext from "../contexts/I18nContext";
import { GlobalOutlined } from "@ant-design/icons";
import button from "../CSS/Button.module.css"

const LangButton = () => {
  const { currentLang, changeLang } = useContext(I18nContext);

  const toggleLang = () => {
    changeLang(currentLang === "en" ? "ua" : "en");
  };

  return (
    <button onClick={toggleLang} className={button.button}>
      <GlobalOutlined /> {currentLang.toUpperCase()}
    </button>
  );
};

export default LangButton;
 