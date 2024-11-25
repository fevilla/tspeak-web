import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

import Logo from "../components/Logo";
const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 ">
      <div className="container mx-auto px-4 md:w-9/12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-4">
              <Logo></Logo>
            </div>
            {/* Botones de descarga */}
            <div className="mt-6 flex space-x-4">
            <a className="bg-primary text-white px-6 py-2 rounded-full text-lg  hover:opacity-80 transition-all duration-300">
            Descargar
            </a>
            </div>
          </div>

          {/* Columna 2: Resources */}
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-black">Parent's Academy</a></li>
              <li><a href="#" className="hover:text-black">Assessment</a></li>
              <li><a href="#" className="hover:text-black">Playtesting</a></li>
            </ul>
          </div>

          {/* Columna 3: Community */}
          <div>
            <h3 className="text-lg font-bold mb-4">Community</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-black">SLP Network</a></li>
              <li><a href="#" className="hover:text-black">Ambassadors</a></li>
              <li><a href="#" className="hover:text-black">Testimonials</a></li>
              <li><a href="#" className="hover:text-black">SLP Reviews</a></li>
            </ul>
          </div>

          {/* Columna 4: Support */}
          <div>
            <h3 className="text-lg font-bold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-black">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-black">FAQ</a></li>
              <li><a href="#" className="hover:text-black">Contact Us</a></li>
            </ul>
          </div>

        </div>

        {/* Parte inferior */}
        <div className="mt-8 border-t flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
        
            <p className="mt-4 text-gray-600">
            Copyright © allforGod 2024. Todos los derechos reservados.          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-blue-600 hover:text-blue-800 text-3xl" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-pink-600 hover:text-pink-800 text-3xl" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="text-red-600 hover:text-red-800 text-3xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
