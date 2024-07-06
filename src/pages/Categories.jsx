import React from "react";
import { useParams } from "react-router-dom";
import useProductsByCategory from "../hooks/UseProductByCategory";
import ProductCard from "../components/ProductCardComponent/ProductCardComponent"; //

const CategoryPage = () => {
  const { category } = useParams();
  const { products, loading, error } = useProductsByCategory(category);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="container mx-auto py-8 mt-16">
      <h2 className="mb-6 text-center text-custom-blue text-base">
        Productos / Categorías / {category}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mx-16">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
