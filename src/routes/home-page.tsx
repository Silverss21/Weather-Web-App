import { useParams } from 'react-router-dom';
import { useCities } from '../hooks/CityContext';
import Header from '../components/header';
import NoCity from '../components/no-city';
import { useEffect, useState } from 'react';
import Cloudy from '../assets/cloudy.svg';

import { getWeatherIcon } from '../functions/getWeatherIcon';

import { LineChart } from '@mui/x-charts/LineChart';

const getDayName = (dateStr: string) => {
  const date = new Date(dateStr);
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return days[date.getDay()];
};

type Temp = {
  day: string;
  temperature: number;
  min_temp: number;
  max_temp: number;
  status: string;
  wind_speed: number;
};

const HomePage = () => {
  const [unitSettings, setUnitSettings] = useState<any>(null);
  const [weather, setWeather] = useState<any>(null);
  const [todayWeather, setTodayWeather] = useState<Temp | null>(null);
  const [temps, setTemps] = useState<number[]>([]);
  const [minTemps, setMinTemps] = useState<number[]>([]);
  const [maxTemps, setMaxTemps] = useState<number[]>([]);
  const [windSpeeds, setWindSpeeds] = useState<number[]>([]);
  const [pressure, setPressure] = useState<number[]>([]);
  const [humidity, setHumidity] = useState<number[]>([]);
  const [xLabels, setXLabels] = useState<string[]>([]);
  const [showTemperature, setShowTemperature] = useState<boolean>(true);
  const [showMinTemp, setShowMinTemp] = useState<boolean>(false);
  const [showMaxTemp, setShowMaxTemp] = useState<boolean>(false);
  const [showWindSpeed, setShowWindSpeed] = useState<boolean>(false);
  const [showPressure, setShowPressure] = useState<boolean>(false);
  const [showHumidity, setShowHumidity] = useState<boolean>(false);

  const { cities } = useCities();
  let { cityName } = useParams();
  if (!cityName && cities.length > 0) {
    cityName = cities[0].name;
  }

  // Fetch weather data from the API
  const getWeatherData = async (lat: number, lon: number) => {
    const apiKey = 'e42eddb211a5312c6c9e5c3528e548aa';
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${unitSettings.measurement}`;
    const response = await fetch(apiUrl);
    const weatherData = await response.json();
    return weatherData;
  };
  const settings = localStorage.getItem('measurement');

  useEffect(() => {
    if (settings) {
      setUnitSettings(JSON.parse(settings));
      console.log(unitSettings);
    }
  }, []);

  useEffect(() => {
    const getCityData = async () => {
      const city = cities.find((city) => city.name === cityName);
      if (city) {
        const data = await getWeatherData(city.lat, city.lon);
        console.log(data);
        setWeather(data);

        const dailyData = data.list.filter(
          (item: any, index: number) => index % 8 === 0
        );

        const transformedData = dailyData.map((item: any) => ({
          day: getDayName(item.dt_txt),
          status: item.weather[0].main,
          temperature: item.main.temp.toFixed(1),
          min_temp: item.main.temp_min,
          max_temp: item.main.temp_max,
          wind_speed: item.wind.speed,
          pressure: item.main.pressure,
          humidity: item.main.humidity,
        }));

        console.log(transformedData);

        // Set today's weather
        if (transformedData.length > 0) {
          setTodayWeather(transformedData[0]);
        }
        const temp = transformedData.map((item) => item.temperature);
        setTemps(temp);
        console.log(temp);

        const minTemp = transformedData.map((item) => item.min_temp);
        setMinTemps(minTemp);
        console.log(minTemp);

        const maxTemp = transformedData.map((item) => item.max_temp);
        setMaxTemps(maxTemp);
        console.log(maxTemp);

        const windSpeed = transformedData.map((item) => item.wind_speed);
        setWindSpeeds(windSpeed);
        console.log(windSpeed);

        const pressure = transformedData.map((item) => item.pressure);
        setPressure(pressure);
        console.log(pressure);

        const humidity = transformedData.map((item) => item.humidity);
        setHumidity(humidity);
        console.log(humidity);

        const xLabels = transformedData.map((item) => item.day);
        setXLabels(xLabels);
        console.log(xLabels);
      }
    };
    getCityData();
  }, [cityName, cities, unitSettings]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    switch (name) {
      case 'temperature':
        setShowTemperature(checked);
        break;
      case 'min_temp':
        setShowMinTemp(checked);
        break;
      case 'max_temp':
        setShowMaxTemp(checked);
        break;
      case 'wind_speed':
        setShowWindSpeed(checked);
        break;
      case 'pressure':
        setShowPressure(checked);
        break;
      case 'humidity':
        setShowHumidity(checked);
        break;
      default:
        break;
    }
  };

  const series = [];
  if (showTemperature) {
    series.push({ data: temps, label: 'Temperature', color: '#ff0' });
  }
  if (showMinTemp) {
    series.push({ data: minTemps, label: 'Min Temp', color: '#0f0' });
  }
  if (showMaxTemp) {
    series.push({ data: maxTemps, label: 'Max Temp', color: '#f00' });
  }
  if (showWindSpeed) {
    series.push({ data: windSpeeds, label: 'Wind Speed', color: '#00f' });
  }
  if (showPressure) {
    series.push({ data: pressure, label: 'Pressure', color: '#f0f' });
  }
  if (showHumidity) {
    series.push({ data: humidity, label: 'Humidity', color: '#0ff' });
  }

  return (
    <div className="min-h-screen bg-bg bg-cover bg-no-repeat bg-center">
      <Header title="Weather App" />
      <div className="w-full flex max-w-[95%] mx-auto px-24 h-full max-h-[85%] justify-center items-center mt-8 backdrop-blur-md rounded-3xl">
        {!cityName ? (
          <NoCity />
        ) : (
          <>
            <div className="flex-1 flex flex-col h-full justify-evenly py-24">
              <div className="h-1/6">
                <div className="text-3xl text-center flex h-full justify-center items-end text-white">
                  {cityName}
                </div>
              </div>
              <div className="h-1/6">
                <div className="text-3xl text-center flex h-full justify-center items-end text-white">
                  {todayWeather &&
                    `${todayWeather.temperature} ${unitSettings.unit}`}
                </div>
              </div>
              <div className="h-3/6">
                <div className="text-3xl text-center">
                  <img
                    src={todayWeather && getWeatherIcon(todayWeather.status)}
                    alt="Cloudy"
                    className="w-64 h-64 mx-auto"
                  />
                </div>
              </div>
              <div className="h-1/6">
                <div className="text-3xl text-center text-white">
                  {todayWeather && todayWeather.status}
                </div>
                <div className="text-3xl text-center flex justify-evenly mt-2">
                  {xLabels.map((day, index) => (
                    <div className="m-2 p-2" key={index}>
                      <span className="text-white">{day}</span>
                      <span>
                        <img
                          src={getWeatherIcon(
                            weather.list[index].weather[0].main
                          )}
                          className="w-18 h-18"
                        />
                      </span>
                      <span className="text-white">
                        {temps[index]} {unitSettings.unit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col h-screen justify-evenly py-24 mb-24">
              <LineChart
                series={series}
                xAxis={[{ scaleType: 'band', data: xLabels }]}
              />
              <div className="flex justify-evenly">
                {[
                  { name: 'temperature', label: 'Temperature' },
                  { name: 'min_temp', label: 'Min Temp' },
                  { name: 'max_temp', label: 'Max Temp' },
                  { name: 'wind_speed', label: 'Wind Speed' },
                  { name: 'pressure', label: 'Pressure' },
                  { name: 'humidity', label: 'Humidity' },
                ].map(({ name, label }) => (
                  <div className="mx-2 px-4" key={name}>
                    <input
                      type="checkbox"
                      name={name}
                      checked={eval(`show${label.replace(' ', '')}`)}
                      onChange={handleCheckboxChange}
                    />
                    <span className="pl-2 text-white">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default HomePage;
