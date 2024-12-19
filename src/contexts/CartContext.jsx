import { useState, useEffect, createContext } from 'react';

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const existingCart = JSON.parse(localStorage.getItem('cart')) || [];

        setCart(existingCart);
    }, []);

    return (
        <CartContext.Provider value={{ cart, setCart }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;
