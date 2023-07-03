import { createContext, useContext, useEffect, useState } from "react";
import { cache } from "../cache";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isFirstTime, setIsFirstTime] = useState(null);
  const [loggedUser, setLoggedUser] = useState(null);

  const getIsFirstTime = async () => {
    const response = await cache.get("isFirstTime");

    setIsFirstTime(response == null);
  };

  useEffect(() => {
    getIsFirstTime();
  }, []);

  return (
    <AppContext.Provider
      value={{ isFirstTime, loggedUser, setLoggedUser, setIsFirstTime }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);

  return context;
};
