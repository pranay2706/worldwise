/* eslint-disable react/prop-types */

import { createContext, useContext, useEffect, useState } from "react";

const URL = "http://localhost:8000";
const CityContext = createContext();

function CityProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchData() {
      try {
        setIsLoading(true);
        const res = await fetch(`${URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch {
        alert("There wan an error fetching data");
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <CityContext.Provider value={{ cities, isLoading }}>
      {children}
    </CityContext.Provider>
  );
}

function useCities() {
  const context = useContext(CityContext);
  if (context === undefined) {
    throw new Error("citiescontext was used outside the cities provider");
  }
  return context;
}

export { CityProvider, useCities };
