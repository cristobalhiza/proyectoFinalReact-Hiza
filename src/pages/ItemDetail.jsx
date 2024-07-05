import React from 'react';
import { useParams } from 'react-router-dom';
import useProductDetails from '../hooks/useProductDetails';

const ItemDetail = () => {
  const { itemId } = useParams();
  const { product, loading, error } = useProductDetails(itemId);

  if (loading) {
    return <div className="container mx-auto py-8 mt-16">Loading...</div>;
  }

  if (error) {
    return <div className="container mx-auto py-8 mt-16">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto py-8 mt-16 p-16 w-4/5">
      <div className="bg-white rounded-lg shadow-2xl border-2 border-custom-red p-4 mx-16">
        <img src={product.image} alt={product.title} className="w-full h-96 object-cover rounded-t-lg" />
        <div className="p-4">
          <h1 className="text-custom-blue font-bold text-3xl mb-4">{product.title}</h1>
          <p className="text-sm text-gray-500 mb-2">Categoría: {product.category.join(', ')}.</p>
          <p className="text-lg mb-4 text-custom-blue">{product.description}</p>
          <p className="text-custom-yellow font-semibold text-2xl mb-4">Precio: ${product.price}</p>
          <div className="flex justify-center">
            <button className="bg-custom-green text-white py-2 px-4 rounded" onClick={() => addToCart(product)}>Agregar al Carrito</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const addToCart = (product) => {
  // Logic to add product to cart
  console.log('Adding to cart:', product);
};

export default ItemDetail;
