import React, { createContext, useContext, useState } from "react";

const RegistrationContext = createContext();

export const RegistrationProvider = ({ children }) => {
  const [registeredCourses, setRegisteredCourses] = useState([]);

  const registerToCourse = (course) => {
    setRegisteredCourses((prevCourses) => [...prevCourses, course]);
  };

  return (
    <RegistrationContext.Provider value={{ registeredCourses, registerToCourse }}>
      {children}
    </RegistrationContext.Provider>
  );
};

export const useRegistration = () => {
  return useContext(RegistrationContext);
};

export { RegistrationContext };
