import React, { useContext } from "react";
import ThemeButton from "../buttons/ThemeButton";
import LangButton from "../buttons/LangButton";
import styles from "../CSS/Settings.module.css";
import RegistrationContext from "../contexts/RegistrationContext";
import button from "../CSS/Button.module.css";

const Settings = () => {
  const { registred, setRegistred } = useContext(RegistrationContext);

  return (
    <div className={styles.container}>
      <h1>Settings</h1>
      <div className={styles.changeTheme}>
        <p>Change theme: </p>
        <ThemeButton />
      </div>
      <div className={styles.changeLang}>
        <p>Change language: </p>
        <LangButton />
      </div>
      <div className={styles.account}>
        <h2>Account Settings</h2>
        <p>Leave account: </p>
        <button className={button.button} onClick={() => setRegistred(false)}>Leave Account</button>
      </div>
    </div>
  );
};

export default Settings;
