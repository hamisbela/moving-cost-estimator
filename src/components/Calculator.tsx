import React, { useState } from 'react';
import { Calculator as CalculatorIcon, Truck, Home, DollarSign } from 'lucide-react';

const Calculator = () => {
  const [distance, setDistance] = useState('');
  const [homeSize, setHomeSize] = useState('studio');
  const [hasElevator, setHasElevator] = useState(false);
  const [estimatedCost, setEstimatedCost] = useState<number | null>(null);

  const calculateCost = () => {
    const baseCost = {
      studio: 1000,
      '1bedroom': 1500,
      '2bedroom': 2000,
      '3bedroom': 2500,
      '4bedroom': 3000,
    }[homeSize];

    const distanceCost = Number(distance) * 0.7;
    const elevatorDiscount = hasElevator ? 0 : 200;
    
    const total = baseCost + distanceCost + elevatorDiscount;
    setEstimatedCost(total);
  };

  return (
    <div className="bg-white rounded-lg shadow-xl p-6 max-w-2xl mx-auto">
      <div className="flex items-center space-x-2 mb-6">
        <CalculatorIcon className="h-8 w-8 text-blue-600" />
        <h2 className="text-2xl font-bold text-gray-800">Moving Cost Calculator</h2>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            <Truck className="inline h-5 w-5 mr-2" />
            Moving Distance (miles)
          </label>
          <input
            type="number"
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Enter distance in miles"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            <Home className="inline h-5 w-5 mr-2" />
            Home Size
          </label>
          <select
            value={homeSize}
            onChange={(e) => setHomeSize(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="studio">Studio</option>
            <option value="1bedroom">1 Bedroom</option>
            <option value="2bedroom">2 Bedroom</option>
            <option value="3bedroom">3 Bedroom</option>
            <option value="4bedroom">4+ Bedroom</option>
          </select>
        </div>

        <div>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={hasElevator}
              onChange={(e) => setHasElevator(e.target.checked)}
              className="rounded text-blue-600 focus:ring-blue-500 h-4 w-4"
            />
            <span className="text-gray-700">Building has elevator</span>
          </label>
        </div>

        <button
          onClick={calculateCost}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Calculate Cost
        </button>

        {estimatedCost !== null && (
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <div className="flex items-center justify-between">
              <span className="text-gray-700 font-medium">Estimated Cost:</span>
              <span className="text-2xl font-bold text-blue-600 flex items-center">
                <DollarSign className="h-6 w-6 mr-1" />
                {estimatedCost.toLocaleString()}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Calculator;