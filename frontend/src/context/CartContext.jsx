import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState({
    tripId: null,
    seats: [],
    total: 0,
  });

  // 👉 adicionar assentos
  const addToCart = (tripId, seats, price) => {
    setCart({
      tripId,
      seats,
      total: seats.length * price,
    });
  };

  // 👉 limpar carrinho
  const clearCart = () => {
    setCart({
      tripId: null,
      seats: [],
      total: 0,
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

// 👉 hook pra usar fácil
export function useCart() {
  return useContext(CartContext);
}