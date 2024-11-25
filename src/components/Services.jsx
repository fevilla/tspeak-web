import React from "react";
import { FaBook, FaGrinStars, FaPen, FaLightbulb, FaDownload } from "react-icons/fa"; // Icons for the features
import services from "../assets/images/services.jpg";

const Features = () => {
  return (
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center mb-12">
      ¿Qué más te ofrece Tspeak?
        </h2>
      
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Column 1: Image */}
        <div className="w-full md:w-1/2">
          <img
            src={services} // Replace with your image URL
            alt="Kids Learning"
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Column 2: Features */}
        <div className="w-full md:w-1/2">
          <div className="space-y-8">
            {/* Feature 1 */}
            <div className="grid grid-cols-3 gap-4 items-center">
            <div className="flex justify-center items-center col-span-1"> {/* Icono en columna más pequeña */}
                <FaBook className="text-primary text-4xl" />
            </div>
            <div className="col-span-2"> {/* Columna para el texto */}
                <h3 className="text-xl font-semibold text-gray-800">Focused on the whole child</h3>
                <p className="text-gray-600">
                Our program engages kids in core subjects like early literacy, reading, writing, language, and math, while encouraging creativity and building social-emotional skills.
                </p>
            </div>
            </div>

            <div className="grid grid-cols-3 gap-4 items-center">
            <div className="flex justify-center items-center col-span-1"> {/* Icono en columna más pequeña */}
                <FaGrinStars className="text-primary text-4xl" />
            </div>
            <div className="col-span-2"> {/* Columna para el texto */}
                <h3 className="text-xl font-semibold text-gray-800">Focused on the whole child</h3>
                <p className="text-gray-600">
                Our program engages kids in core subjects like early literacy, reading, writing, language, and math, while encouraging creativity and building social-emotional skills.
                </p>
            </div>
            </div>

            <div className="grid grid-cols-3 gap-4 items-center">
            <div className="flex justify-center items-center col-span-1"> {/* Icono en columna más pequeña */}
                <FaPen className="text-primary text-4xl" />
            </div>
            <div className="col-span-2"> {/* Columna para el texto */}
                <h3 className="text-xl font-semibold text-gray-800">Focused on the whole child</h3>
                <p className="text-gray-600">
                Our program engages kids in core subjects like early literacy, reading, writing, language, and math, while encouraging creativity and building social-emotional skills.
                </p>
            </div>
            </div>

            <div className="grid grid-cols-3 gap-4 items-center">
            <div className="flex justify-center items-center col-span-1"> {/* Icono en columna más pequeña */}
                <FaLightbulb className="text-primary text-4xl" />
            </div>
            <div className="col-span-2"> {/* Columna para el texto */}
                <h3 className="text-xl font-semibold text-gray-800">Focused on the whole child</h3>
                <p className="text-gray-600">
                Our program engages kids in core subjects like early literacy, reading, writing, language, and math, while encouraging creativity and building social-emotional skills.
                </p>
            </div>
            </div>

            <div className="grid grid-cols-3 gap-4 items-center">
            <div className="flex justify-center items-center col-span-1"> {/* Icono en columna más pequeña */}
                <FaDownload className="text-primary text-4xl" />
            </div>
            <div className="col-span-2"> {/* Columna para el texto */}
                <h3 className="text-xl font-semibold text-gray-800">Focused on the whole child</h3>
                <p className="text-gray-600">
                Our program engages kids in core subjects like early literacy, reading, writing, language, and math, while encouraging creativity and building social-emotional skills.
                </p>
            </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
