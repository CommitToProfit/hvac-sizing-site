import React, { useState } from 'react';
import { Home, Thermometer, Wind, Calculator } from 'lucide-react';

const HVACSizingCalculator = () => {
  const [squareFootage, setSquareFootage] = useState('');
  const [climateZone, setClimateZone] = useState('');
  const [insulation, setInsulation] = useState('');
  const [result, setResult] = useState(null);

  // CUSTOMIZE THIS SECTION with your own recommendations
  const recommendations = {
    // Climate zones: hot (South), moderate (Central), cold (North)
    hot: {
      poor: {
        '0-1000': { cooling: '2.0 Tons (24,000 BTU)', heating: '40,000 BTU', model: 'Model: AC-2024-H' },
        '1001-1500': { cooling: '2.5 Tons (30,000 BTU)', heating: '60,000 BTU', model: 'Model: AC-3060-H' },
        '1501-2000': { cooling: '3.0 Tons (36,000 BTU)', heating: '80,000 BTU', model: 'Model: AC-3680-H' },
        '2001-2500': { cooling: '3.5 Tons (42,000 BTU)', heating: '100,000 BTU', model: 'Model: AC-42100-H' },
        '2501-3000': { cooling: '4.0 Tons (48,000 BTU)', heating: '120,000 BTU', model: 'Model: AC-48120-H' },
        '3001+': { cooling: '5.0 Tons (60,000 BTU)', heating: '140,000 BTU', model: 'Model: AC-60140-H' }
      },
      average: {
        '0-1000': { cooling: '1.5 Tons (18,000 BTU)', heating: '40,000 BTU', model: 'Model: AC-1840-H' },
        '1001-1500': { cooling: '2.0 Tons (24,000 BTU)', heating: '50,000 BTU', model: 'Model: AC-2450-H' },
        '1501-2000': { cooling: '2.5 Tons (30,000 BTU)', heating: '70,000 BTU', model: 'Model: AC-3070-H' },
        '2001-2500': { cooling: '3.0 Tons (36,000 BTU)', heating: '90,000 BTU', model: 'Model: AC-3690-H' },
        '2501-3000': { cooling: '3.5 Tons (42,000 BTU)', heating: '110,000 BTU', model: 'Model: AC-42110-H' },
        '3001+': { cooling: '4.5 Tons (54,000 BTU)', heating: '130,000 BTU', model: 'Model: AC-54130-H' }
      },
      good: {
        '0-1000': { cooling: '1.5 Tons (18,000 BTU)', heating: '30,000 BTU', model: 'Model: AC-1830-H' },
        '1001-1500': { cooling: '2.0 Tons (24,000 BTU)', heating: '40,000 BTU', model: 'Model: AC-2440-H' },
        '1501-2000': { cooling: '2.5 Tons (30,000 BTU)', heating: '60,000 BTU', model: 'Model: AC-3060-H' },
        '2001-2500': { cooling: '3.0 Tons (36,000 BTU)', heating: '80,000 BTU', model: 'Model: AC-3680-H' },
        '2501-3000': { cooling: '3.5 Tons (42,000 BTU)', heating: '100,000 BTU', model: 'Model: AC-42100-H' },
        '3001+': { cooling: '4.0 Tons (48,000 BTU)', heating: '120,000 BTU', model: 'Model: AC-48120-H' }
      }
    },
    moderate: {
      poor: {
        '0-1000': { cooling: '2.0 Tons (24,000 BTU)', heating: '50,000 BTU', model: 'Model: AC-2450-M' },
        '1001-1500': { cooling: '2.5 Tons (30,000 BTU)', heating: '70,000 BTU', model: 'Model: AC-3070-M' },
        '1501-2000': { cooling: '3.0 Tons (36,000 BTU)', heating: '90,000 BTU', model: 'Model: AC-3690-M' },
        '2001-2500': { cooling: '3.5 Tons (42,000 BTU)', heating: '110,000 BTU', model: 'Model: AC-42110-M' },
        '2501-3000': { cooling: '4.0 Tons (48,000 BTU)', heating: '130,000 BTU', model: 'Model: AC-48130-M' },
        '3001+': { cooling: '5.0 Tons (60,000 BTU)', heating: '150,000 BTU', model: 'Model: AC-60150-M' }
      },
      average: {
        '0-1000': { cooling: '1.5 Tons (18,000 BTU)', heating: '40,000 BTU', model: 'Model: AC-1840-M' },
        '1001-1500': { cooling: '2.0 Tons (24,000 BTU)', heating: '60,000 BTU', model: 'Model: AC-2460-M' },
        '1501-2000': { cooling: '2.5 Tons (30,000 BTU)', heating: '80,000 BTU', model: 'Model: AC-3080-M' },
        '2001-2500': { cooling: '3.0 Tons (36,000 BTU)', heating: '100,000 BTU', model: 'Model: AC-36100-M' },
        '2501-3000': { cooling: '3.5 Tons (42,000 BTU)', heating: '120,000 BTU', model: 'Model: AC-42120-M' },
        '3001+': { cooling: '4.5 Tons (54,000 BTU)', heating: '140,000 BTU', model: 'Model: AC-54140-M' }
      },
      good: {
        '0-1000': { cooling: '1.5 Tons (18,000 BTU)', heating: '35,000 BTU', model: 'Model: AC-1835-M' },
        '1001-1500': { cooling: '2.0 Tons (24,000 BTU)', heating: '50,000 BTU', model: 'Model: AC-2450-M' },
        '1501-2000': { cooling: '2.5 Tons (30,000 BTU)', heating: '70,000 BTU', model: 'Model: AC-3070-M' },
        '2001-2500': { cooling: '3.0 Tons (36,000 BTU)', heating: '90,000 BTU', model: 'Model: AC-3690-M' },
        '2501-3000': { cooling: '3.5 Tons (42,000 BTU)', heating: '110,000 BTU', model: 'Model: AC-42110-M' },
        '3001+': { cooling: '4.0 Tons (48,000 BTU)', heating: '130,000 BTU', model: 'Model: AC-48130-M' }
      }
    },
    cold: {
      poor: {
        '0-1000': { cooling: '1.5 Tons (18,000 BTU)', heating: '60,000 BTU', model: 'Model: AC-1860-C' },
        '1001-1500': { cooling: '2.0 Tons (24,000 BTU)', heating: '80,000 BTU', model: 'Model: AC-2480-C' },
        '1501-2000': { cooling: '2.5 Tons (30,000 BTU)', heating: '100,000 BTU', model: 'Model: AC-30100-C' },
        '2001-2500': { cooling: '3.0 Tons (36,000 BTU)', heating: '120,000 BTU', model: 'Model: AC-36120-C' },
        '2501-3000': { cooling: '3.5 Tons (42,000 BTU)', heating: '140,000 BTU', model: 'Model: AC-42140-C' },
        '3001+': { cooling: '4.5 Tons (54,000 BTU)', heating: '160,000 BTU', model: 'Model: AC-54160-C' }
      },
      average: {
        '0-1000': { cooling: '1.5 Tons (18,000 BTU)', heating: '50,000 BTU', model: 'Model: AC-1850-C' },
        '1001-1500': { cooling: '2.0 Tons (24,000 BTU)', heating: '70,000 BTU', model: 'Model: AC-2470-C' },
        '1501-2000': { cooling: '2.5 Tons (30,000 BTU)', heating: '90,000 BTU', model: 'Model: AC-3090-C' },
        '2001-2500': { cooling: '3.0 Tons (36,000 BTU)', heating: '110,000 BTU', model: 'Model: AC-36110-C' },
        '2501-3000': { cooling: '3.5 Tons (42,000 BTU)', heating: '130,000 BTU', model: 'Model: AC-42130-C' },
        '3001+': { cooling: '4.0 Tons (48,000 BTU)', heating: '150,000 BTU', model: 'Model: AC-48150-C' }
      },
      good: {
        '0-1000': { cooling: '1.5 Tons (18,000 BTU)', heating: '40,000 BTU', model: 'Model: AC-1840-C' },
        '1001-1500': { cooling: '2.0 Tons (24,000 BTU)', heating: '60,000 BTU', model: 'Model: AC-2460-C' },
        '1501-2000': { cooling: '2.5 Tons (30,000 BTU)', heating: '80,000 BTU', model: 'Model: AC-3080-C' },
        '2001-2500': { cooling: '3.0 Tons (36,000 BTU)', heating: '100,000 BTU', model: 'Model: AC-36100-C' },
        '2501-3000': { cooling: '3.5 Tons (42,000 BTU)', heating: '120,000 BTU', model: 'Model: AC-42120-C' },
        '3001+': { cooling: '4.0 Tons (48,000 BTU)', heating: '140,000 BTU', model: 'Model: AC-48140-C' }
      }
    }
  };

  const getSizeRange = (sqft) => {
    const size = parseInt(sqft);
    if (size <= 1000) return '0-1000';
    if (size <= 1500) return '1001-1500';
    if (size <= 2000) return '1501-2000';
    if (size <= 2500) return '2001-2500';
    if (size <= 3000) return '2501-3000';
    return '3001+';
  };

  const calculateSize = () => {
    if (!squareFootage || !climateZone || !insulation) {
      alert('Please fill in all fields');
      return;
    }

    const sizeRange = getSizeRange(squareFootage);
    const recommendation = recommendations[climateZone][insulation][sizeRange];
    setResult(recommendation);
  };

  const resetForm = () => {
    setSquareFootage('');
    setClimateZone('');
    setInsulation('');
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <Wind className="w-10 h-10 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-800">HVAC System Sizing Calculator</h1>
          </div>
          
          <p className="text-gray-600 mb-8">
            Enter your home details below to get a professional HVAC system recommendation tailored to your needs.
          </p>

          <div className="space-y-6">
            <div>
              <label className="flex items-center gap-2 text-lg font-semibold text-gray-700 mb-2">
                <Home className="w-5 h-5" />
                Square Footage
              </label>
              <input
                type="number"
                value={squareFootage}
                onChange={(e) => setSquareFootage(e.target.value)}
                placeholder="Enter square footage (e.g., 2000)"
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-lg"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-lg font-semibold text-gray-700 mb-2">
                <Thermometer className="w-5 h-5" />
                Climate Zone
              </label>
              <select
                value={climateZone}
                onChange={(e) => setClimateZone(e.target.value)}
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-lg"
              >
                <option value="">Select climate zone</option>
                <option value="hot">Hot Climate (South - requires more cooling)</option>
                <option value="moderate">Moderate Climate (Central - balanced needs)</option>
                <option value="cold">Cold Climate (North - requires more heating)</option>
              </select>
            </div>

            <div>
              <label className="flex items-center gap-2 text-lg font-semibold text-gray-700 mb-2">
                <Home className="w-5 h-5" />
                Insulation Quality
              </label>
              <select
                value={insulation}
                onChange={(e) => setInsulation(e.target.value)}
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-lg"
              >
                <option value="">Select insulation quality</option>
                <option value="poor">Poor (Older home, single-pane windows)</option>
                <option value="average">Average (Standard insulation)</option>
                <option value="good">Good (Well-insulated, energy-efficient)</option>
              </select>
            </div>

            <div className="flex gap-4">
              <button
                onClick={calculateSize}
                className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold text-lg hover:bg-blue-700 transition flex items-center justify-center gap-2"
              >
                <Calculator className="w-5 h-5" />
                Calculate System Size
              </button>
              <button
                onClick={resetForm}
                className="bg-gray-300 text-gray-700 py-3 px-6 rounded-lg font-semibold text-lg hover:bg-gray-400 transition"
              >
                Reset
              </button>
            </div>
          </div>

          {result && (
            <div className="mt-8 bg-gradient-to-r from-blue-50 to-green-50 border-2 border-blue-300 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Wind className="w-6 h-6 text-blue-600" />
                Recommended System
              </h2>
              
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-4 shadow">
                  <p className="text-sm text-gray-600 font-semibold mb-1">COOLING CAPACITY</p>
                  <p className="text-xl font-bold text-blue-600">{result.cooling}</p>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow">
                  <p className="text-sm text-gray-600 font-semibold mb-1">HEATING CAPACITY</p>
                  <p className="text-xl font-bold text-orange-600">{result.heating}</p>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow">
                  <p className="text-sm text-gray-600 font-semibold mb-1">RECOMMENDED MODEL</p>
                  <p className="text-xl font-bold text-green-600">{result.model}</p>
                </div>
              </div>

              <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> This is a general recommendation. For the most accurate sizing, we recommend 
                  a professional Manual J load calculation that considers all factors specific to your home.
                </p>
              </div>
            </div>
          )}

          <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-bold text-lg text-gray-800 mb-3">Important Sizing Information</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>An oversized system will cycle on and off too frequently, reducing efficiency and comfort</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>An undersized system will run constantly and struggle to maintain desired temperatures</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Proper sizing ensures optimal energy efficiency and equipment lifespan</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Consider factors like ceiling height, number of windows, and sun exposure for best results</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HVACSizingCalculator;
