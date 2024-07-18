import Cloud from '../assets/cloud.png';
import Mist from '../assets/mist.png';
import PartlyMoon from '../assets/partly_moon.png';
import PartlySunny from '../assets/partly_sunny.png';
import Rain from '../assets/rain.png';
import Snow from '../assets/snow.png';
import Sunny from '../assets/sunny.png';
import Thunderstorm from '../assets/thunderstorm.png';

export const getWeatherIcon = (status: string) => {
  switch (status) {
    case 'Clouds':
      return Cloud;
    case 'Clear':
      return Sunny;
    case 'Rain':
      return Rain;
    case 'Drizzle':
      return Rain;
    case 'Thunderstorm':
      return Thunderstorm;
    case 'Snow':
      return Snow;
    case 'Mist':
      return Mist;
    case 'Partly Moon':
      return PartlyMoon;
    case 'Partly Sunny':
      return PartlySunny;
    default:
      return Cloud;
  }
};
