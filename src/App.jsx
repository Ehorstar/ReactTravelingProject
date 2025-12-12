import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import ThemeButton from "./buttons/ThemeButton";
import ThemeContext from "./contexts/ThemeContext";
import { useContext } from "react";
import LangButton from "./buttons/LangButton";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`app theme-${theme}`}>
      <header>
        <Header />
        {/* <div style={{ display: "flex", gap: "10px" }}>
          <ThemeButton />
          <LangButton />
        </div> */}
      </header>
      <Outlet />
    </div>
  );
}

export default App;
