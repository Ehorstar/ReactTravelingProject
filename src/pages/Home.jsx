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
          <h1>{currentTexts.home.title}</h1>
          <p>{currentTexts.home.about}</p>
          <button
            className={button.button}
            onClick={() => navigate("/listpage")}
          >
            {currentTexts.home.booknow}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
