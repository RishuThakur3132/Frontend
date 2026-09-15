import { createContext, useReducer } from "react";

export const cartContext = createContext();

const initialState = [];

function reducer(state, action) {
  switch (action.type) {

    case "ADD_TO_CART": {
      const exists = state.find(
        (item) => item.id === action.product.id
      );

      if (exists) {
        return state;
      }

      return [...state, { ...action.product, quantity: 1 }];
    }

    case "INCREASE":
      return state.map((item) =>
        item.id === action.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

    case "DECREASE":
      return state.map((item) =>
        item.id === action.id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );

    case "DELETE":
      return state.filter(
        (item) => item.id !== action.id
      );

    case "CLEAR":
      return [];

    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(reducer, initialState);

  return (
    <cartContext.Provider value={{ cart, dispatch }}>
      {children}
    </cartContext.Provider>
  );
}