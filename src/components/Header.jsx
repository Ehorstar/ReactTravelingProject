import { NavLink } from "react-router";
import logo from "../assets/logo.png";
import styles from "../CSS/Home.module.css";
import button from "../CSS/Button.module.css";
import AuthContext from "../contexts/AuthContext";
import { useContext } from "react";
import { UserOutlined } from "@ant-design/icons";
import I18nContext from "../contexts/I18nContext";

const Header = () => {
  const savedUser = JSON.parse(localStorage.getItem("user"));
  const { loged } = useContext(AuthContext);
  const { currentTexts } = useContext(I18nContext);
  return (
    <header>
      <nav className={styles.nav}>
        <NavLink to="/" className={styles["nav-left"]}>
          <img src={logo} alt="Logo" className={styles.logo} />
        </NavLink>

        <div className={styles["nav-center"]}>
          <NavLink to="listpage" className={styles["nav-link"]}>
            {currentTexts.nav.tours}
          </NavLink>
          <NavLink to="tripshistory" className={styles["nav-link"]}>
            {currentTexts.nav.history}
          </NavLink>
          <NavLink to="settings" className={styles["nav-link"]}>
            {currentTexts.nav.settings}
          </NavLink>
        </div>

        <div className={styles["nav-right"]}>
          <div className={styles.underline}>
            {loged ? (
              <span className={styles.user}>
                <UserOutlined className={styles.icon} />
                {savedUser.name}
              </span>
            ) : (
              <NavLink to="registration" className={styles["nav-link"]}>
                <button className={button.button}>Registration</button>
              </NavLink>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
