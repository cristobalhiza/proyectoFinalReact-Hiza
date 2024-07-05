import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div key={product.id} className="bg-white rounded-lg shadow-2xl border-2 border-custom-red p-4">
      <img src={product.image} alt={product.title} className="w-full h-48 object-cover rounded-t-lg" />
      <div className="p-4">
        <h3 className="text-custom-blue font-bold text-xl">{product.title}</h3>
        <p className="text-sm text-gray-500">{product.category.join(', ')}</p>
        <p className="text-custom-yellow font-semibold text-lg">${product.price}</p>
        <div className="mt-4">
          <button className="bg-custom-green text-white py-2 px-4 rounded mr-2">Agregar al Carrito</button>
          <Link to={`/products/${product.id}`} className="bg-custom-green text-white py-2 px-4 rounded">Ver Más</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
