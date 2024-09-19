import React from 'react';

// Componente Footer que representa el pie de página de la aplicación
const Footer = () => {
  return (
    // Elemento <footer> con estilo de fondo oscuro y texto blanco
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Sección con el título y el mensaje de derechos reservados */}
        <div className="text-center md:text-left">
          {/* Título del pie de página */}
          <h1 className="text-xl font-bold">Mi Portafolio</h1>
          {/* Mensaje de derechos reservados con el año actual dinámicamente */}
          <p className="mt-2">&copy; {new Date().getFullYear()} Mi Portafolio. All rights reserved.</p>
        </div>
        {/* Lista de enlaces de navegación */}
        <ul className="flex flex-col md:flex-row mt-4 md:mt-0">
          {/* Enlace a la sección de inicio */}
          <li className="md:ml-6">
            <a href="#inicio" className="hover:text-gray-400">Inicio</a>
          </li>
          {/* Enlace a la sección de proyectos */}
          <li className="md:ml-6">
            <a href="#proyectos" className="hover:text-gray-400">Proyectos</a>
          </li>
          {/* Enlace a la sección de habilidades */}
          <li className="md:ml-6">
            <a href="#skills" className="hover:text-gray-400">Skills</a>
          </li>
          {/* Enlace a la sección de contacto */}
          <li className="md:ml-6">
            <a href="#contacto" className="hover:text-gray-400">Contacto</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;