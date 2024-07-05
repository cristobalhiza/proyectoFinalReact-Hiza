import { useState, useEffect } from "react";
import { collection, query, where, getDocs, getFirestore } from "firebase/firestore";

const useProductsByCategory = (category) => {
  const [data, setData] = useState({ products: [], categories: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getFirestore();
        const productsCollection = collection(db, "products");
        
        let productsSnapshot;
        if (category) {
          const q = query(productsCollection, where("category", "array-contains", category));
          productsSnapshot = await getDocs(q);
        } else {
          productsSnapshot = await getDocs(productsCollection);
        }

        const productsList = productsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        // Obtener categorías únicas desde products
        const categories = [...new Set(productsList.flatMap(product => product.category))];

        setData({ products: productsList, categories });
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [category]);

  return { ...data, loading, error };
};

export default useProductsByCategory;
