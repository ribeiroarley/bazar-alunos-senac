// src/context/CartContext.jsx
import { createContext, useState, useMemo } from 'react';

export const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const totalItems = useMemo(() => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  }, [cart]);

  const addToCart = (product, size, color, quantity = 1) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(
        item => item.id === product.id && item.size === size && item.color === color
      );

      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id && item.size === size && item.color === color
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [
        ...prevCart,
        {
          ...product,
          size,
          color,
          quantity
        }
      ];
    });
  };

  const removeFromCart = (id, size) => {
    setCart(prevCart =>
      prevCart.filter(item => !(item.id === id && item.size === size))
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const value = {
    cart,
    totalItems,
    addToCart,
    removeFromCart,
    clearCart
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}
