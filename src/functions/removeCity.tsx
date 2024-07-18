import { City } from '../interfaces/City';

export const removeCity = (
  cityName: string,
  cities: City[],
  setCities: (cities: City[]) => void
) => {
  const updatedCities = cities.filter((city) => city.name !== cityName);
  setCities(updatedCities);
  localStorage.setItem('cities', JSON.stringify(updatedCities));
  window.location.href = '/';
};
