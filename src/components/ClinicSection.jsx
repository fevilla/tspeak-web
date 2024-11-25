import React from "react";
import imageClinic1 from "../assets/images/clinic-1.png";
import imageClinic2 from "../assets/images/clinic-2.png";


const ClinicsSection = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
          Clínicas Asociadas
        </h2>
        <p className="text-gray-600 mb-8">
          Más de 5,000 clínicas confían en nuestros servicios.
        </p>
      </div>

      <div className="container mx-auto flex justify-center space-x-8 flex-wrap">
        <div className="flex justify-center items-center">
          <img
            src={imageClinic1} // Reemplaza con la imagen de la clínica
            alt="Clinica 1"
            className="h-16 md:h-24 object-contain"
          />
        </div>
        <div className="flex justify-center items-center">
          <img
            src={imageClinic2} // Reemplaza con la imagen de la clínica
            alt="Clinica 2"
            className="h-16 md:h-24 object-contain"
          />
        </div>
        <div className="flex justify-center items-center">
          <img
            src={imageClinic1} // Reemplaza con la imagen de la clínica
            alt="Clinica 3"
            className="h-16 md:h-24 object-contain"
          />
        </div>
        <div className="flex justify-center items-center">
          <img
            src={imageClinic2} // Reemplaza con la imagen de la clínica
            alt="Clinica 4"
            className="h-16 md:h-24 object-contain"
          />
        </div>
       <div className="flex justify-center items-center">
          <img
            src={imageClinic1} // Reemplaza con la imagen de la clínica
            alt="Clinica 3"
            className="h-16 md:h-24 object-contain"
          />
        </div>
        <div className="flex justify-center items-center">
          <img
            src={imageClinic2} // Reemplaza con la imagen de la clínica
            alt="Clinica 4"
            className="h-16 md:h-24 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ClinicsSection;
