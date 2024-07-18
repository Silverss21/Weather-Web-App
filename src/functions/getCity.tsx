export const getCity = async (lat: number, lon: number) => {
  const url = `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&appid=e42eddb211a5312c6c9e5c3528e548aa`;
  const response = await fetch(url);
  const data = await response.json();
  return data[0].name;
};
