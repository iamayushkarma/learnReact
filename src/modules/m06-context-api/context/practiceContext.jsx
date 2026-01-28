import { useContext, useState, createContext } from "react";
const PracticeContext = createContext();

export const PracticeContextProvider = ({ children }) => {
  const [value, setValue] = useState();
  return (
    <PracticeContext.Provider value={{ value, setValue }}>
      {children}
    </PracticeContext.Provider>
  );
};
export function usePracticeContext() {
  const context = useContext(PracticeContext);
  if (!context) return console.log("Context must wrap with provider");
  return context;
}
