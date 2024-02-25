import { createContext, useContext, useState } from "react";

export const Context = createContext();

// Create a Provider component
export const MainProvider = ({ children }) => {
  const [counties, setCounties] = useState([]);
  const [fish, setFish] = useState([]);
  const [usersSeenList, setUsersSeenList] = useState([]);

  // Function to update counties state
  const updateCounties = (newCounties) => {
    setCounties(newCounties);
  };

  const initializeUserSeenFishList = (arrayOfFishIds) => {
    setUsersSeenList(arrayOfFishIds);
  };

  const addFishIdToSeenList = (idToAdd) => {
    setUsersSeenList([...usersSeenList, idToAdd]);
  };

  const removeFishIdOnSeenList = (idToRemove) => {
    setUsersSeenList(usersSeenList.filter((id) => id !== idToRemove));
  };

  // Function to update fish state
  const updateFish = (newFish) => {
    setFish(newFish);
  };
  return (
    <Context.Provider
      value={{
        counties,
        fish,
        updateCounties,
        updateFish,
        initializeUserSeenFishList,
        addFishIdToSeenList,
        removeFishIdOnSeenList,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export const useMainContext = () => useContext(Context);
