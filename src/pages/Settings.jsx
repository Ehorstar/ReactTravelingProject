import React, { useContext } from "react";
import ThemeButton from "../buttons/ThemeButton";
import LangButton from "../buttons/LangButton";
import "../CSS/Settings.css";
import RegistrationContext from "../contexts/RegistrationContext";

const Settings = () => {
  const { registred, setRegistred } = useContext(RegistrationContext);

  return (
    <div className="container">
      <h1>Settings</h1>
      <div className="changeTheme">
        <p>Change theme: </p>
        <ThemeButton />
      </div>
      <div className="changeLang">
        <p>Change language: </p>
        <LangButton />
      </div>
      <div className="account">
        <h2>Account Settings</h2>
        <p>Leave account: </p>
        <button className="button" onClick={setRegistred(false)}>Leave Account</button>
      </div>
    </div>
  );
};

export default Settings;
