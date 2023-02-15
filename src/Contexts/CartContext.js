import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const handleAddToCart = (cartItem) => {
    const hasSameId = (cItem) => cItem.id === cartItem.id;
    const alreadyInCart = cartItems.find(hasSameId);
    if (alreadyInCart) {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          hasSameId(item) ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      const item = { ...cartItem, quantity: 1 };
      setCartItems((prevItems) => [...prevItems, item]);
    }
  };
  return (
    <CartContext.Provider value={{ cartItems, handleAddToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
