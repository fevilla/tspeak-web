import React from 'react';

const Pricing = ({price}) => {
  return (
    <div className="flex justify-center items-center py-10">
      <div className="relative inline-flex items-center">
        {/* Símbolo de Soles */}
        <span className="absolute -left-8 text-xl font-bold text-primary-color">
          S/.
        </span>
        {/* Número principal */}
        <span className="text-6xl font-bold  text-primary-color">
          {price}
        </span>
        {/* Texto mensual */}
        <span className="ml-4 text-lg font-normal text-black flex items-center">
          mensual
        </span>
      </div>
    </div>
  );
};

export default Pricing;
