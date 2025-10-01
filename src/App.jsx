import React, { useState } from 'react';
import { Home, Thermometer, MapPin, Calculator, ShoppingCart, Phone } from 'lucide-react';

const HVACSizingCalculator = () => {
  const [step, setStep] = useState(1);
  const [state, setState] = useState('');
  const [systemType, setSystemType] = useState('');
  const [squareFeet, setSquareFeet] = useState('');
  const [currentSize, setCurrentSize] = useState('');
  const [results, setResults] = useState(null);

  const productUrls = {
    ac: {
      silver: { '1.5': 'https://wholesalehvacdirect.com/product/1-5-ton-13-4-seer2-goodman-r32-air-conditioner-split-system-multi-positional/', '2.0': 'https://wholesalehvacdirect.com/product/goodman-2-ton-13-4-seer2-r32-cooling-only-system-glxs3bn2410-ahve24bp0301/', '2.5': 'https://wholesalehvacdirect.com/product/goodman-2-5-ton-cooling-air-conditioner-air-handler-system-13-8-seer2-r-32-glxs3bn3010-amst30bu1300/', '3.0': 'https://wholesalehvacdirect.com/product/goodman-3-0-ton-cooling-air-conditioner-air-handler-system-13-4-seer2-r-32-glxs3bn3610-amst36cu1300/', '3.5': 'https://wholesalehvacdirect.com/product/goodman-3-5-ton-13-4-seer2-air-conditioner-only-system-replaces-gsxn3n4210-and-gsx130421-glxs3bn4210-glxs3bn4210-amst42cu1300/', '4.0': 'https://wholesalehvacdirect.com/product/4-0-ton-14-3-seer2-goodman-straight-cool-air-conditioner-air-handler-split-system-r-32-glxs4ba4810amst48cu1300/', '5.0': 'https://wholesalehvacdirect.com/product/goodman-5-0-ton-cooling-air-conditioner-air-handler-system-13-8-seer2-r-32-glxs3bn6010-amst60du1300/' },
      gold: { '1.5': 'https://wholesalehvacdirect.com/product/1-5-ton-14-3-seer2-goodman-straight-cool-air-conditioner-air-handler-split-system-r-32-glxs4ba1810amst24bu1300/', '2.0': 'https://wholesalehvacdirect.com/product/2-0-ton-14-3-seer2-goodman-straight-cool-air-conditioner-air-handler-split-system-r-32-glxs4ba2410amst24bu1300/', '2.5': 'https://wholesalehvacdirect.com/product/2-5-ton-14-3-seer2-goodman-straight-cool-air-conditioner-air-handler-split-system-r-32-glxs4ba3010amst30bu1300/', '3.0': 'https://wholesalehvacdirect.com/product/goodman-3-0-ton-cooling-air-conditioner-air-handler-system-14-5-seer2-r-32-glxs4ba3610-amst36cu1300/', '3.5': 'https://wholesalehvacdirect.com/product/3-5-ton-14-3-seer2-goodman-straight-cool-air-conditioner-air-handler-split-system-r-32-glxs4ba4210amst42cu1300/', '4.0': 'https://wholesalehvacdirect.com/product/4-0-ton-14-3-seer2-goodman-straight-cool-air-conditioner-air-handler-split-system-r-32-glxs4ba4810amst48cu1300/', '5.0': 'https://wholesalehvacdirect.com/product/5-0-ton-14-3-seer2-goodman-straight-cool-air-conditioner-air-handler-split-system-r-32-glxs4ba6010amst60du1300/' },
      platinum: { '3.5': 'https://wholesalehvacdirect.com/product/goodman-3-5-ton-13-4-seer2-air-conditioner-only-system-replaces-gsxn3n4210-and-gsx130421-glxs3bn4210-glxs3bn4210-amst42cu1300/' }
    },
    heatpump: {
      silver: { '1.5': 'https://wholesalehvacdirect.com/product/goodman-1-5-ton-cooling-18k-btu-hr-heating-heat-pump-air-handler-system-15-2-seer2-7-5-hspf2-r-32-glzs4ba1810-amst24bu1300/', '2.0': 'https://wholesalehvacdirect.com/product/goodman-2-ton-14-3-seer2-heat-pump-system-ac-and-heat-glzs4ba2410-amst24bu1300-glzs4ba2410-amst24bu1300/', '2.5': 'https://wholesalehvacdirect.com/product/goodman-2-5-ton-14-5-seer2-heat-pump-system-ac-and-heat-glzs4ba3010-amst30bu1300/', '3.0': 'https://wholesalehvacdirect.com/product/goodman-glzs4b-split-heat-pump-14-3-seer2-single-stage-3-ton-with-amst-multi-position-air-handler-nine-speed-ecm-motor-2-5-ton-21-1-8-in-cabinet-txv-expansion-valve-glzs4ba3610-amst36cu1300/', '3.5': 'https://wholesalehvacdirect.com/product/goodman-3-5-ton-cooling-42k-btu-hr-heating-heat-pump-air-handler-system-15-2-seer2-7-8-hspf2-r-32-glzs4ba4210-amst42cu1300/', '4.0': 'https://wholesalehvacdirect.com/product/goodman-4-0-ton-cooling-48k-btu-hr-heating-heat-pump-air-handler-system-15-2-seer2-7-8-hspf2-r-32-glzs4ba4810-amst48cu1300/', '5.0': 'https://wholesalehvacdirect.com/product/goodman-5-ton-14-3-seer2-heat-pump-system-ac-and-heat-r-32-glzs4ba6010-amst60du1300/' },
      gold: { '1.5': 'https://wholesalehvacdirect.com/product/goodman-1-5-ton-cooling-18k-btu-hr-heating-heat-pump-air-handler-system-15-2-seer2-7-5-hspf2-r-32-glzs4ba1810-amst24bu1300/', '2.0': 'https://wholesalehvacdirect.com/product/goodman-2-ton-14-3-seer2-heat-pump-system-ac-and-heat-glzs4ba2410-amst24bu1300-glzs4ba2410-amst24bu1300/', '2.5': 'https://wholesalehvacdirect.com/product/goodman-2-5-ton-14-5-seer2-heat-pump-system-ac-and-heat-glzs4ba3010-amst30bu1300/', '3.0': 'https://wholesalehvacdirect.com/product/goodman-glzs4b-split-heat-pump-14-3-seer2-single-stage-3-ton-with-amst-multi-position-air-handler-nine-speed-ecm-motor-2-5-ton-21-1-8-in-cabinet-txv-expansion-valve-glzs4ba3610-amst36cu1300/', '3.5': 'https://wholesalehvacdirect.com/product/goodman-3-5-ton-cooling-42k-btu-hr-heating-heat-pump-air-handler-system-15-2-seer2-7-8-hspf2-r-32-glzs4ba4210-amst42cu1300-2/', '4.0': 'https://wholesalehvacdirect.com/product/goodman-4-0-ton-cooling-48k-btu-hr-heating-heat-pump-air-handler-system-15-2-seer2-7-8-hspf2-r-32-glzs4ba4810-amst48cu1300-2/', '5.0': 'https://wholesalehvacdirect.com/product/goodman-5-ton-14-3-seer2-heat-pump-system-ac-and-heat-r-32-glzs4ba6010-amst60du1300/' },
      platinum: { '1.5': 'https://wholesalehvacdirect.com/product/goodman-r-32-115v-ahve-ducted-multi-position-air-handler-variable-speed-ecm-motor-2-ton-17-5-in-cabinet-with-eev-expansion-comfortnet-compatible-ahve24bp0300/', '2.5': 'https://wholesalehvacdirect.com/product/goodman-2-5-ton-15-2-seer2-heat-pump-system-glzs5ba3010-condenser-ahve36cp0300-air-handler-glzs5ba3010-ahve36cp0300/', '3.5': 'https://wholesalehvacdirect.com/product/goodman-3-5-ton-15-2-seer2-heat-pump-system-glzs5ba4210-condenser-ahve42cp0300-air-handler-glzs5ba4210-ahve42cp0300/', '4.0': 'https://wholesalehvacdirect.com/product/goodman-4-ton-15-2-seer2-heat-pump-system-glzs5ba4810-condenser-ahve48cp1300-air-handler-glzs5ba4810-ahve48cp1300/', '5.0': 'https://wholesalehvacdirect.com/product/goodman-5-ton-15-2-seer2-heat-pump-system-glzs5ba6010-condenser-ahve60dp1300-air-handler-glzs5ba6010-ahve60dp1300/' }
    }
  };

  const hvacSystems = {
    ac: {
      silver: [
        { tonnage: '1.5', ac: 'GLXS3BN1810', airHandler: 'AHVE24BP0300', seer: '13.4', price: 2719 },
        { tonnage: '2.0', ac: 'GLXS3BN2410', airHandler: 'AHVE24BP0301', seer: '13.4', price: 2919 },
        { tonnage: '2.5', ac: 'GLXS3BN3010', airHandler: 'AHVE36CP0300', seer: '13.4', price: 3219 },
        { tonnage: '3.0', ac: 'GLXS3BN3610', airHandler: 'AHVE36CP0301', seer: '13.4', price: 3419 },
        { tonnage: '3.5', ac: 'GLXS3BN4210', airHandler: 'AHVE42CP0300', seer: '13.4', price: 3719 },
        { tonnage: '4.0', ac: 'GLXS3BN4810', airHandler: 'AHVE48CP1300', seer: '13.4', price: 4019 },
        { tonnage: '5.0', ac: 'GLXS3BN6010', airHandler: 'AHVE60DP1300', seer: '13.4', price: 4519 }
      ],
      gold: [
        { tonnage: '1.5', ac: 'GLXS4BA1810', airHandler: 'AHVE24BP0300', seer: '14.3', price: 2919 },
        { tonnage: '2.0', ac: 'GLXS4BA2410', airHandler: 'AHVE24BP0301', seer: '14.3', price: 3119 },
        { tonnage: '2.5', ac: 'GLXS4BA3010', airHandler: 'AHVE36CP0300', seer: '14.3', price: 3419 },
        { tonnage: '3.0', ac: 'GLXS4BA3610', airHandler: 'AHVE36CP0301', seer: '14.3', price: 3619 },
        { tonnage: '3.5', ac: 'GLXS4BA4210', airHandler: 'AHVE42CP0300', seer: '14.3', price: 3919 },
        { tonnage: '4.0', ac: 'GLXS4BA4810', airHandler: 'AHVE48CP1300', seer: '14.3', price: 4219 },
        { tonnage: '5.0', ac: 'GLXS4BA6010', airHandler: 'AHVE60DP1300', seer: '14.3', price: 4719 }
      ],
      platinum: [
        { tonnage: '1.5', ac: 'GLXS5BA1810', airHandler: 'AHVE24BP0300', seer: '15.2', price: 3219 },
        { tonnage: '2.0', ac: 'GLXS5BA2410', airHandler: 'AHVE24BP0301', seer: '15.2', price: 3457 },
        { tonnage: '2.5', ac: 'GLXS5BA3010', airHandler: 'AHVE36CP0300', seer: '15.2', price: 3719 },
        { tonnage: '3.0', ac: 'GLXS5BA3610', airHandler: 'AHVE36CP0301', seer: '15.2', price: 3919 },
        { tonnage: '3.5', ac: 'GLXS5BA4210', airHandler: 'AHVE42CP0300', seer: '15.2', price: 4219 },
        { tonnage: '4.0', ac: 'GLXS5BA4810', airHandler: 'AHVE48CP1300', seer: '15.2', price: 4519 },
        { tonnage: '5.0', ac: 'GLXS5BA6010', airHandler: 'AHVE60DP1300', seer: '15.2', price: 5019 }
      ]
    },
    heatpump: {
      silver: [
        { tonnage: '1.5', heatpump: 'GLZS4MA1810', airHandler: 'AHVE24BP0300', seer: '14.3', price: 3019 },
        { tonnage: '2.0', heatpump: 'GLZS4MA2410', airHandler: 'AHVE24BP0301', seer: '14.3', price: 3219 },
        { tonnage: '2.5', heatpump: 'GLZS4MA3010', airHandler: 'AHVE36CP0300', seer: '14.3', price: 3519 },
        { tonnage: '3.0', heatpump: 'GLZS4MA3610', airHandler: 'AHVE36CP0301', seer: '14.3', price: 3719 },
        { tonnage: '3.5', heatpump: 'GLZS4MA4210', airHandler: 'AHVE42CP0300', seer: '14.3', price: 4019 },
        { tonnage: '4.0', heatpump: 'GLZS4MA4810', airHandler: 'AHVE48CP1300', seer: '14.3', price: 4319 },
        { tonnage: '5.0', heatpump: 'GLZS4MA6010', airHandler: 'AHVE60DP1300', seer: '14.3', price: 4819 }
      ],
      gold: [
        { tonnage: '1.5', heatpump: 'GLZS4BA1810', airHandler: 'AHVE24BP0300', seer: '15.2', price: 3319 },
        { tonnage: '2.0', heatpump: 'GLZS4BA2410', airHandler: 'AHVE24BP0301', seer: '15.2', price: 3519 },
        { tonnage: '2.5', heatpump: 'GLZS4BA3010', airHandler: 'AHVE36CP0300', seer: '15.2', price: 3819 },
        { tonnage: '3.0', heatpump: 'GLZS4BA3610', airHandler: 'AHVE36CP0301', seer: '15.2', price: 4019 },
        { tonnage: '3.5', heatpump: 'GLZS4BA4210', airHandler: 'AHVE42CP0300', seer: '15.2', price: 4319 },
        { tonnage: '4.0', heatpump: 'GLZS4BA4810', airHandler: 'AHVE48CP1300', seer: '15.2', price: 4619 },
        { tonnage: '5.0', heatpump: 'GLZS4BA6010', airHandler: 'AHVE60DP1300', seer: '15.2', price: 5119 }
      ],
      platinum: [
        { tonnage: '1.5', heatpump: 'GLZS5BA1810', airHandler: 'AHVE24BP0300', seer: '16.0', price: 3619 },
        { tonnage: '2.0', heatpump: 'GLZS5BA2410', airHandler: 'AHVE24BP0301', seer: '16.0', price: 3819 },
        { tonnage: '2.5', heatpump: 'GLZS5BA3010', airHandler: 'AHVE36CP0300', seer: '16.0', price: 4119 },
        { tonnage: '3.0', heatpump: 'GLZS5BA3610', airHandler: 'AHVE36CP0301', seer: '16.0', price: 4319 },
        { tonnage: '3.5', heatpump: 'GLZS5BA4210', airHandler: 'AHVE42CP0300', seer: '16.0', price: 4619 },
        { tonnage: '4.0', heatpump: 'GLZS5BA4810', airHandler: 'AHVE48CP1300', seer: '16.0', price: 4919 },
        { tonnage: '5.0', heatpump: 'GLZS5BA6010', airHandler: 'AHVE60DP1300', seer: '16.0', price: 5419 }
      ]
    }
  };

  const states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

  const calculateTonnage = (sqft) => {
    const btus = sqft * 25;
    const tons = btus / 12000;
    if (tons <= 1.75) return '1.5';
    if (tons <= 2.25) return '2.0';
    if (tons <= 2.75) return '2.5';
    if (tons <= 3.25) return '3.0';
    if (tons <= 3.75) return '3.5';
    if (tons <= 4.5) return '4.0';
    return '5.0';
  };

  const handleCalculate = () => {
    let tonnage = currentSize || calculateTonnage(parseInt(squareFeet));
    const systems = hvacSystems[systemType];
    const silver = systems.silver.find(s => s.tonnage === tonnage);
    const gold = systems.gold.find(s => s.tonnage === tonnage);
    const platinum = systems.platinum.find(s => s.tonnage === tonnage);
    const isCalifornia = state === 'California';
    setResults({ tonnage, silver: isCalifornia && silver.seer === '13.4' ? null : silver, gold, platinum, systemType, state });
    setStep(4);
  };

  const resetCalculator = () => {
    setStep(1);
    setState('');
    setSystemType('');
    setSquareFeet('');
    setCurrentSize('');
    setResults(null);
  };

  const formatPrice = (price) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(price);
  const calculateMonthlyPayment = (price) => Math.round(price / 84);
  const getProductUrl = (tier, tonnage) => productUrls[systemType]?.[tier]?.[tonnage];

  const SystemCard = ({ system, tier, tierName, tierBg }) => {
    const productUrl = getProductUrl(tier, system.tonnage);
    return (
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className={`${tierBg} text-white p-4`}>
          <h3 className="text-2xl font-bold">{tierName}</h3>
          <p className="text-sm">{tier === 'platinum' ? 'Highest Efficiency, Total Comfort' : tier === 'gold' ? 'Higher Energy Efficient Choice' : 'Increased Efficiency, Competitive Price'}</p>
        </div>
        <div className="p-6">
          <div className="mb-4">
            <div className="text-sm text-gray-600 mb-1">SEER2 Rating</div>
            <div className="text-3xl font-bold text-blue-600">{system.seer}</div>
          </div>
          <ul className="space-y-2 mb-6 text-sm">
            <li>{system.seer} SEER2 {tier === 'silver' ? 'Single Stage' : tier === 'gold' ? 'Two Stage' : 'Inverter Variable'} Compressor</li>
            <li>{tier === 'platinum' ? 'Variable Speed Indoor Fan' : 'Multi-Speed Air Handler'}</li>
            <li>10 Year Parts / 1 Year Labor Warranty</li>
          </ul>
          <div className="border-t pt-4">
            <div className="text-sm text-gray-600 mb-1">Monthly Payment</div>
            <div className="text-2xl font-bold text-gray-800">{formatPrice(calculateMonthlyPayment(system.price))}/month</div>
            <div className="text-xs text-gray-500">0%, 84 months</div>
            <div className="text-sm text-gray-600 mt-3">Total Price</div>
            <div className="text-3xl font-bold text-blue-600">{formatPrice(system.price)}</div>
          </div>
          <div className="mt-6 pt-4 border-t">
            <div className="text-xs font-semibold text-gray-600 mb-2">Part Numbers:</div>
            <div className="text-xs space-y-1 text-gray-700">
              <div><span className="font-medium">{systemType === 'ac' ? 'A/C' : 'Heat Pump'}:</span> {system.ac || system.heatpump}</div>
              <div><span className="font-medium">Air Handler:</span> {system.airHandler}</div>
            </div>
          </div>
          <div className="mt-6">
            {productUrl ? (
              <a href={productUrl} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition">
                <ShoppingCart className="w-5 h-5" />
                Buy Now
              </a>
            ) : (
              <div className="w-full flex items-center justify-center gap-2 py-3 bg-blue-600 text-white rounded-lg font-semibold">
                <Phone className="w-5 h-5" />
                Call to Order
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-2">HVAC System Sizing Calculator</h1>
          <p className="text-lg text-blue-700">Find the perfect system for your home</p>
        </div>

        {step < 4 && (
          <div className="bg-white rounded-lg shadow-md p-4 mb-6">
            <div className="flex items-center justify-between max-w-xl mx-auto">
              {[1, 2, 3].map((s) => (
                <React.Fragment key={s}>
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full ${step >= s ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'} font-semibold`}>{s}</div>
                  {s < 3 && <div className={`flex-1 h-1 mx-2 ${step > s ? 'bg-blue-600' : 'bg-gray-300'}`} />}
                </React.Fragment>
              ))}
            </div>
          </div>
        )}

        {step === 1 && (
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
            <div className="flex items-center mb-6">
              <MapPin className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Select Your State</h2>
            </div>
            <select value={state} onChange={(e) => setState(e.target.value)} className="w-full p-4 border-2 border-gray-300 rounded-lg text-lg focus:border-blue-500 focus:outline-none">
              <option value="">Choose your state...</option>
              {states.map((s) => (<option key={s} value={s}>{s}</option>))}
            </select>
            {state === 'California' && (<p className="mt-4 text-sm text-blue-600 bg-blue-50 p-3 rounded">California requires minimum 14.3 SEER2 rating</p>)}
            <button onClick={() => setStep(2)} disabled={!state} className="w-full mt-6 py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition">Continue</button>
          </div>
        )}

        {step === 2 && (
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
            <div className="flex items-center mb-6">
              <Thermometer className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Select System Type</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button onClick={() => setSystemType('ac')} className={`p-6 border-2 rounded-lg text-left transition ${systemType === 'ac' ? 'border-blue-600 bg-blue-50' : 'border-gray-300 hover:border-blue-400'}`}>
                <h3 className="text-xl font-bold mb-2">Air Conditioner</h3>
                <p className="text-gray-600">Cooling only system, requires separate heating</p>
              </button>
              <button onClick={() => setSystemType('heatpump')} className={`p-6 border-2 rounded-lg text-left transition ${systemType === 'heatpump' ? 'border-blue-600 bg-blue-50' : 'border-gray-300 hover:border-blue-400'}`}>
                <h3 className="text-xl font-bold mb-2">Heat Pump</h3>
                <p className="text-gray-600">All-in-one heating and cooling system</p>
              </button>
            </div>
            <div className="flex gap-3 mt-6">
              <button onClick={() => setStep(1)} className="flex-1 py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold text-lg hover:bg-gray-50 transition">Back</button>
              <button onClick={() => setStep(3)} disabled={!systemType} className="flex-1 py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition">Continue</button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
            <div className="flex items-center mb-6">
              <Home className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Home Size</h2>
            </div>
            <div className="mb-6">
              <label className="block text-lg font-semibold mb-3">Know your current system size?</label>
              <select value={currentSize} onChange={(e) => { setCurrentSize(e.target.value); if (e.target.value) setSquareFeet(''); }} className="w-full p-4 border-2 border-gray-300 rounded-lg text-lg focus:border-blue-500 focus:outline-none">
                <option value="">Select tonnage...</option>
                <option value="1.5">1.5 Ton</option>
                <option value="2.0">2.0 Ton</option>
                <option value="2.5">2.5 Ton</option>
                <option value="3.0">3.0 Ton</option>
                <option value="3.5">3.5 Ton</option>
                <option value="4.0">4.0 Ton</option>
                <option value="5.0">5.0 Ton</option>
              </select>
            </div>
            <div className="text-center my-4 text-gray-500 font-semibold">OR</div>
            <div className="mb-6">
              <label className="block text-lg font-semibold mb-3">Enter your home square footage</label>
              <input type="number" value={squareFeet} onChange={(e) => { setSquareFeet(e.target.value); if (e.target.value) setCurrentSize(''); }} placeholder="e.g., 1200" className="w-full p-4 border-2 border-gray-300 rounded-lg text-lg focus:border-blue-500 focus:outline-none" />
              <p className="mt-2 text-sm text-gray-600">We will calculate the recommended system size based on 25 BTUs per square foot</p>
            </div>
            <div className="flex gap-3 mt-6">
              <button onClick={() => setStep(2)} className="flex-1 py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold text-lg hover:bg-gray-50 transition">Back</button>
              <button onClick={handleCalculate} disabled={!currentSize && !squareFeet} className="flex-1 py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition">
                <Calculator className="w-5 h-5 inline mr-2" />
                Calculate
              </button>
            </div>
          </div>
        )}

        {step === 4 && results && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Recommended: {results.tonnage} Ton {results.systemType === 'ac' ? 'Air Conditioner' : 'Heat Pump'}</h2>
              <p className="text-gray-600">Based on your home in {results.state}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {results.silver && <SystemCard system={results.silver} tier="silver" tierName="Silver" tierBg="bg-gray-400" />}
              {results.gold && <SystemCard system={results.gold} tier="gold" tierName="Gold" tierBg="bg-yellow-500" />}
              {results.platinum && <SystemCard system={results.platinum} tier="platinum" tierName="Platinum" tierBg="bg-gradient-to-r from-gray-700 to-gray-500" />}
            </div>

            {results.silver === null && (
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 text-sm">
                <p className="text-yellow-800"><strong>Note:</strong> Silver tier systems are not available in California due to minimum efficiency requirements.</p>
              </div>
            )}

            <div className="bg-white rounded-xl shadow-lg p-6">
              <button onClick={resetCalculator} className="w-full py-4 bg-gray-600 text-white rounded-lg font-semibold text-lg hover:bg-gray-700 transition">Start New Calculation</button>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded">
              <h3 className="font-bold text-blue-900 mb-2">Ready to Purchase?</h3>
              <p className="text-blue-800 mb-3">Click the <strong className="text-green-600">Buy Now</strong> buttons above to purchase systems directly online, or use the <strong>Call to Order</strong> button to contact us with the part numbers.</p>
              <p className="text-sm text-blue-700">Visit <a href="https://wholesalehvacdirect.com" className="underline font-semibold">wholesalehvacdirect.com</a> for more information.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HVACSizingCalculator;