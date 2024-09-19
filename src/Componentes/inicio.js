import React from "react";

export default function About() {
  return (
    // Sección principal del componente, ocupa toda la pantalla y centra el contenido
    <section id="inicio" className="w-full min-h-screen flex items-center justify-center bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center">
        
        {/* Contenedor para el texto y los botones */}
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          
          {/* Título principal */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
            Rodrigo Delgado
            <br className="hidden lg:inline-block" />
            {/* Subtítulo */}
            <span className="text-xl sm:text-2xl md:text-3xl font-light text-gray-700 mt-2 block">
              Construyendo aplicaciones web innovadoras.
            </span>
          </h1>

          {/* Descripción del perfil */}
          <p className="mb-8 leading-relaxed text-gray-700 text-base sm:text-lg">
            Soy Rodrigo Delgado, y tengo una pasión por crear soluciones web únicas que hacen la diferencia. Explora mis proyectos y descubre cómo podemos trabajar juntos.
          </p>

          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row justify-center">
            {/* Botón para contactar */}
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg mb-4 sm:mb-0">
              Trabaja conmigo
            </a>

            {/* Botón para ver proyectos */}
            <a
              href="#projects"
              className="sm:ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">
              Mira mis trabajos anteriores
            </a>
          </div>
        </div>

        {/* Contenedor para la imagen */}
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full">
          <img
            className="object-cover object-center rounded shadow-lg mx-auto"
            alt="hero"
            src="https://static.vecteezy.com/system/resources/previews/004/274/186/non_2x/person-icon-user-interface-icon-silhouette-of-man-simple-symbol-a-glyph-symbol-in-your-web-site-design-logo-app-ui-webinar-video-chat-ect-vector.jpg"
          />
        </div>
      </div>
    </section>
  );
}
