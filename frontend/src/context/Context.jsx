import { createContext, useContext, useState } from "react";

export const Context = createContext();

// Create a Provider component
export const MainProvider = ({ children }) => {
  const [counties, setCounties] = useState([]);
  const [fish, setFish] = useState([]);

  // Function to update counties state
  const updateCounties = (newCounties) => {
    setCounties(newCounties);
  };

  // Function to update fish state
  const updateFish = (newFish) => {
    setFish(newFish);
  };
  return (
    <Context.Provider value={{ counties, fish, updateCounties, updateFish }}>
      {children}
    </Context.Provider>
  );
};
export const useMainContext = () => useContext(Context);
