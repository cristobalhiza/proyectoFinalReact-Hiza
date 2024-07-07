import { useState, useEffect } from "react";
import { getFirestore, getDoc, doc } from "firebase/firestore";

const useProductDetails = (itemId) => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const db = getFirestore();
        const productRef = doc(db, "products", itemId);
        const snapshot = await getDoc(productRef);
        if (snapshot.exists()) {
          setProduct({ id: snapshot.id, ...snapshot.data() });
        } else {
          setError("Producto no encontrado");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [itemId]);

  return { product, loading, error };
};

export default useProductDetails;
