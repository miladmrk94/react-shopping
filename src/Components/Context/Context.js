import React, { useContext } from "react";
import { useReducer } from "react";

const productContext = React.createContext();
const productDispatcher = React.createContext();

const Context = ({ children }) => {
  const initialState = {
    cart: [],
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

      case "plusProduct": {
        const id = action.id;
        const cartClone = [...state.cart];
        const index = cartClone.findIndex((i) => {
          return i.id === id;
        });
        const myProduct = { ...cartClone[index] };
        myProduct.quantity++;
        cartClone[index] = myProduct;
        return { ...state, cart: cartClone };
      }

      case "minusProduct": {
        const id = action.id;
        const cartClone = [...state.cart];
        const index = cartClone.findIndex((i) => {
          return i.id === id;
        });
        const myProduct = { ...cartClone[index] };
        if (myProduct.quantity <= 1) {
          const deleteProduct = state.cart.filter((i) => {
            return i.id !== id;
          });
          return { ...state, cart: deleteProduct };
        } else {
          myProduct.quantity--;
          cartClone[index] = myProduct;
          return { ...state, cart: cartClone };
        }
      }
      case "deleteProduct": {
        const id = action.id;
        const deleteProduct = state.cart.filter((i) => {
          return i.id !== id;
        });
        console.log(deleteProduct);
        return { ...state, cart: deleteProduct };
      }
      default:
        return state;
    }
  };
  const [product, dispatch] = useReducer(reducer, initialState);

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
