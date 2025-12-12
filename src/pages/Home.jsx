import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import I18nContext from "../contexts/I18nContext";
import "../CSS/Home.css";
const Home = () => {
  const navigate = useNavigate();
  const { currentTexts } = useContext(I18nContext);

  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hero-card">
          <h1>{currentTexts.titleHome}</h1>
          <p>{currentTexts.aboutHome}</p>
          <button className="btn-home" onClick={() => navigate("/listpage")}>
            {currentTexts.booknowHome}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
