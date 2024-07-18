import { City } from '../interfaces/City';

export const getPos = async (cityName: string): Promise<City> => {
  const url = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=e42eddb211a5312c6c9e5c3528e548aa`;
  const response = await fetch(url);
  const data = await response.json();
  return {
    name: data[0].name,
    lat: data[0].lat,
    lon: data[0].lon,
  };
};
