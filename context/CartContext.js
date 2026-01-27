'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
    // Single item cart limit as requested
    const [cartItem, setCartItem] = useState(null);

    const addToCart = (product) => {
        setCartItem(product);
    };

    const removeFromCart = () => {
        setCartItem(null);
    };

    const clearCart = () => {
        setCartItem(null);
    };

    return (
        <CartContext.Provider value={{ cartItem, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}
