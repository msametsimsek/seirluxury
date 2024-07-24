import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const MAX_CART_ITEMS = 10; // Sepette maksimum izin verilen ürün sayısı

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(
    localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : []
  );

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (newItem) => {
    // Yeni eklenen ürünün sepet içinde zaten olup olmadığını ve miktarını kontrol et
    const existingItem = cartItems.find((item) => item._id === newItem._id);
  
    if (existingItem) {
      // Eğer ürün zaten sepete eklenmişse ve miktarı 10 ise eklemeyi reddet
      if (existingItem.quantity >= 10) {
        console.log("Bu üründen sepete maksimum 10 adet ekleyebilirsiniz.");
        return;
      }
  
      // Ürünü sepete eklenmiş miktarını güncelle
      const updatedCart = cartItems.map((item) =>
        item._id === newItem._id
          ? { ...item, quantity: item.quantity + 1 } // Add one item at a time
          : item
      );
      setCartItems(updatedCart);
    } else {
      // Eğer ürün daha önce eklenmemişse ve sepet doluysa eklemeyi reddet
      if (cartItems.length >= MAX_CART_ITEMS) {
        console.log("Sepette zaten maksimum sayıda ürün bulunmaktadır.");
        return;
      }
  
      // Yeni ürünü sepete ekle
      setCartItems((prevCart) => [
        ...prevCart,
        {
          ...newItem,
          quantity: 1, // Add one item at a time
        },
      ]);
    }
  };
  

  const removeFromCart = (itemId, quantityToRemove = 1) => {
    setCartItems((prevCart) => {
      const updatedCart = prevCart.map((item) => {
        if (item._id === itemId) {
          const updatedQuantity = item.quantity - quantityToRemove;
          return {
            ...item,
            quantity: updatedQuantity > 0 ? updatedQuantity : 0,
          };
        }
        return item;
      });

      return updatedCart.filter((item) => item.quantity > 0);
    });
  };

  const cartSubtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        cartSubtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node,
};

export default CartProvider;
