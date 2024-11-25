import logopedas from "../assets/images/logopedas.png";

const Support = () => {

  return (
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8 flex justify-center">
      <div className="w-full md:w-9/12 flex flex-col md:flex-row items-center justify-center gap-8">
    
        {/* Text Content */}
        <div className="text-center md:text-left md:w-1/2">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
          ¿Quién crea el contenido personalizado para la problemática de tu niño?
          </h2>
          <p className="text-lg text-gray-600 mb-6 text-justify">
          Es creado por los neuropediatras, logopedas y otros especialistas en salud. Cada recurso terapéutico está diseñado específicamente para abordar las necesidades de tu hijo, asegurando su efectividad en su desarrollo.          </p>
        </div>
         {/* Thumbnail */}
         <div className="flex justify-center w-full md:w-1/2">
         <img
              src={logopedas}
              alt="Video Placeholder"
              className="w-100 h-auto rounded-xl" // Ajuste del tamaño de la imagen
            />
          </div>
      </div>
    </div>
  );
};

export default Support;
