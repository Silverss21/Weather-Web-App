import { getPos } from './getPos';
import { City } from '../interfaces/City';

export const addCity = async (
  cityName: string,
  cities: City[],
  setCities: (cities: City[]) => void
) => {
  if (cityName.trim() !== '') {
    try {
      const cityData = await getPos(cityName);
      const cityExists = cities.some((city) => city.name === cityName);
      if (!cityExists) {
        const updatedCities = [...cities, cityData];
        setCities(updatedCities);
        localStorage.setItem('cities', JSON.stringify(updatedCities));
      }
    } catch (error) {
      console.error('Failed to fetch city data', error);
    }
  }
};
