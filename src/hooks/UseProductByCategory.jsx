import { useState, useEffect } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const useProductsByCategory = (category) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const db = getFirestore();
        const productsCollection = collection(db, "products");
        const productsSnapshot = await getDocs(productsCollection);
        const productsList = productsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const filteredProducts = productsList.filter(
          (product) =>
            Array.isArray(product.category) &&
            product.category.includes(category)
        );

        setProducts(filteredProducts);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  return { products, loading, error };
};

export default useProductsByCategory;
