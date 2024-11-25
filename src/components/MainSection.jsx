import imageBg from "../assets/images/main.png";

const MainSection = () => {
  return (
    <div className="relative bg-cover bg-center" style={{ backgroundImage: "url('/path-to-your-background-image.jpg')" }}>
      <div className="container mx-auto h-full flex flex-col justify-center items-center mt-44">
        <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-9/12 gap-8">

          {/* Columna izquierda */}
          <div className="md:w-1/2 text-center md:text-left space-y-4">
          <h1 className="text-4xl sm:text-5xl text-gray-800 leading-tight pb-5">
            <span className="text-primary font-rammetto text-5xl ">Tspeak</span> <span className="font-bold">App terapéutica y educativa para niños de 3 a 9 años</span> 
          </h1>

            <p className="text-base sm:text-lg text-gray-600 pb-5">
            Una herramienta indispensable que rompe barreras, transforma vidas y da a cada niño la oportunidad de mejorar y brillar en un mundo que a menudo los deja atrás.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a className="bg-primary text-white px-10 py-4 rounded-full text-lg  hover:opacity-80 transition-all duration-300">
            Descargar
            </a>
            </div>
          </div>

          {/* Columna derecha */}
          <div className="md:w-1/2 flex justify-end items-center"> {/* Alineado a la derecha */}
            <img
              src={imageBg}
              alt="Video Placeholder"
              className="w-100 h-auto" // Ajuste del tamaño de la imagen
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default MainSection;
