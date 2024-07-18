import { Dispatch, SetStateAction } from 'react';

type Setters = {
  setShowTemperature: Dispatch<SetStateAction<boolean>>;
  setShowMinTemp: Dispatch<SetStateAction<boolean>>;
  setShowMaxTemp: Dispatch<SetStateAction<boolean>>;
  setShowWindSpeed: Dispatch<SetStateAction<boolean>>;
  setShowPressure: Dispatch<SetStateAction<boolean>>;
  setShowHumidity: Dispatch<SetStateAction<boolean>>;
};

export const handleCheckboxChange =
  (setters: Setters) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    switch (name) {
      case 'temperature':
        setters.setShowTemperature(true);
        break;
      case 'min_temp':
        setters.setShowMinTemp(true);
        break;
      case 'max_temp':
        setters.setShowMaxTemp(true);
        break;
      case 'wind_speed':
        setters.setShowWindSpeed(true);
        break;
      case 'pressure':
        setters.setShowPressure(true);
        break;
      case 'humidity':
        setters.setShowHumidity(true);
        break;
      default:
        break;
    }
  };
