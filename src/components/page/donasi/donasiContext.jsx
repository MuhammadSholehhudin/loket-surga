import { createContext, useState, useContext } from "react";

const DonasiContext = createContext();

export function useDonasiContext() {
  return useContext(DonasiContext);
}

export function DonasiProvider({ children }) {
  const [selectedNominal, selectedNominalSet] = useState(null);
  const [selectedMetode, selectedMetodeSet] = useState(null);

  const setDonasiData = (nominal, metode) => {
    selectedNominalSet(nominal);
    selectedMetodeSet(metode);
  };

  return (
    <DonasiContext.Provider
      value={{ selectedNominal, selectedMetode, setDonasiData }}
    >
      {children}
    </DonasiContext.Provider>
  );
}
