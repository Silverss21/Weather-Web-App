import AddLocation from './add-location';

export const NoCity = () => {
  return (
    <div>
      <div className="text-3xl text-center m-2 p-2 text-white">
        Please add a location to see the weather
      </div>
      <AddLocation />
    </div>
  );
};
export default NoCity;
