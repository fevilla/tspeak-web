import React from "react";
import feature1 from "../assets/images/feature-1.png";
import feature2 from "../assets/images/feature-2.png";
import feature3 from "../assets/images/feature-3.jpg";
import feature4 from "../assets/images/feature-4.jpg";
import feature5 from "../assets/images/feature-5.png";
import feature6 from "../assets/images/feature-6.jpg";

const WhatsNew = () => {
  return (
    <div className="container mx-auto mt-5 py-16 px-4 sm:px-6 lg:px-8 w-full md:w-8/12">
      {/* Título de la sección */}
      <h2 className="text-4xl font-bold text-center mb-12">
        ¿Por qué Tspeak?
      </h2>

      {/* Grid de características */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12"> {/* Mayor gap en dispositivos grandes */}
        
        {/* Característica 1 */}
        <div>
          <img
            src={feature1}
            alt="Acceso a contenido terapéutico"
            className="w-full h-48 object-cover"
          />
          <div className="p-4 text-center">
            <h3 className="text-xl font-bold text-gray-800">
              Integral
            </h3>
            <p className="mt-2 text-gray-600">
              Accede a contenido terapéutico interactivo para el desarrollo cognitivo, emocional y conductual de los niños.
            </p>
          </div>
        </div>

        {/* Característica 2 */}
        <div>
          <img
            src={feature2}
            alt="Apto para niños con trastornos"
            className="w-full h-48 object-cover"
          />
          <div className="p-4 text-center">
            <h3 className="text-xl font-semibold text-gray-800">
              Adaptativo
            </h3>
            <p className="mt-2 text-gray-600">
            Apto para niños con trastornos de neurodesarrollo y dificultades en lenguaje, habilidades emocionales, conducta o aprendizaje.
            </p>
          </div>
        </div>

        {/* Característica 3 */}
        <div>
          <img
            src={feature3}
            alt="Desarrollo cognitivo y emocional"
            className="w-full h-48 object-cover"
          />
          <div className="p-4 text-center">
            <h3 className="text-xl font-semibold text-gray-800">
              Accesible
            </h3>
            <p className="mt-2 text-gray-600">
            Desde un dispositivo móvil, tu niño puede aprender en cualquier momento y lugar, estés donde estés.
            </p>
          </div>
        </div>

        {/* Característica 4 */}
        <div>
          <img
            src={feature4}
            alt="Seguimiento del progreso"
            className="w-full h-48 object-cover"
          />
          <div className="p-4 text-center">
            <h3 className="text-xl font-semibold text-gray-800">
             Retroalimentación constante
            </h3>
            <p className="mt-2 text-gray-600">
              Los padres pueden monitorear el progreso del niño mediante reportes detallados y ajustes personalizados por los profesionales de salud.
            </p>
          </div>
        </div>

        {/* Característica 5 */}
        <div>
          <img
            src={feature5}
            alt="Orientación para padres"
            className="w-full h-48 object-cover"
          />
          <div className="p-4 text-center">
            <h3 className="text-xl font-semibold text-gray-800">
              Asesoramiento
            </h3>
            <p className="mt-2 text-gray-600">
             Ofrecemos orientación y recursos para que los padres comprendan y fomenten el desarrollo de sus hijos.
            </p>
          </div>
        </div>

        {/* Característica 6 */}
        <div>
          <img
            src={feature6}
            alt="Costo económico"
            className="w-full h-48 object-cover"
          />
          <div className="p-4 text-center">
            <h3 className="text-xl font-semibold text-gray-800">
              Económica
            </h3>
            <p className="mt-2 text-gray-600">
            Una solución económica y accesible para todas las familias. Invierte en el presente de tu hijo para un futuro mejor.
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default WhatsNew;
