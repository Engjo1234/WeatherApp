import React, { createContext, useState } from "react";

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [city, setCity] = useState("Cairo");
  const [unit, setUnit] = useState("C"); // C or F

  return (
    <WeatherContext.Provider value={{ city, setCity, unit, setUnit }}>
      {children}
    </WeatherContext.Provider>
  );
};