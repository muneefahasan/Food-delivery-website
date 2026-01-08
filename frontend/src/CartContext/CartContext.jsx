import React, { createContext, useContext, useEffect, useReducer, useCallback } from 'react'

const CartContext = createContext();

//REDUCER HANDLING CART ACTIONS LIKE ADD,REMOVE,UPDATE QUANTITY AND ITEM
const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM': {
            const { item, quantity } = action.payload;
            const existingItem = state.find(i => i.id === item.id);
            if (existingItem) {
                return state.map(i => i.id === item.id ? { ...i, quantity } : i)
            }
            return [...state, { ...item, quantity }];
        }
        case 'REMOVE_ITEM': {
            return state.filter(i => i.id !== action.payload.id);
        }
        case 'UPDATE_QUANTITY': {
            const { itemId, newQuantity } = action.payload;
            return state.map(i => i.id === itemId ? {
                ...i, quantity: Math.max(1, newQuantity)
            } : i)

        }
        default: {
            return state;
        }

    }
}

//INITIALIST CART FROM LOCAL STORAGE
const initializer = () => {
    if (typeof window !== 'undefined') {
        const localCart = localStorage.getItem('cart');
        return localCart ? JSON.parse(localCart) : [];
    }
    return [];

}

export const CartProvider = ({ children }) => {

    const [cartItems, dispatch] = useReducer(cartReducer, [], initializer);

    //PERIST CART STATE TO LOCALSTORAGE
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    //CALCULATE TOTAL COST AND TOTAL ITEM COUNT
    const totalCost = cartItems.reduce((total, item) => {
        const price = parseFloat(String(item.price).replace(/[^0-9.]/g, '')) || 0;
        return total + price * item.quantity;
    }, 0).toFixed(2);
    const totalItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    //FORMAT TOTAL ITEMS IN POWER FORM
    const formatItems = (num) => {
        if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'k';
        }
        return num;
    }


    //DISPATHCHER WRAPPED WITH useCAllBACK FOR PERFORMANCE
    const addToCart = useCallback((item, quantity) => {
        dispatch({ type: 'ADD_ITEM', payload: { item, quantity } });
    }, []);
    const removeFromCart = useCallback((itemId) => {
        dispatch({ type: 'REMOVE_ITEM', payload: { id: itemId } });
    }, []);
    const updateItemQuantity = useCallback((itemId, newQuantity) => {
        dispatch({ type: 'UPDATE_QUANTITY', payload: { itemId, newQuantity } });
    }, []);

    return (
        <CartContext.Provider value={{
            cartItems,
            totalCost,
            totalItemCount: formatItems(totalItemCount),
            addToCart,
            removeFromCart,
            updateItemQuantity,

        }}>

            {children}
        </CartContext.Provider>
    )

}
export const useCart = () => React.useContext(CartContext);