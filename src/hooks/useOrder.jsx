import { getFirestore, collection, addDoc } from "firebase/firestore";
import { useCart } from "../context/CartContext";

const useOrder = () => {
  const { cart, clearCart } = useCart();

  const createOrder = async () => {
    const items = cart.map((item) => ({
      title: item.title,
      id: item.id,
      quantity: item.quantity,
      price: item.price,
    }));

    const totalPrice = items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    const order = {
      items,
      totalPrice,
      createdAt: new Date(),
    };

    try {
      const db = getFirestore();
      const ordersCollection = collection(db, "orders");
      const docRef = await addDoc(ordersCollection, order);
      console.log("Order ID: ", docRef.id);
      clearCart();
    } catch (error) {
      console.error("Error creating order: ", error);
    }
  };

  return { createOrder };
};

export default useOrder;
