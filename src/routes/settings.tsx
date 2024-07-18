import { useState, useEffect, ChangeEvent } from 'react';
import Header from '../components/header';

interface MeasurementOptionProps {
  measurement: { label: string; unit: string };
  selectedMeasurement: { measurement: string; unit: string };
  handleMeasurementChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

interface MeasurementsProps {
  measurements: { label: string; unit: string }[];
  selectedMeasurement: { measurement: string; unit: string };
  handleMeasurementChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Measurements: React.FC<MeasurementsProps> = ({
  measurements,
  selectedMeasurement,
  handleMeasurementChange,
}) => {
  return (
    <div className="flex flex-col">
      {measurements.map((measurement, index) => (
        <MeasurementOption
          key={index}
          measurement={measurement}
          selectedMeasurement={selectedMeasurement}
          handleMeasurementChange={handleMeasurementChange}
        />
      ))}
    </div>
  );
};

const MeasurementOption: React.FC<MeasurementOptionProps> = ({
  measurement,
  selectedMeasurement,
  handleMeasurementChange,
}) => {
  return (
    <label className="flex items-center mb-2">
      <input
        type="radio"
        className="mr-2"
        name="measurement"
        value={measurement.label}
        checked={selectedMeasurement.measurement === measurement.label}
        onChange={handleMeasurementChange}
        data-unit={measurement.unit}
      />
      <div className="text-white text-xl">
        {measurement.label} ({measurement.unit})
      </div>
    </label>
  );
};

const Settings = () => {
  const measurements = [
    { label: 'Metric', unit: '°C' },
    { label: 'Imperial', unit: '°F' },
  ];

  const [selectedMeasurement, setSelectedMeasurement] = useState<{
    measurement: string;
    unit: string;
  }>(() => {
    const storedMeasurement = localStorage.getItem('measurement');
    return storedMeasurement
      ? JSON.parse(storedMeasurement)
      : { measurement: '', unit: '' };
  });

  useEffect(() => {
    localStorage.setItem('measurement', JSON.stringify(selectedMeasurement));
  }, [selectedMeasurement]);

  const handleMeasurementChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newMeasurement = e.target.value;
    const newUnit = e.target.getAttribute('data-unit') || '';
    setSelectedMeasurement({ measurement: newMeasurement, unit: newUnit });
  };

  return (
    <div className="min-h-screen bg-bg bg-cover bg-no-repeat bg-center">
      <Header title="Settings" />

      <div className="flex justify-center mt-20">
        <div className="w-1/2">
          <div className="flex items-center justify-center flex-col">
            <h2 className="text-3xl font-bold mb-4 text-white">Measurements</h2>

            <Measurements
              measurements={measurements}
              selectedMeasurement={selectedMeasurement}
              handleMeasurementChange={handleMeasurementChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
