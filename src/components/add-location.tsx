import { useEffect, useState } from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from './ui/alert-dialog';
import { Input } from './ui/input';
import { Button } from './ui/button';

import { useCities } from '../hooks/CityContext';

import CitiesList from './citiesList';

import { Divider } from './divider';
import { getCity } from '../functions/getCity';

const AddLocation = () => {
  const [cityInput, setCityInput] = useState('');
  const { cities, clearAll, removeCity, addCity } = useCities();
  const [coords, setCoords] = useState({ lat: 0, lon: 0 });

  const handleAddCity = async () => {
    await addCity(cityInput);
    setCityInput('');
  };

  const getCurrentLocation = async () => {
    if (!navigator.geolocation) {
      console.log('Geolocation is not supported by your browser');
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log(position.coords);
          setCoords({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        () => {
          console.log('Unable to retrieve your location');
        }
      );
    }
  };

  useEffect(() => {
    if (coords.lat !== 0 && coords.lon !== 0) {
      getCity(coords.lat, coords.lon).then((city) => {
        console.log(city);
        addCity(city);
      });
    }
  }, [coords]);

  return (
    <AlertDialog>
      <AlertDialogTrigger className="w-full">
        <Button
          className="w-full text-white hover:text-black"
          variant={'ghost'}
        >
          Add new location
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-primary backdrop-blur-3xl">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-white">
            Find your city
          </AlertDialogTitle>
          <AlertDialogDescription className="text-white/50">
            Please enter your city name
          </AlertDialogDescription>
        </AlertDialogHeader>
        <Input
          placeholder="i.e. Berlin"
          className="text-primary bg-white backdrop-blur-3xl text-md"
          type="text"
          id="city"
          value={cityInput}
          onChange={(e) => setCityInput(e.target.value)}
        />
        <Divider color="white" />

        <CitiesList
          cities={cities}
          clearAll={clearAll}
          removeCity={removeCity}
        />
        <AlertDialogFooter>
          <AlertDialogAction onClick={getCurrentLocation}>
            Get current Location
          </AlertDialogAction>

          <AlertDialogAction onClick={handleAddCity}>
            Add Location
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AddLocation;
