import {
  DELETE_PRODUCT,
  GET_PRODUCT,
  MINUS_PRODUCT,
  PLUS_PRODUCT,
} from "./productTypes";

export const getProduct = (id) => {
  return { type: GET_PRODUCT, payload: id };
};

export const plusProduct = (id) => {
  return { type: PLUS_PRODUCT, payload: id };
};

export const minusProduct = (id) => {
  return { type: MINUS_PRODUCT, payload: id };
};

export const deleteProduct = (id) => {
  return { type: DELETE_PRODUCT, payload: id };
};
