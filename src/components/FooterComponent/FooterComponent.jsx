import React from 'react';

const FooterComponent = () => {
  return (
    <footer className="bg-custom-blue text-white py-6 opacity-95 border border-white z-10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-around items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-heading text-center md:text-left">Court Corner</h2>
            <p className="text-sm">Equipando tu juego desde 2024</p>
          </div>
          <div>
            <p className="text-sm">&copy; 2024 Court Corner. Todos los derechos reservados.</p>
          </div>
          <div className="mb-4 md:mb-0">
          <h2 className='font-heading text-center p-2'>Mapa del sitio</h2>
            <ul className="flex space-x-4">
              <li>
                <a href="/" className="hover:text-custom-red">Inicio</a>
              </li>
              <li>
                <a href="/products" className="hover:text-custom-red">Productos</a>
              </li>
              <li>
                <a href="/contacto" className="hover:text-custom-red">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;