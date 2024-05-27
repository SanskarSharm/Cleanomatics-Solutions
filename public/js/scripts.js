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
  
  function calculate() {
    const distance = document.getElementById('distance').value;
    const selectedVehicle = document.querySelector('input[name="vehicle"]:checked');
  
    if (!distance || !selectedVehicle) {
      alert('Please enter a valid distance and select a vehicle.');
      return;
    }
  
    const vehicleName = selectedVehicle.value;
    const vehicleData = vehicles[vehicleName];
    const time = distance / vehicleData.topSpeed;
    const fuelConsumption = distance / vehicleData.fuelEfficiency;
    const outOfRange = distance > vehicleData.maxRange;
  
    const resultDiv = document.getElementById('results');
    resultDiv.innerHTML = `
      <h2>Results</h2>
      <p id="selected-vehicle-result">
        Time to travel ${distance} km: ${time.toFixed(2)} hours, Fuel consumption: ${fuelConsumption.toFixed(2)} liters ${outOfRange ? '(Out of range)' : ''}
      </p>
      <h3>Comparison with other vehicles:</h3>
      <ul id="comparison-results">
        ${Object.keys(vehicles).map(vehicle => {
          const vData = vehicles[vehicle];
          const vTime = distance / vData.topSpeed;
          const vFuel = distance / vData.fuelEfficiency;
          const vOutOfRange = distance > vData.maxRange;
          return `<li>${vehicle}: Time - ${vTime.toFixed(2)} hours, Fuel - ${vFuel.toFixed(2)} liters ${vOutOfRange ? '(Out of range)' : ''}</li>`;
        }).join('')}
      </ul>
    `;
  
    resultDiv.style.display = 'block';
  }
  