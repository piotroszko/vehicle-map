import React, { createContext, useState } from "react";

interface IFilterContext {
  available: string;
  setAvailable?: (value: string) => void;
  batteryLevelPct: number;
  setBatteryLevelPct?: (value: number) => void;
  clearFilters?: () => void;
}
const defaultContext = {
  available: "",
  batteryLevelPct: 0,
};
export const filterContext = createContext<IFilterContext>(defaultContext);

type Props = {
  children: JSX.Element[] | JSX.Element;
};
const FilterContextProvider = ({ children }: Props) => {
  const [available, setAvailable] = useState(defaultContext.available);
  const [batteryLevelPct, setBatteryLevelPct] = useState(
    defaultContext.batteryLevelPct
  );
  const clearFilters = () => {
    setAvailable("");
    setBatteryLevelPct(defaultContext.batteryLevelPct);
  };
  return (
    <filterContext.Provider
      value={{
        available,
        setAvailable,
        batteryLevelPct,
        setBatteryLevelPct,
        clearFilters,
      }}>
      {children}
    </filterContext.Provider>
  );
};

export default FilterContextProvider;
