import { Link } from 'react-router-dom';
import { City } from '../interfaces/City';
import { Button } from './ui/button';
import { TrashIcon } from '@radix-ui/react-icons';
import { Label } from '@radix-ui/react-label';

interface CitiesListProps {
  cities: City[];
  clearAll: () => void;
  removeCity: (name: string) => void;
}

const CitiesList: React.FC<CitiesListProps> = ({
  cities,
  clearAll,
  removeCity,
}) => {
  return (
    <>
      {cities.length > 0 && (
        <div className="flex justify-between">
          <Label className="text-white">Your cities :</Label>
          <Button
            variant="destructive"
            className="w-1/3"
            onClick={() => clearAll()}
          >
            Clear All
          </Button>
        </div>
      )}

      {cities.map((city: City) => (
        <div
          className="flex justify-between w-full text-white rounded-xl "
          key={city.name}
        >
          <Link to={`/${city.name}`} className="w-full">
            <Button className="w-full" variant={'ghost'}>
              {city.name}
            </Button>
          </Link>
          <Button
            className="bg-transparent hover:bg-white"
            onClick={() => removeCity(city.name)}
          >
            <TrashIcon className="h-6 w-6 text-red-500" />
          </Button>
        </div>
      ))}
    </>
  );
};

export default CitiesList;
