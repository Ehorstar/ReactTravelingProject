import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import I18nContext from "../contexts/I18nContext";
import styles from "../CSS/Home.module.css";
import button from "../CSS/Button.module.css"

const Home = () => {
  const navigate = useNavigate();
  const { currentTexts } = useContext(I18nContext);

  return (
    <div className={styles.hero}>
      <div className={styles["hero-content"]}>
        <div className={styles["hero-card"]}>
          <h1>{currentTexts.titleHome}</h1>
          <p>{currentTexts.aboutHome}</p>
          <button className={button.button} onClick={() => navigate("/listpage")}>
            {currentTexts.booknowHome}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
