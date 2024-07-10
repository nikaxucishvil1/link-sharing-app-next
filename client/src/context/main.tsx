"use client"
import { createContext, useState, useContext } from "react";

const GlobalContext = createContext<GlobalContext | null>(null);

export const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState("hello");
  const [sum, setSum] = useState("ara");

  return (
    <GlobalContext.Provider value={{ state,sum }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(GlobalContext)
};
