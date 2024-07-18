import { createContext, useState, useContext, ReactNode } from 'react';
import { getCities } from '../functions/getCities';
import { addCity } from '../functions/addCity';
import { removeCity } from '../functions/removeCity';
import { clearAll } from '../functions/clearAll';
import { City } from '../interfaces/City';

interface CityContextType {
  cities: City[];
  addCity: (cityName: string) => Promise<void>;
  removeCity: (cityName: string) => void;
  clearAll: () => void;
}

const CityContext = createContext<CityContextType | undefined>(undefined);

export const CityProvider = ({ children }: { children: ReactNode }) => {
  const [cities, setCities] = useState<City[]>(getCities());

  return (
    <CityContext.Provider
      value={{
        cities,
        addCity: (cityName) => addCity(cityName, cities, setCities),
        removeCity: (cityName) => removeCity(cityName, cities, setCities),
        clearAll: () => clearAll(setCities),
      }}
    >
      {children}
    </CityContext.Provider>
  );
};

export const useCities = () => {
  const context = useContext(CityContext);
  if (context === undefined) {
    throw new Error('useCities must be used within a CityProvider');
  }
  return context;
};
