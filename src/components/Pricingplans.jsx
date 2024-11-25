import React, { useState } from "react";
import Pricing from "../components/Pricing";

const PricingPlans = () => {
  const [selectedAreas, setSelectedAreas] = useState({
    language: true,
    emotional: false,
    cognitive: false,
  });

  const handleToggleArea = (area) => {
    setSelectedAreas((prevState) => ({
      ...prevState,
      [area]: !prevState[area],
    }));
  };

  const getTotalPrice = () => {
    let total = 0;
    Object.values(selectedAreas).forEach((isSelected) => {
      if (isSelected) {
        total += 20;
      }
    });
    return total;
  };

  return (
    <div className="container mx-auto text-center py-16">
        <h2 className="text-4xl font-bold text-center mb-12">
          El plan ideal para ti
        </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:w-9/12 mx-auto">
        {/* Plan Básico */}
        <div className="bg-white shadow-xl rounded-xl p-8 flex flex-col items-center justify-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Plan Básico - Elige tus áreas</h3>
          <Pricing price={getTotalPrice()} />
          <ul className="space-y-4 mb-6">
            {['language', 'emotional', 'cognitive'].map((area) => (
              <li key={area} className="flex items-center text-lg">
                <input
                  type="checkbox"
                  checked={selectedAreas[area]}
                  onChange={() => handleToggleArea(area)}
                  className={`form-checkbox h-6 w-6 ${selectedAreas[area] ? "text-primary" : "text-gray-400"}`}
                />
                <span className="ml-2">{area === 'language' ? 'Lenguaje' : area === 'emotional' ? 'Conductual / Emocional' : 'Cognitiva'}</span>
              </li>
            ))}
          </ul>
          <button className="bg-primary text-white px-10 py-4 rounded-full text-lg w-full hover:opacity-80 transition-all duration-300">
          Comprar
          </button>
        </div>

        {/* Plan Premium */}
        <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center justify-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Plan Premium</h3>
          <Pricing price="50" />
          <ul className="space-y-4 mb-6">
            <li className="flex items-center text-lg">
              <span className="text-green-600 mr-2">✓</span>
              <span>Lenguaje</span>
            </li>
            <li className="flex items-center text-lg">
              <span className="text-green-600 mr-2">✓</span>
              <span>Conductual / Emocional</span>
            </li>
            <li className="flex items-center text-lg">
              <span className="text-green-600 mr-2">✓</span>
              <span>Cognitiva</span>
            </li>
          </ul>
          <button className="bg-primary text-white px-10 py-4 rounded-full text-lg w-full hover:opacity-80 transition-all duration-300">
          Comprar
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
