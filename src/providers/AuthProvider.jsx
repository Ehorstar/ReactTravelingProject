import { useEffect, useState } from "react";
import AuthContext from "../contexts/AuthContext";

const AuthProvider = ({ children }) => {
  const [loged, setLoged] = useState(() => {
    const saved = localStorage.getItem("registred");
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem("registred", JSON.stringify(loged));
  }, [loged]);

  return (
    <AuthContext.Provider value={{ loged, setLoged }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
