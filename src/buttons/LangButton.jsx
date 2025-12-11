import { useContext } from "react";
import I18nContext from "../contexts/I18nContext";
import { GlobalOutlined } from "@ant-design/icons";

const LangButton = () => {
  const { currentLang, changeLang } = useContext(I18nContext);

  const toggleLang = () => {
    changeLang(currentLang === "en" ? "ua" : "en");
  };

  return (
    <button onClick={toggleLang} className="btn-icon">
      <GlobalOutlined /> {currentLang.toUpperCase()}
    </button>
  );
};

export default LangButton;
 