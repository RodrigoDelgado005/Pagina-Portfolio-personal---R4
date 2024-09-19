import React from "react";
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { testimonios } from "../datos";

// Componente Comentarios que muestra testimonios de clientes
export default function Comentarios() {
  return (
    // Sección con ID 'testimonials', fondo gris oscuro y texto gris claro
    <section id="testimonials" className="text-gray-400 bg-gray-900 body-font min-h-screen">
      <div className="w-full px-5 py-10 mx-auto text-center">
        {/* Icono de usuarios al inicio de la sección */}
        <UsersIcon className="w-10 inline-block mb-4" />
        {/* Título de la sección */}
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Testimonios de clientes
        </h1>
        {/* Contenedor flexible para los testimonios */}
        <div className="flex flex-wrap m-4">
          {/* Mapeo de los testimonios para generar una tarjeta por cada uno */}
          {testimonios.map((testimonio, index) => (
            <div key={index} className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                {/* Icono de terminal dentro de cada tarjeta de testimonio */}
                <TerminalIcon className="block w-8 text-gray-500 mb-4" />
                {/* Cita del testimonio */}
                <p className="leading-relaxed mb-6">{testimonio.cita}</p>
                {/* Información del cliente */}
                <div className="inline-flex items-center">
                  <span className="flex-grow flex flex-col pl-4">
                    {/* Nombre del cliente */}
                    <span className="title-font font-medium text-white">
                      {testimonio.nombre}
                    </span>
                    {/* Empresa del cliente */}
                    <span className="text-gray-500 text-sm uppercase">
                      {testimonio.empresa}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}