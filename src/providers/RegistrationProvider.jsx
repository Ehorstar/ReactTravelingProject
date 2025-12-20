import { useEffect, useState } from "react";
import RegistrationContext from "../contexts/RegistrationContext";

const RegistrationProvider = ({ children }) => {
  const [registred, setRegistred] = useState(() => {
    const saved = localStorage.getItem("registred");
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem("registred", JSON.stringify(registred));
  }, [registred]);

  return (
    <RegistrationContext.Provider value={{ registred, setRegistred }}>
      {children}
    </RegistrationContext.Provider>
  );
};

export default RegistrationProvider;
