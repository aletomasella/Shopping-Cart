import { createContext, ReactNode, useContext, useState } from "react";

type CardItem = {
  id: number;
  quantity: number;
};

type ShoppingCartProiderProps = {
  children: ReactNode;
};

type ShoppingCartContextProps = {
  openCart: () => void;
  closeCart: () => void;
  getItemQuantity: (id: number) => number;
  increaseItemQuantity: (id: number) => void;
  decreaseItemQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
};

const ShoppingCartContext = createContext({} as ShoppingCartContextProps);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProiderProps) {
  const [cartItems, setCartItems] = useState<CardItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  const getItemQuantity = (id: number) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };

  const increaseItemQuantity = (id: number) => {
    setCartItems((currenItems) => {
      if (currenItems.find((item) => item.id === id) == null) {
        return [...currenItems, { id, quantity: 1 }];
      } else {
        return currenItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity++ };
          } else {
            return item;
          }
        });
      }
    });
  };

  const decreaseItemQuantity = (id: number) => {
    setCartItems((currenItems) => {
      if (currenItems.find((item) => item.id === id)?.quantity === 1) {
        return currenItems.filter((item) => item.id !== id);
      } else {
        return currenItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity-- };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        closeCart,
        openCart,
        getItemQuantity,
        increaseItemQuantity,
        decreaseItemQuantity,
        removeFromCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
