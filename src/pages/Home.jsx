import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import I18nContext from "../contexts/I18nContext";

const Home = () => {
  const navigate = useNavigate();
  const { currentTexts } = useContext(I18nContext);

  return (
    <div>
      <h1>{currentTexts.titleHome}</h1>
      
      <p>{currentTexts.aboutHome}</p>
      
      <div>
        <button onClick={() => navigate("/booking")}>{currentTexts.booknowHome}</button>
      </div>
    </div>
  );
};

export default Home;
