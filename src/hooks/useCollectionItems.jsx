import { useState, useEffect } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const useCollectionItems = (collectionName) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const db = getFirestore();
        const itemsCollection = collection(db, collectionName);
        const itemsSnapshot = await getDocs(itemsCollection);
        const itemsList = itemsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log("Productos obtenidos:", itemsList);
        setItems(itemsList);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, [collectionName]);

  return { items, loading, error };
};

export default useCollectionItems;
