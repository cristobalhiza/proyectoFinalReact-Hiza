import React from 'react';
import { useParams } from 'react-router-dom';
import useProductsByCategory from '../hooks/UseProductByCategory';

const CategoryPage = () => {
  const { category } = useParams();
  const { products, loading, error } = useProductsByCategory(category);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="container mx-auto py-8 mt-16">
      <h2 className="text-3xl mb-6">{category}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mx-16">
        {products.map(product => (
          <div key={product.id} className="bg-white rounded-lg shadow-2xl border-2 border-custom-red p-4">
            <img src={product.image} alt={product.title} className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-4">
              <h3 className="text-custom-blue font-bold text-xl">{product.title}</h3>
              <p className="text-sm text-gray-500">{product.category}</p>
              <p className="text-custom-yellow font-semibold text-lg">${product.price}</p>
              <div className="mt-4">
                <button className="bg-custom-green text-white py-2 px-4 rounded mr-2">Agregar al Carrito</button>
                <a href={`/products/${product.id}`} className="bg-custom-green text-white py-2 px-4 rounded">Ver Más</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
