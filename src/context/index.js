import { useReducer, createContext } from "react";

// initial state
const initialState = {
  cart: {},
};

const Context = createContext({});

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      const item = action.payload;
      return {
        ...state,
        cart: {
            item,
            qty: 1,
        }
      }
    case "REMOVE_FROM_CART":
      return { 
        cart: { }
      }
    default:
      return state;
  }
}

// context provider
const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>
      {children}
    </Context.Provider>
  );
}

export { Context, Provider }; 