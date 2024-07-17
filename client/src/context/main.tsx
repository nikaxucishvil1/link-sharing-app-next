"use client";
import { createContext, useState, useContext } from "react";

const GlobalContext = createContext<GlobalContext | null>(null);

export const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  const [linksArr, setLinkArr] = useState([]);

  return (
    <GlobalContext.Provider value={{ linksArr, setLinkArr }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(GlobalContext);
};
