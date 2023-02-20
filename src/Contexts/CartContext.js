import { createContext, useState } from "react";
import { useLocalStorage } from "../hooks/locatStorage";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useLocalStorage("cartItems", []);

  const handleAddToCart = (cartItem) => {
    const hasEqualId = (cItem) => cItem.id === cartItem.id;
    const alreadyInCartItem = cartItems.find(hasEqualId);

    if (alreadyInCartItem) {
      updateQuantity();
    } else {
      const item = { ...cartItem, quantity: 1 };
      setCartItems((prevItems) => [...prevItems, item]);
    }
  };

  const resetCart = () => {
    setCartItems([]);
  };

  const updateQuantity = (id, type) => {
    const increaseValue = type === "increase" ? 1 : -1;
    const updatedItem = (i) =>
      i.id === id ? { ...i, quantity: i.quantity + increaseValue } : i;
    setCartItems((prevItems) =>
      prevItems.map(updatedItem).filter((i) => i.quantity)
    );
  };
  return (
    <CartContext.Provider
      value={{ cartItems, handleAddToCart, resetCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
export { CartContext, CartProvider };
