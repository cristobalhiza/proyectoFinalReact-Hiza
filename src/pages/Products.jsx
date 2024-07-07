import React from "react";
import "tailwindcss/tailwind.css";
import Meta from "../utils/Meta";
import useCollectionItems from "../hooks/useCollectionItems";
import ProductCard from "../components/ProductCardComponent/ProductCardComponent";
import Loader from "../components/LoaderComponent/LoaderComponent";

const ItemListContainerComponent = () => {
  const { items, loading, error } = useCollectionItems("products");

  if (loading) return <Loader />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <Meta
        title="Shop Tennis and Padel Gear - Rackets, Balls, Apparel & More | Court Corner"
        description="Discover the best selection of tennis and padel gear at Court Corner. Shop rackets, balls, apparel, and accessories from top brands. Find everything you need to enhance your game."
      />
      <div className="container mx-auto py-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mx-16">
          {items.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ItemListContainerComponent;
