// src/components/ProductCard/ProductCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div key={product.id} className="bg-white rounded-lg shadow-2xl border-2 border-custom-red p-4 text-black">
      <div className="w-full h-48 flex items-center justify-center overflow-hidden rounded-t-lg">
        <img src={product.image} alt={product.title} className="max-h-full max-w-full object-contain" />
      </div>
      <div className="p-4">
        <h3 className="text-custom-blue font-bold text-xl">{product.title}</h3>
        <p className="text-sm text-gray-500">{product.category.join(', ')}</p>
        <div className='w-full flex justify-center'>
          <p className="text-custom-yellow font-semibold text-lg text-center m-2 bg-custom-light-dark border-solid rounded-full w-fit px-4">${product.price}</p>
        </div>
        <div className="mt-4">
          <button className="bg-custom-green text-white py-2 px-4 rounded mr-2 shadow-md" onClick={() => addToCart(product)}>Agregar al Carrito</button>
          <Link to={`/products/${product.id}`} className="bg-custom-green text-white py-2 px-4 rounded shadow-md">Ver Más</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
