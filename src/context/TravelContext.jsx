import { createContext, useContext, useState } from "react";

export const TravelContext = createContext();

export const TravelContextProvider = ({ children }) => {
  const [currentContinentData, setCurrentContinentData] = useState({});
  const [currentCountryData, setCurrentCountryData] = useState({});
  return (
    <TravelContext.Provider
      value={{
        currentContinentData,
        setCurrentContinentData,
        currentCountryData,
        setCurrentCountryData
      }}
    >
      {children}
    </TravelContext.Provider>
  );
};

export const useTravel = () => useContext(TravelContext);
