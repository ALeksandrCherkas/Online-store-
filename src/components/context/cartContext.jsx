import { createContext, use, useState } from "react";

export const CartContext = createContext();

export function CartProvider({children}){
    const [cartItems, setCartItems] = useState([]);

    const updateQuantity = (id, newQuantity) => {
        setCartItems(prev => prev.map(item=>
            item.id === id ? {...item, quantity: newQuantity} : item
            )    
        )
    }

    const addToCart = (product, count) => {
        setCartItems(prev => {
            const isInBag = prev.find(item => item.id === product.id);
            
            if(isInBag){
                return prev.map(item=> 
                    item.id === product.id ? {...item, quantity: item.quantity + count} : item
                )
            }
            return [...prev, {...product, quantity: count}]
            
        });
    };

    const removeFromCart = (id) => {
        setCartItems(prev => prev.filter(item => item.id !== id));
    };


    return (
        <CartContext.Provider value={{cartItems, addToCart, removeFromCart, updateQuantity}}>
            {children}
        </CartContext.Provider>
    );
}