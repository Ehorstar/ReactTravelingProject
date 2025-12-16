import { useEffect, useState } from "react";
import RegistrationContext from "../contexts/RegistrationContext";

const RegistrationProvider = ({ children }) => {
  const [registred, setRegistred] = useState(() => {
    return localStorage.getItem("registred") || "false";
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
