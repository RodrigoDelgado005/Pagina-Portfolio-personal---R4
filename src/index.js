import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import About from './Componentes/inicio';
import Proyectos from './Componentes/Proyectos'
import Skills from './Componentes/Skills';
import Comentarios from './Componentes/Comentarios'
import Contacto from './Componentes/Contacto';
import Footer from './Componentes/Footer';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <About />
    <Proyectos />
    <Skills />
    <Comentarios />
    <Contacto />
    <Footer />
  </React.StrictMode>
);


reportWebVitals();
