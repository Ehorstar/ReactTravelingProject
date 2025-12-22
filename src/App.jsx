import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import ThemeContext from "./contexts/ThemeContext";
import { useContext } from "react";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`app theme-${theme}`}>
      <header>
        <Header />
      </header>
      <Outlet />
    </div>
  );
}

export default App;
