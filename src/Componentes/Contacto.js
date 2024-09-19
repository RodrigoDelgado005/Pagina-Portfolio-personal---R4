import React from "react";

// Componente Contacto para mostrar un formulario de contacto
export default function Contacto() {
  return (
    <section className="text-gray-400 bg-gray-900 body-font min-h-screen relative">
      <div className="w-full px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap justify-center items-center">
        {/* Contenedor del formulario con fondo semi-transparente, bordes redondeados y sombra */}
        <div className="bg-gray-800 bg-opacity-75 p-10 rounded-lg shadow-md max-w-lg w-full">
          {/* Formulario de contacto */}
          <form
            className="flex flex-col w-full md:py-8 mt-8 md:mt-0">
            {/* Encabezado del formulario */}
            <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
              ¡Contáctame!
            </h2>
            {/* Descripción del formulario */}
            <p className="leading-relaxed mb-5">
              ¿Tenes alguna pregunta o proyecto? No dudes en contactarme. Estoy aca para ayudarte.
            </p>
            {/* Campo para el nombre */}
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-gray-700 rounded border border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            {/* Campo para el correo electrónico */}
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-400">
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-gray-700 rounded border border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            {/* Campo para el mensaje */}
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-gray-400">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-gray-700 rounded border border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-2 px-4 resize-none leading-6 transition-colors duration-200 ease-in-out"
              />
            </div>
            {/* Botón de envío del formulario */}
            <button
              type="submit"
              className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}