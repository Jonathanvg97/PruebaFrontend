import React, { createContext, useContext, useReducer, useEffect } from 'react';

const cartActionTypes = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  INCREMENT_QUANTITY: 'INCREMENT_QUANTITY',
  DECREMENT_QUANTITY: 'DECREMENT_QUANTITY',
};

const cartReducer = (state, action) => {
  if (!state.cart) {
    state.cart = [];
  }

  switch (action.type) {
    case cartActionTypes.ADD_TO_CART:
      const { product } = action;
      const existingProductIndex = state.cart.findIndex((item) => item.id === product.id);

      if (existingProductIndex !== -1) {
        // Si el producto ya existe, incrementar la cantidad
        state.cart[existingProductIndex].quantity += 1;
        return {
          ...state,
          cart: [...state.cart],
        };
      } else {
        // Si el producto no existe en el carrito, agregarlo
        return {
          ...state,
          cart: [...state.cart, { ...product, quantity: 1 }],
        };
      }
    case cartActionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.productId),
      };
    case cartActionTypes.INCREMENT_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.productId ? { ...item, quantity: item.quantity + 1 } : item
        ),
      };
    case cartActionTypes.DECREMENT_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.productId && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };
    default:
      return state;
  }
};

const loadCartFromLocalStorage = () => {
    const cartData = localStorage.getItem('cart');
    console.log('Cart Data:', cartData);

    console.log('Datos cargados del localStorage:', cartData);
    return cartData ? JSON.parse(cartData) : { cart: [] };
  };
  

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, loadCartFromLocalStorage);

  useEffect(() => {
    // Guardar el carrito en el localStorage cada vez que cambie
    localStorage.setItem('cart', JSON.stringify(cartState));
  }, [cartState]);

  const addToCart = (product) => {
    console.log('Añadiendo al carrito:', product);
    dispatch({ type: cartActionTypes.ADD_TO_CART, product });
  };
  
  const removeFromCart = (productId) => {
    console.log('Eliminando del carrito:', productId);
    dispatch({ type: cartActionTypes.REMOVE_FROM_CART, productId });
  };
  
  const incrementQuantity = (productId) => {
    console.log('Incrementando cantidad:', productId);
    dispatch({ type: cartActionTypes.INCREMENT_QUANTITY, productId });
  };
  
  const decrementQuantity = (productId) => {
    console.log('Decrementando cantidad:', productId);
    dispatch({ type: cartActionTypes.DECREMENT_QUANTITY, productId });
  };
  

  return (
    <CartContext.Provider
      value={{
        cart: cartState.cart,
        addToCart,
        removeFromCart,
        incrementQuantity,
        decrementQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  return useContext(CartContext);
};

export { CartProvider, useCart };
