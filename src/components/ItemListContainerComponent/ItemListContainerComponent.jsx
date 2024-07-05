import React from 'react';
import 'tailwindcss/tailwind.css';
import Meta from '../../utils/Meta';
import { Link } from 'react-router-dom';
import useCollectionItems from '../../hooks/useCollectionItems';

const ItemListContainerComponent = () => {

  const { items, loading, error } = useCollectionItems('products');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <Meta 
        title="Shop Tennis and Padel Gear - Rackets, Balls, Apparel & More | Court Corner" 
        description="Discover the best selection of tennis and padel gear at Court Corner. Shop rackets, balls, apparel, and accessories from top brands. Find everything you need to enhance your game." 
      />
      <div className="container mx-auto py-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mx-16">
          {items.map(product => (
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
          ))}
        </div>
      </div>
    </>
  );
};

export default ItemListContainerComponent;
