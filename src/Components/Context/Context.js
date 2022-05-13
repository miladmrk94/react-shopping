import React, { useContext } from "react";
import { useReducer } from "react";

const productContext = React.createContext();
const productDispatcher = React.createContext();

const Context = ({ children }) => {
  const initialState = {
    cart: [],
    total: 0,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "getProduct":
        const product = action.payload;

        const cartClone = [...state.cart];
        const index = cartClone.findIndex((item) => {
          return item.id === product.id;
        });
        if (index < 0) {
          cartClone.push({ ...product, quantity: 1 });
        } else {
          const myProduct = { ...cartClone[index] };
          myProduct.quantity++;
          cartClone[index] = myProduct;
        }
        return { ...state, cart: cartClone };

      default:
        return state;
    }
  };
  const [product, dispatch] = useReducer(reducer, initialState);

  console.log(product);
  return (
    <productContext.Provider value={product}>
      <productDispatcher.Provider value={dispatch}>
        {children}
      </productDispatcher.Provider>
    </productContext.Provider>
  );
};

export default Context;

export const useProduct = () => {
  return useContext(productContext);
};

export const useProductAction = () => {
  return useContext(productDispatcher);
};
