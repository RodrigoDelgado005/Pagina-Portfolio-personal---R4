import { CodeIcon } from '@heroicons/react/solid'; // Importa el icono CodeIcon de Heroicons
import React from "react"; // Importa React
import { proyectos } from "../datos"; // Importa los datos de los proyectos

export default function Proyectos() {
  return (
    // Sección principal del componente, con un fondo oscuro y texto en color gris claro
    <section id="proyectos" className="text-gray-400 bg-gray-900 body-font min-h-screen">
      <div className="w-full px-5 py-10 mx-auto text-center lg:px-40">
        
        {/* Contenedor para el título y la descripción de la sección */}
        <div className="flex flex-col w-full mb-20">
          
          {/* Icono de código */}
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          
          {/* Título principal de la sección */}
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-green-400">
            Proyectos Realizados
          </h1>
          
          {/* Descripción de la sección */}
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Bienvenido a mi portafolio. Aca encontrarás una selección de mis proyectos más destacados, 
            que demuestran mi experiencia en desarrollo web y mi pasión por crear soluciones innovadoras.
          </p>
        </div>
        
        {/* Contenedor para los proyectos */}
        <div className="flex flex-wrap -m-4">
          {proyectos.map((proyecto) => (
            <div
              key={proyecto.titulo} // Utiliza el título del proyecto como clave única
              className="sm:w-1/2 w-full p-4">
              
              {/* Contenedor del proyecto */}
              <div className="relative border-4 border-gray-800 bg-gray-900 p-8 opacity-100">
                
                {/* Subtítulo del proyecto */}
                <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                  {proyecto.subtitulo}
                </h2>
                
                {/* Título del proyecto */}
                <h1 className="title-font text-lg font-medium text-white mb-3">
                  {proyecto.titulo}
                </h1>
                
                {/* Descripción del proyecto */}
                <p className="leading-relaxed">{proyecto.descripcion}</p>
                
                {/* Enlace para ver más detalles del proyecto */}
                <a
                  href={proyecto.link}
                  className="text-blue-500 hover:underline">
                  Ver más
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
