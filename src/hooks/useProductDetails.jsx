import { useState, useEffect } from "react";
import { getProductById } from "../services/productsServices";

const useProductDetails = (itemId) => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await getProductById(itemId);
        setProduct(res.data);
      } catch (err) {
        console.error(err);
        setError("Error de red: Fallo al recuperar");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [itemId]);

  return { product, loading, error };
};

export default useProductDetails;
