import React, { useState, useEffect } from 'react';
import './App.css';

const vehicles = {
  'Maruti Suzuki Alto': { topSpeed: 140, fuelEfficiency: 22.05, fuelTankCapacity: 35, maxRange: 771.75 },
  'Hyundai i20': { topSpeed: 180, fuelEfficiency: 20.35, fuelTankCapacity: 37, maxRange: 753.05 },
  'Tata Nexon': { topSpeed: 180, fuelEfficiency: 17.57, fuelTankCapacity: 44, maxRange: 772.68 },
  'Honda City': { topSpeed: 180, fuelEfficiency: 17.8, fuelTankCapacity: 40, maxRange: 712.00 },
  'Mahindra Thar': { topSpeed: 155, fuelEfficiency: 15.2, fuelTankCapacity: 57, maxRange: 866.40 },
  'Toyota Innova Crysta': { topSpeed: 179, fuelEfficiency: 11.25, fuelTankCapacity: 55, maxRange: 618.75 },
  'Kia Seltos': { topSpeed: 170, fuelEfficiency: 16.8, fuelTankCapacity: 50, maxRange: 840.00 },
  'Renault Kwid': { topSpeed: 150, fuelEfficiency: 22.3, fuelTankCapacity: 28, maxRange: 624.40 },
  'Ford EcoSport': { topSpeed: 182, fuelEfficiency: 15.9, fuelTankCapacity: 52, maxRange: 826.80 },
  'Tata Tiago': { topSpeed: 150, fuelEfficiency: 23.84, fuelTankCapacity: 35, maxRange: 834.40 },
};

function App() {
  const [distance, setDistance] = useState('');
  const [selectedVehicle, setSelectedVehicle] = useState('');
  const [result, setResult] = useState(null);
  const [comparisonResults, setComparisonResults] = useState([]);

  useEffect(() => {
    if (distance) {
      const comparisons = Object.keys(vehicles).map(vehicle => {
        const res = calculateResults(vehicle, distance);
        return { vehicle, ...res };
      });
      setComparisonResults(comparisons);
    }
  }, [distance]);

  const handleDistanceChange = (e) => {
    setDistance(e.target.value);
  };

  const handleVehicleChange = (e) => {
    setSelectedVehicle(e.target.value);
  };

  const calculateResults = (vehicle, distance) => {
    const vehicleData = vehicles[vehicle];
    const time = distance / vehicleData.topSpeed;
    const fuelConsumption = distance / vehicleData.fuelEfficiency;
    const outOfRange = distance > vehicleData.maxRange;
    return { time, fuelConsumption, outOfRange };
  };

  const handleCalculate = () => {
    if (distance && selectedVehicle) {
      const res = calculateResults(selectedVehicle, distance);
      setResult(res);
    } else {
      alert('Please enter a valid distance and select a vehicle.');
    }
  };

  return (
    <div className="container">
      <h1>Vehicle Transport Converter</h1>
      <div className="input-section">
        <label htmlFor="distance">Enter Distance (KM):</label>
        <input type="number" id="distance" value={distance} onChange={handleDistanceChange} min="1" />
      </div>
      <div className="vehicle-selection">
        <h2>Select Vehicle</h2>
        <div className="vehicles">
          {Object.keys(vehicles).map(vehicle => (
            <label key={vehicle}>
              <input type="radio" name="vehicle" value={vehicle} onChange={handleVehicleChange} />
              {vehicle}
            </label>
          ))}
        </div>
      </div>
      <button onClick={handleCalculate}>Calculate</button>
      {result && (
        <div id="results">
          <h2>Results</h2>
          <p id="selected-vehicle-result">
            Time to travel {distance} km: {result.time.toFixed(2)} hours, Fuel consumption: {result.fuelConsumption.toFixed(2)} liters {result.outOfRange ? '(Out of range)' : ''}
          </p>
          <h3>Comparison with other vehicles:</h3>
          <ul id="comparison-results">
            {comparisonResults.map(({ vehicle, time, fuelConsumption, outOfRange }) => (
              <li key={vehicle}>
                {vehicle}: Time - {time.toFixed(2)} hours, Fuel - {fuelConsumption.toFixed(2)} liters {outOfRange ? '(Out of range)' : ''}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
