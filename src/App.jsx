import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import ThemeContext from "./contexts/ThemeContext";
import { useContext } from "react";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`app theme-${theme}`}>
      <Header />
      <ScrollToTop />
      <Outlet />
    </div>
  );
}

export default App;
