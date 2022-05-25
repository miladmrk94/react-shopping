import {
  DELETE_PRODUCT,
  GET_PRODUCT,
  MINUS_PRODUCT,
  PLUS_PRODUCT,
} from "./productTypes";

const initialState = {
  cart: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT:
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

    case PLUS_PRODUCT: {
      const id = action.payload;
      const cartClone = [...state.cart];
      const index = cartClone.findIndex((i) => {
        return i.id === id;
      });
      const myProduct = { ...cartClone[index] };
      myProduct.quantity++;
      cartClone[index] = myProduct;
      return { ...state, cart: cartClone };
    }

    case MINUS_PRODUCT: {
      const id = action.payload;
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
    case DELETE_PRODUCT: {
      const id = action.payload;
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

export default productReducer;
