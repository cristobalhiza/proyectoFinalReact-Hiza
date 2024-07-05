import React from "react";
import { useParams } from "react-router-dom";
import ItemListContainerComponent from "../components/ItemListContainerComponent/ItemListContainerComponent";
import useProductsByCategory from "../hooks/UseProductByCategory";

const CategoryPage = () => {
  const { category } = useParams();
  const { products, error, loading } = useProductsByCategory(category);

  if (loading) return <div className="text-center mt-10 text-xl">Loading...</div>;
  if (error) return <div className="text-center mt-10 text-xl text-red-500">{error}</div>;

  return (
    <div className="max-w-screen-xl mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-6">Categoría: {category}</h1>
      <ItemListContainerComponent products={products} />
    </div>
  );
};

export default CategoryPage;
